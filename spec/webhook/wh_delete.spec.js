// MIT License
//
// Copyright 2018 Electric Imp
//
// SPDX-License-Identifier: MIT
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the Software), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
// OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

'use strict';

require('jasmine-expect');
const config = require('../config');
const ImptTestHelper = require('../ImptTestHelper');
const MessageHelper = require('../MessageHelper');
const Identifier = require('../../lib/util/Identifier');
const Util = require('util');
const UserInterractor = require('../../lib/util/UserInteractor');

const PRODUCT_NAME = `__impt_wh_product${config.suffix}`;
const DG_NAME = `__impt_wh_device_group${config.suffix}`;
const DG_NAME_2 = `__impt_wh_device_group_2${config.suffix}`;
const WH_URL = `http://example.com/wd/${config.suffix}`;

// Test suite for 'impt webhook delete command.
// Runs 'impt webhook delete' command with different combinations of options,
ImptTestHelper.OUTPUT_MODES.forEach((outputMode) => {
    describe(`impt webhook delete test suite (output: ${outputMode ? outputMode : 'default'}) >`, () => {
        let wh_id = null;

        beforeAll((done) => {
            ImptTestHelper.init().
                then(_testSuiteCleanUp).
                then(_testSuiteInit).
                then(done).
                catch(error => done.fail(error));
        }, ImptTestHelper.TIMEOUT);

        afterAll((done) => {
            _testSuiteCleanUp().
                then(ImptTestHelper.cleanUp).
                then(done).
                catch(error => done.fail(error));
        }, ImptTestHelper.TIMEOUT);

        // delete all entities using in impt webhook delete  test suite
        function _testSuiteCleanUp() {
            return ImptTestHelper.runCommand(`impt product delete --product ${PRODUCT_NAME} --force --confirmed`, ImptTestHelper.emptyCheck).
                then(() => ImptTestHelper.runCommand(`impt dg delete --dg ${DG_NAME_2} -f `, ImptTestHelper.emptyCheck)).
                then(() => ImptTestHelper.runCommand(`impt webhook delete --wh ${wh_id} -q`, ImptTestHelper.emptyCheck));
        }

        // prepare test environment for impt webhook delete test suite
        function _testSuiteInit() {
            return ImptTestHelper.runCommand(`impt product create --name ${PRODUCT_NAME}`, ImptTestHelper.emptyCheck).
                then(() => ImptTestHelper.runCommand(`impt dg create --name ${DG_NAME} -p ${PRODUCT_NAME} `, ImptTestHelper.emptyCheck)).
                then(() => ImptTestHelper.runCommand(`impt webhook create --dg ${DG_NAME} --url ${WH_URL} --event deployment --mime json `, (commandOut) => {
                    wh_id = ImptTestHelper.parseId(commandOut);
                    if (!wh_id) fail("TestSuitInit error: Failed to create webhook");
                ImptTestHelper.emptyCheck(commandOut);
                }));
        }

        // check 'webhook successfully deleted' output message 
        function _checkSuccessDeleteWebhookMessage(commandOut, webhookId) {
            ImptTestHelper.checkOutputMessage(`${outputMode}`, commandOut,
                Util.format(`${UserInterractor.MESSAGES.ENTITY_DELETED}`,
                    `${Identifier.ENTITY_TYPE.TYPE_WEBHOOK} "${webhookId}"`)
            );
        }

        it('webhook delete', (done) => {
            ImptTestHelper.runCommand(`impt webhook delete --wh ${wh_id} --confirmed ${outputMode}`, (commandOut) => {
                _checkSuccessDeleteWebhookMessage(commandOut, wh_id);
                ImptTestHelper.checkSuccessStatus(commandOut);
            }).
                then(() => {
                    ImptTestHelper.runCommand(`impt webhook info --wh ${wh_id} ${outputMode}`, (commandOut) => {
                        MessageHelper.checkEntityNotFoundError(commandOut, Identifier.ENTITY_TYPE.TYPE_WEBHOOK, wh_id);
                        ImptTestHelper.checkFailStatus(commandOut);
                    });
                }).
                then(done).
                catch(error => done.fail(error));
        });

        it('webhook delete without id', (done) => {
            ImptTestHelper.runCommand(`impt webhook delete --wh `, (commandOut) => {
                MessageHelper.checkNotEnoughArgumentsError(commandOut, 'wh');
                ImptTestHelper.checkFailStatus(commandOut);
            }).
                then(() => {
                    ImptTestHelper.runCommand(`impt webhook delete --confirmed `, (commandOut) => {
                        MessageHelper.checkMissingArgumentsError(commandOut, 'wh');
                        ImptTestHelper.checkFailStatus(commandOut);
                    });
                }).
                then(done).
                catch(error => done.fail(error));
        });

        it('delete not exist webhook', (done) => {
            ImptTestHelper.runCommand(`impt webhook delete --wh not-exist-webhook ${outputMode}`, (commandOut) => {
                MessageHelper.checkEntityNotFoundError(commandOut, Identifier.ENTITY_TYPE.TYPE_WEBHOOK, 'not-exist-webhook');
                ImptTestHelper.checkFailStatus(commandOut);
            }).
                then(done).
                catch(error => done.fail(error));
        });
    });
});
