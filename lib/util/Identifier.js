// MIT License
//
// Copyright 2018 Electric Imp
//
// SPDX-License-Identifier: MIT
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
// OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const Util = require('util');
const Errors = require('./Errors');

// Possible types of Identifier
const IDENTIFIER_TYPE = {
    ID : 1,          // impCentral API id
    NAME : 2,        // impCentral API name attribute
    ANY : 3,         // id or any valid attribute depending on Entity type. See impt Entities Identification
    HIERARCHICAL : 4 // hierarchical identifier, e.g. {<ACCOUNT_IDENTIFIER>}{<PRODUCT_IDENTIFIER>} for Product or 
                     // {<ACCOUNT_IDENTIFIER>}{<PRODUCT_IDENTIFIER>}{<DEVICE_GROUP_IDENTIFIER} for Device Group
};

// Identifier origin
const IDENTIFIER_ORIGIN = {
    CLI_COMMAND : 1,          // obtained from impt command options
    CONFIG_FILE : 2,          // obtained from Project or Test Config
    IMP_CENTRAL_API_GET : 3,  // obtained from impCentral API GET request
    IMP_CENTRAL_API_LIST : 4  // obtained from impCentral API LIST request
};

const ENTITY_TYPE = {
    TYPE_PRODUCT : 'Product',
    TYPE_DEVICE_GROUP : 'Device Group',
    TYPE_DEVICE : 'Device',
    TYPE_BUILD : 'Deployment',
    TYPE_LOGIN_KEY : 'Login Key',
    TYPE_ACCOUNT : 'Account',
    TYPE_WEBHOOK : 'Webhook'
}

// Helper class for entities identification.
class Identifier {
    static get IDENTIFIER_TYPE() {
        return IDENTIFIER_TYPE;
    }

    static get IDENTIFIER_ORIGIN() {
        return IDENTIFIER_ORIGIN;
    }

    static get ENTITY_TYPE() {
        return ENTITY_TYPE;
    }
    
    constructor() {
        this._entity = null;
        this._entityType = null;
        this._attributes = null;
        this._identifier = null;
        this._id = null;
        this._type = IDENTIFIER_TYPE.ANY;
        this._origin = IDENTIFIER_ORIGIN.CLI_COMMAND;
        this._configType = null;
        this._hierarchicalEntitiesInfo = null;
    }

    init(entityType, attributes) {
        this._entityType = entityType;
        this._attributes = attributes;
    }

    clone() {
        const result = new Identifier();
        result._entity = this._entity;
        result._entityType = this._entityType;
        result._attributes = this._attributes;
        result._identifier = this._identifier;
        result._id = this._id;
        result._type = this._type;
        result._origin = this._origin;
        result._configType = this._configType;
        result._hierarchicalEntitiesInfo = this._hierarchicalEntitiesInfo;
        return result;
    }

    get id() {
        return this._id;
    }

    get type() {
        return this._type;
    }

    get attributes() {
        return this._attributes;
    }

    get entityType() {
        return this._entityType;
    }

    get identifier() {
        return this._type === IDENTIFIER_TYPE.ID ? this._id : this._identifier;
    }

    get origin() {
        return this._origin;
    }

    get info() {
        return this._identifier || this._id;
    }

    isImpCentralApiOrigin() {
        return this._origin === IDENTIFIER_ORIGIN.IMP_CENTRAL_API_GET ||
            this._origin === IDENTIFIER_ORIGIN.IMP_CENTRAL_API_LIST;
    }

    initById(id) {
        this._id = id;
        this._type = IDENTIFIER_TYPE.ID;
    }

    initByIdFromConfig(id, configType) {
        this.initById(id);
        this._origin = IDENTIFIER_ORIGIN.CONFIG_FILE;
        this._configType = configType;
    }

    initByIdFromApiData(id) {
        this.initById(id);
        this._origin = IDENTIFIER_ORIGIN.IMP_CENTRAL_API_LIST;
    }

    initByIdentifier(identifier, entity = null) {
        this._identifier = identifier;
        this._entity = entity;
        this._type = this.isHierarchical(identifier) ?
            IDENTIFIER_TYPE.HIERARCHICAL :
            IDENTIFIER_TYPE.ANY;
    }

    initByName(name) {
        this._identifier = name;
        this._type = IDENTIFIER_TYPE.NAME;
        this._attributes = ['name'];
    }

    initByApiEntity(apiEntity, origin) {
        this.initById(apiEntity.id);
        this._origin = origin;
    }

    isEmpty() {
        return !this._id && !this._identifier;
    }

    checkNonEmpty() {
        if (this.isEmpty()) {
            return Promise.reject(new Errors.NoIdentifierError(this._entityType));
        }
        return Promise.resolve();
    }

    isHierarchical(identifier) {
        this._hierarchicalEntitiesInfo = null;
        if (this._entity && this._entity._hasHierarchicalIdentifier() &&
            identifier.startsWith('{') && identifier.endsWith('}')) {
            const parts = identifier.substring(1, identifier.length - 1).split('}{');
            this._hierarchicalEntitiesInfo = this._entity._getHierarchicalEntitiesInfo(parts);
        }
        return this._hierarchicalEntitiesInfo ? true : false;
    }

    getHierarchicalEntitiesInfo() {
        return this._hierarchicalEntitiesInfo;
    }

    checkHierarchicalFilters(filters, apiEntity) {
        if (!filters || !this._entity) {
            return true;
        }
        return new this._entity._Entity().initByApiEntity(apiEntity)._checkHierarchicalFilters(filters);
    }
}

module.exports = Identifier;
