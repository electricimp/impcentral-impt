# impt Test Summary Table #

## Introduction

This doc lists and describes the existing tests for *impt*.

The test descriptions are grouped by the [impt commands](#list-of-tested-commands).

The tests for each command have their own table which describes:
- preconditions,
- command options,
- reference to the test source code.

The normal font indicates positive tests, the **bold font** indicates negative tests.   

## List Of Non-Covered Features ##

- Production features, including `pre-factory`, `pre-production`, `factory` and `production` device group types.
- Collaboration features.
- Positive tests for `impt log stream`.
- Tests for interactive user input.
- Tests for builds identification by `sha` attribute.

## List Of Tested Commands ##

**[impt account info](#account-info)**<br>
**[impt account list](#account-list)**<br>

**[impt auth info](#auth-info)**<br>
**[impt auth login](#auth-login)**<br>
**[impt auth logout](#auth-logout)**<br>

**[impt build cleanup](#build-cleanup)**<br>
**[impt build copy](#build-copy)**<br>
**[impt build delete](#build-delete)**<br>
**[impt build deploy](#build-deploy)**<br>
**[impt build get](#build-get)**<br>
**[impt build info](#build-info)**<br>
**[impt build list](#build-list)**<br>
**[impt build run](#build-run)**<br>
**[impt build update](#build-update)**<br>

**[impt device assign](#device-assign)**<br>
**[impt device info](#device-info)**<br>
**[impt device list](#device-list)**<br>
**[impt device remove](#device-remove)**<br>
**[impt device restart](#device-restart)**<br>
**[impt device unassign](#device-unassign)**<br>
**[impt device update](#device-update)**<br>

**[impt dg builds](#device-group-builds)**<br>
**[impt dg create](#device-group-create)**<br>
**[impt dg delete](#device-group-delete)**<br>
**[impt dg info](#device-group-info)**<br>
**[impt dg list](#device-group-list)**<br>
**[impt dg reassign](#device-group-reassign)**<br>
**[impt dg restart](#device-group-restart)**<br>
**[impt dg unassign](#device-group-unassign)**<br>
**[impt dg update](#device-group-update)**<br>

**[impt log get](#log-get)**<br>
**[impt log stream](#log-stream)**<br>

**[impt loginkey create](#login-key-create)**<br>
**[impt loginkey delete](#login-key-delete)**<br>
**[impt loginkey info](#login-key-info)**<br>
**[impt loginkey list](#login-key-list)**<br>
**[impt loginkey update](#login-key-update)**<br>

**[impt product create](#product-create)**<br>
**[impt product delete](#product-delete)**<br>
**[impt product info](#product-info)**<br>
**[impt product list](#product-list)**<br>
**[impt product update](#product-update)**<br>

**[impt project create](#project-create)**<br>
**[impt project delete](#project-delete)**<br>
**[impt project info](#project-info)**<br>
**[impt project link](#project-link)**<br>
**[impt project update](#project-update)**<br>

**[impt webhook create](#webhook-create)**<br>
**[impt webhook delete](#webhook-delete)**<br>
**[impt webhook info](#webhook-info)**<br>
**[impt webhook list](#webhook-list)**<br>
**[impt webhook update](#webhook-update)**<br>

**[impt test create](#test-create)**<br>
**[impt test delete](#test-delete)**<br>
**[impt test github](#test-github)**<br>
**[impt test info](#test-info)**<br>
**[impt test run](#test-run)**<br>
**[impt test update](#test-update)**<br>

## Impt account command group ##

## account info ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="3" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr>
      <th><sub>user</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>me</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info by me</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info by username</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>id</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info by user id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>email</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info by email</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>not exist<br>
name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info by not exist username</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o<br>value</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./account/account_info.spec.js">account/account_info.spec.js:<br>
account info without user value</a></sub></th>
    </tr>
  </tbody>
</table>

## account list ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="2" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./account/account_list.spec.js">account/account_list.spec.js:<br>
account list</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt auth command group ##

## auth info ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="4"><sub>Precondition</sub></th>
      <th colspan="2"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>auth</sub></th>
      <th><sub>env</sub></th>
      <th><sub>temp</sub></th>
      <th><sub>endpoint</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td rowspan="11"><sub>not<br>
auth</sub></td>
      <td align="left"><sub>IMPT_AUTH_FILE_PATH</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth file path env info</a></sub></td>
    </tr>
    <tr align="center">
     <td align="left"><sub>IMPT_AUTH_FILE_PATH<br>
IMPT_LOGINKEY</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth file path with loginkey env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_AUTH_FILE_PATH<br>
IMPT_USER</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth file path with user env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_LOGINKEY</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth loginkey env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_LOGINKEY<br>
IMPT_ENDPOINT</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth loginkey with endpoint env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_LOGINKEY<br>
IMPT_USER</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth loginkey with user env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_USER<br>
IMPT_PASSWORD</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth user pass env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_USER<br>
IMPT_PASSWORD<br>
IMPT_ENDPOINT</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth user pass with endpoint env info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_USER</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth user without password env info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
auth info without login</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="7"><sub>global<br>
user/pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global temp auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global endpoint auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_AUTH_FILE_PATH</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth file path env and global auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_LOGINKEY</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth loginkey env and global auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_USER</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth user pass env and global auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_PASSWORD</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth pass env and global auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="3"><sub>global<br>
login key</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global loginkey auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global temp loginkey auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global loginkey with endpoint auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>local<br>
login key</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
local loginkey auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan ="5"><sub>local<br>
user/pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_AUTH_FILE_PATH</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth file path env and local auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_LOGINKEY</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth loginkey env and local auth info</a></sub></td>
    </tr>
    <tr align="center">
      <td align="left"><sub>IMPT_USER</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_environment.spec.js">auth/auth_environment.spec.js:<br>
auth user env and local auth info</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
auth info without output value</a></sub></th>
    </tr>
  </tbody>
</table>

## auth login ##

<table>
  <tbody>
    <tr align="center">
      <th rowspan="2"><sub>Precondition</sub></th>
      <th colspan="7"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>auth</sub></th>
      <th><sub>local</sub></th>
      <th><sub>temp</sub></th>
      <th><sub>endpoint</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td rowspan="27"><sub>not<br>
auth</sub></td>
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth//auth_user_pwd.spec.js">auth//auth_user_pwd.spec.js:<br>
global login</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global login with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
     <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global temp login</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global temp login with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global temp login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local login</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local login with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local temp login</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local temp login with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local temp login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>user<br>
pass</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
login without output argument</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>user<br>
pass</sub></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
login without endpoint argument</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>user<br>
pass<br>
w/o value </sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
login without user/password</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global loginkey login by loginkey</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global temp loginkey login by loginkey</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global loginkey login by loginkey with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
local temp loginkey login by loginkey</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
local loginkey login by loginkey with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global temp loginkey login by loginkey with endpoint</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>lk w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
global loginkey login without loginkey</a></sub></th>
    </tr>
    <tr align="center">
     <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="7"><sub>global<br>
user/pass</sub></td>
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated global login with confirm</a></sub></td>
    </tr>
    <tr align="center">
          <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated global login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
     <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated global temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated global temp login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated global temp loginkey login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated global loginkey login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>lk</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated local temp loginkey login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="6"><sub>global<br>
login key</sub></td>
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated global login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated global login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated global temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated local login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated local login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_loginkey.spec.js">auth/auth_loginkey.spec.js:<br>
repeated local temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="4"><sub>local<br>
user/pass</sub></td>
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated local login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated local login with endpoint and confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated local temp login with confirm</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>user<br>
pass</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
repeated local temp login with endpoint and confirm</a></sub></td>
    </tr>
  </tbody>
</table>

## auth logout ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th colspan="3"><sub>Precondition</sub></th>
      <th colspan="3"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th><sub>auth</sub></th>
      <th><sub>temp</sub></th>
      <th><sub>endpoint</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td rowspan="3"><sub>not<br>
      auth</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout without login</a></sub></td>
    </tr>
    <tr align="center">
     <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">help/help.spec.js:<br>
local logout without login</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">auth/auth_user_pwd.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="4"><sub>global<br>
user/pass</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local logout with global login</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout with temp login</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout with endpoint login</a></sub></td>
    </tr>
    <tr align="center">
      <td rowspan="3"><sub>local<br>
user/pass</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
local logout</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout with local login</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./auth/auth_user_pwd.spec.js">auth/auth_user_pwd.spec.js:<br>
global logout without output value</a></sub></th>
    </tr>
  </tbody>
</table>

## Impt build command group ##

## build cleanup ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>product</sub></th>
      <th><sub>unflag</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"><sub>zombie builds<br>
exist for<br>
product</sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_cleanup.spec.js">build/build_cleanup.spec.js:<br>
build cleanup by product id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>zombie builds<br>
exist for<br>
product</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_cleanup.spec.js">build/build_cleanup.spec.js:<br>
flagged build cleanup by product name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>zombie builds<br>
exist for<br>
other product</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_cleanup.spec.js">build/build_cleanup.spec.js:<br>
build cleanup</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>zombie builds<br>
exist for<br>
other product</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_cleanup.spec.js">build/build_cleanup.spec.js:<br>
flagged build cleanup</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>product<br>
not exist</sub></th>
      <th><sub>name</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_cleanup.spec.js">build/build_cleanup.spec.js:<br>
build cleanup by not exist product</a></sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td>default</td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## build copy ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>build</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>all</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>sha</sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>tag</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>origin</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by origin</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by project</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>project</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy by not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>dg not exist</sub></th>
      <th><sub>id</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_copy.spec.js">build/build_copy.spec.js:<br>
build copy to not exist dg</a></sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## build delete ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>build</sub></th>
      <th><sub>force</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
build delete by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>sha</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
build delete by sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>tag</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
build delete by tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>origin</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
build delete by origin</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>build<br>
flagged </sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
flagged build delete</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>build<br>
flagged </sub></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
flagged build force delete</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>dg<br>
min-sup-dep</sub></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_delete.spec.js">build/build_delete.spec.js:<br>
min supported build delete</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## build deploy ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="9"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>dg</sub></th>
      <th><sub>device<br>
file</sub></th>
      <th><sub>agent<br>
file</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>origin</sub></th>
      <th><sub>tag</sub></th>
      <th><sub>flagged</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>2x</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy by dg name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td><sub>project</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy by project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>project</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy by not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>d-file<br>
not exist</sub></th>
      <th><sub>id</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy by not exist device group</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>a-file<br>
not exist</sub></th>
      <th><sub>id</sub></th>
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy with not exist device file</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>dg not exist</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_deploy.spec.js">build/build_deploy.spec.js:<br>
build deploy with not exist agent file</a></sub></th>
    </tr>
  </tbody>
</table>

## build get ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="8"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>build</sub></th>
      <th><sub>device<br>
file</sub></th>
      <th><sub>agent<br>
file</sub></th>
      <th><sub>device<br>
only</sub></th>
      <th><sub>agent<br>
only</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by build id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>sha</sub></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by build sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>tag</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by build tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>origin</sub></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by build origin</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>project<br>
not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get by not exist project</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>id</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get without device and agent file</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>id</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_get.spec.js">build/build_get.spec.js:<br>
build get without agent file</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th><sub>Y</sub></th>
      <th align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></th>
    </tr>
  </tbody>
</table>

## build info ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="3"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>build</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>sha</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>tag</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>origin</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by origin</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>project</sub></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
build info by not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>build<br>
not exist</sub></th>
      <th><sub>id</sub></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_info.spec.js">build/build_info.spec.js:<br>
not exist build info</a></sub></th>
    </tr>
  </tbody>
</table>

## build list ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="12"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>owner</sub></th>
      <th><sub>product</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>dg<br>
type</sub></th>
      <th><sub>sha</sub></th>
      <th><sub>tag</sub></th>
      <th><sub>flagged</sub></th>
      <th><sub>unflagged</sub></th>
      <th><sub>non<br>
zombie</sub></th>
      <th><sub>zombie</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>me</sub></td>
      <td></td>
      <td></td>
      <td><sub>development</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by owner me and dg type</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by owner id and product id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by owner name and product name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>email</sub></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by owner email and dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by dg name and sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by sha and tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>2x</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by several tags</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by product id and flagged</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by product id and unflagged</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by product id and zombie</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by product id and not zombie</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>owner<br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>*json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_list.spec.js">build/build_list.spec.js:<br>
build list by not exist owner</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## build run ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="11"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>dg</sub></th>
      <th><sub>device<br>
file</sub></th>
      <th><sub>agent<br>
file</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>origin</sub></th>
      <th><sub>tag</sub></th>
      <th><sub>flagged</sub></th>
      <th><sub>cond<br>
restart</sub></th>
      <th><sub>log</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>2x</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run by dg name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td><sub>project</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run by project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>project</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run by not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>d-file<br>
not exist</sub></th>
      <th><sub>name</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run with not exist device file</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>a-file<br>
not exist</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run with not exist agent file</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>dg<br>
not exist</sub></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run by not exist device group</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without dg value</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without device file value</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without agent file value</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without description value</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without origin value</a></sub></th>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>json</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_run.spec.js">build/build_run.spec.js:<br>
build run without tag value</a></sub></th>
    </tr>
  </tbody>
</table>

## build update ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="7"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>build</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>tag</sub></th>
      <th><sub>remove<br>
tag</sub></th>
      <th><sub>flagged</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>defaut</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>sha</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update flagged by sha</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>tag</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update descr by tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>origin</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update tag by origin</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update remove tag by project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>3x</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update several tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>2x</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update remove several tag</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>project</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./build/build_update.spec.js">build/build_update.spec.js:<br>
build update by not exist project</a></sub></th>
    </tr>
  </tbody>
</table>

## Impt device command group ##

## device assign ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
device assign to dg by name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>mac</sub></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
device assign to dg by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>agent id</sub></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
device assign to project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
repeat device assign</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>project<br>
not exist</sub></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
device assign to not exist project</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>dg<br>
not exist</sub></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_assign.spec.js">device/device_assign.spec.js:<br>
device assign to not exist device group</a></sub></td>
    </tr>
  </tbody>
</table>

## device info ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="3"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
device info by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>mac</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
device info by mac</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>agent id</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
device info by agent id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
device info by name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>unassigned<br>
device</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
unassigned device info</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
not exist</sub></td>
      <td align="left"><sub>name</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
not exist device info</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>w/o value</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_info.spec.js">device/device_info.spec.js:<br>
device info without device value</a></sub></td>
    </tr>
  </tbody>
</table>

## device list ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th colspan="10" height="30"><sub>Command
options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>owner</sub></th>
      <th><sub>product</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>dg-type</sub></th>
      <th><sub>unassigned</sub></th>
      <th><sub>assigned</sub></th>
      <th><sub>offline</sub></th>
      <th><sub>online</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"><sub>me</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by owner me</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by product id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by product name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td><sub>development</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by dg type</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by product name and dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>x2</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
device list by two dg</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
assigned device list</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
unassigned device list</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
online device list</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_list.spec.js">device/device_list.spec.js:<br>
offline device list</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device remove ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>force</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
unassigned</sub></td>
      <td align="left"><sub>id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
remove device by id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
unassigned</sub></td>
      <td align="left"><sub>mac</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
remove device by mac</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
unassigned</sub></td>
      <td align="left"><sub>agent id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
remove device by agent id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
unassigned</sub></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
remove device by name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
force remove assigned device</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>id</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_remove.spec.js">device/device_remove.spec.js:<br>
remove assigned device</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device restart ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="5"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>conditional</sub></th>
      <th><sub>log</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart device by device id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>mac</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart device by device mac</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>agent id</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart device by agent id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart device by device name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart device with log</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
not exist</sub></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_restart.spec.js">device/device_restart.spec.js:<br>
restart not exist device</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device unassign ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="4"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>unbond</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
unassign device by device id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>mac</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
unassign device by device mac</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>agent id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
unassign device by agent id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
unassign device by device name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
assigned</sub></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
repeat unassign device</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
not exist</sub></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_unassign.spec.js">device/device_unassign.spec.js:<br>
unassign not exist device</a></sub></td>
    </tr>
  </tbody>
</table>

## device update ##

<table>
  <sub>
  </sub><tbody>
    <tr align="center">
      <th rowspan="2" height="30"><sub>Precondition</sub></th>
      <th colspan="4"><sub>Command options</sub></th>
      <th rowspan="2"><sub>Test name</sub></th>
    </tr>
    <sub>
    </sub><tr align="center">
      <th height="30"><sub>device</sub></th>
      <th><sub>name</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update by device id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>mac</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update by device mac</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>agent id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update by agent id</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update by device name</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td align="left"><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update without new value</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
device update without device value</a></sub></td>
    </tr>
    <tr align="center">
      <td height="30"><sub>device<br>
not exist</sub></td>
      <td align="left"><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./device/device_update.spec.js">device/device_update.spec.js:<br>
not exist device update</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt dg command group ##

## device group builds ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="7" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>unflag</sub></th>
      <th><sub>unflag
old</sub></th>
      <th><sub>remove</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>project exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_builds.spec.js">dg/device_group_builds.spec.js:<br>
dg/device_group_builds.spec.js</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
help/help.spec.js</a></sub></td>
    </tr>
  </tbody>
</table>

## device group create ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="7" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>name</sub></th>
      <th><sub>dg-type</sub></th>
      <th><sub>product</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>target</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
device
group create by product id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>development</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
device
group create by product name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
    <tr>
      <td><sub>project exist</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
device
group create by project</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
device
group create by not exist project</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg exist already</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
create
duplicate device group</a></sub></td>
    </tr>
    <tr>
      <td><sub>product not exist</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_create.spec.js">dg/device_group_create.spec.js:<br>
device
group create by not exist product</a></sub></td>
    </tr>
  </tbody>
</table>

## device group delete ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>builds</sub></th>
      <th><sub>force</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group by id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group by name</a></sub></td>
    </tr>
    <tr>
      <td><sub>project exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group by project</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
force
delete device group by name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group with builds</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group by not exist project</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
not exist device group</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group by empty name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_delete.spec.js">dg/device_group_delete.spec.js:<br>
delete
device group without dg value</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group info ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>full</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group info by id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by name</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{id}{id}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by id and owner me</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{name}{id}{id}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by id and owner name</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{email}{id}{id}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by id and owner email</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{id}{id}{id}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by id and owner id</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{name}{id}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by id and product name</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{name}{name}</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by name and product name</a></sub>
      </td>
    </tr>
    <tr align="center">
      <td><sub>project exist</sub></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group full info by project</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
device group info by not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
not exist device group info</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{name}{name}</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
hierarchical dg id without owner</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{}{name}{name}</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
hierarchical dg id with empty owner</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{}{name}</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
hierarchical dg id with empty product</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{name}{}</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./dg/device_group_info.spec.js">dg/device_group_info.spec.js:<br>
hierarchical dg id with empty dg</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group list ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>owner</sub></th>
      <th><sub>product</sub></th>
      <th><sub>dg-type</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>me</sub></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by owner me</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by owner id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>deployment</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by owner name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>email</sub></td>
      <td></td>
      <td><sub>deployment</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by owner email</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by product id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by product name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><sub>2x</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_list.spec.js">dg/device_group_list.spec.js:<br>
device
group list by several product name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group reassign ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>from</sub></th>
      <th><sub>to</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td><sub>id</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device by device group id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device by device group name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>project</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device by project</a></sub></td>
    </tr>
    <tr>
      <td><sub>from dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device from not exist device group</a></sub></td>
    </tr>
    <tr>
      <td><sub>to dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device to not exist device group</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg without device</sub></td>
      <td><sub>name</sub></td>
      <td><sub>name</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
not exist device</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>project</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_reassign.spec.js">dg/device_group_reassign.spec.js:<br>
reassign
device to not exist project</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group restart ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>conditional</sub></th>
      <th><sub>log</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device by device group id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device by device group name</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device by project</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device with log display</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device by not exist project</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
device by not exist device group</a></sub></td>
    </tr>
    <tr>
      <td><sub>no devices</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_restart.spec.js">dg/device_group_restart.spec.js:<br>
restart
not exist device</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group unassign ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1" align="center"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>unbond</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
device by device group id</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
device by device group name</a></sub></td>
    </tr>
    <tr>
      <td><sub>project exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
device by project</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
device by not exist project</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
device by not exist device group</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg without device</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a
 href="./dg/device_group_unassign.spec.js">dg/device_group_unassign.spec.js:<br>
unassign
not exist device</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## device group update ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="8" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>name</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>target</sub></th>
      <th><sub>load code</sub></th>
      <th><sub>min sup depl</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_update.spec.js">dg/device_group_update.spec.js:<br>
dg/device_group_update.spec.js</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_update.spec.js">dg/device_group_update.spec.js:<br>
dg/device_group_update.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>project exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_update.spec.js">dg/device_group_update.spec.js:<br>
dg/device_group_update.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_update.spec.js">dg/device_group_update.spec.js:<br>
dg/device_group_update.spec.js</a></sub></td>
    </tr>
    <tr>
      <td><sub>dg not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td><sub><a href="./dg/device_group_update.spec.js">dg/device_group_update.spec.js:<br>
dg/device_group_update.spec.js</a></sub></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td><sub><a href="./help/help.spec.js">help/help.spec.js:<br>
help/help.spec.js</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt log command group ##

## log get ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>device</sub></th>
      <th><sub>p-size</sub></th>
      <th><sub>p-num</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td><sub>one device in project</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td left="" align=""><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by project</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>device id</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by device id</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>mac adr</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by device mac</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>agent id</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by agent id</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by device name</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>device id</sub></td>
      <td><sub>4</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get with page size</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>device id</sub></td>
      <td><sub>4</sub></td>
      <td><sub>3</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get with page size and number</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
    <tr align="left">
      <th><sub>project not exist</sub></th>
      <th><sub>project</sub></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get by not exist project</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without device value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>empty</sub></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without device value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th><sub>-4;0</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get with incorrect page size value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th><sub>-3;0</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get with incorrect page number value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th><sub>w/o
value</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without size and num values</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th><sub>w/o
value</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without size and num values</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th></th>
      <th><sub>invalid
value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without output value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th></th>
      <th><sub>w/o
value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_get.spec.js">log/log_get.spec.js:<br>
log
get without output value</a></sub></th>
    </tr>
  </tbody>
</table>

## log stream ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>device</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>device id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>mac adr</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>agent id</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td><sub>id</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub>planned</sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
    <tr align="left">
      <th><sub>project not exist</sub></th>
      <th></th>
      <th><sub>project</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream by not exist project</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>w/o value</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream without device value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>empty</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream without device value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th></th>
      <th><sub>w/o
value</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream without dg value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th><sub>invalid
value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream without output value</a></sub></th>
    </tr>
    <tr align="left">
      <th></th>
      <th><sub>device id</sub></th>
      <th></th>
      <th><sub>w/o
value</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./log/log_stream.spec.js">log/log_stream.spec.js:<br>
log
stream without output value</a></sub></th>
    </tr>
  </tbody>
</table>

## Impt login key command group ##

## login key create ##

<table>
  <tbody>
    <tr align="left">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr align="left">
      <th><sub>pass</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_create.spec.js">loginkey_create.spec.js:<br>
loginkey
create</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_create.spec.js">loginkey_create.spec.js:<br>
loginkey
create without description</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_create.spec.js">loginkey_create.spec.js:<br>
loginkey
create without password</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## login key delete ##

<table>
  <tbody>
    <tr align="left">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr align="left">
      <th><sub>lk</sub></th>
      <th><sub>pass</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td colspan="1" rowspan="1"></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_delete.spec.js">loginkey_delete.spec.js:<br>
loginkey
delete</a></sub></td>
    </tr>
    <tr align="left">
      <td rowspan="1"></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_delete.spec.js">loginkey_delete.spec.js:<br>
loginkey
delete without password</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_delete.spec.js">loginkey_delete.spec.js:<br>
loginkey
delete without confirmation</a></sub></td>
    </tr>
    <tr align="left">
      <th><sub>lk not exist</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./loginkey/loginkey_delete.spec.js">loginkey_delete.spec.js:<br>
not
exist loginkey delete</a></sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## login key info ##

<table>
  <tbody>
    <tr align="left">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="3" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr align="left">
      <th><sub>lk</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td><sub>lk id exist</sub></td>
      <td><sub>lk
id</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_info.spec.js">loginkey_info.spec.js:<br>
loginkey
info</a></sub></td>
    </tr>
    <tr align="left">
      <th><sub>lk id not exist</sub></th>
      <th><sub>lk
id</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./loginkey/loginkey_info.spec.js">loginkey_info.spec.js:<br>
not
exist loginkey info</a></sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## login key list ##

<table>
  <tbody>
    <tr align="left">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="2" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr align="left">
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr left="" align="">
      <td><sub>several
lk exist</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td left="" align=""><sub><a
 href="./loginkey/loginkey_list.spec.js">loginkey_list.spec.js:<br>
loginkey
list</a></sub></td>
    </tr>
    <tr align="left">
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt
help pages test suite</a></sub></td>
    </tr>
  </tbody><tbody>
  </tbody>
</table>

## login key update ##

<table>
  <tbody>
    <tr align="left">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2" align="left"><sub>Test
name</sub></th>
    </tr>
    <tr align="left">
      <th><sub>lk</sub></th>
      <th><sub>pass</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td colspan="1" rowspan="1"></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./loginkey/loginkey_update.spec.js">loginkey_update.spec.js:<br>
loginkey
update description</a></sub></td>
    </tr>
    <tr align="left">
      <td rowspan="1"></td>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./loginkey/loginkey_update.spec.js">loginkey_update.spec.js:<br>
loginkey
update without new values</a></sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <th><sub>Y</sub></th>
      <th></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./loginkey/loginkey_update.spec.js">loginkey_update.spec.js:<br>
loginkey
update description without password</a></sub></th>
    </tr>
    <tr align="left">
      <th><sub>lk not exist</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./loginkey/loginkey_update.spec.js">loginkey_update.spec.js:<br>
not
exist loginkey update</a></sub></th>
    </tr>
    <tr align="left">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt product command group ##

## product create ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr>
      <th><sub>name</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>owner</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>descr exist</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create with duplicated description</a></sub></td>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="9"><sub>name not exist</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without description</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>id</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create for owner by id</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>name</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create for owner by name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>email</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create for owner by email</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>me</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create for owner by me</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>w/o value</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without output value</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>undefined</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without output value</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create with empty description</a></sub></th>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="2"><sub>name
exist</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
create duplicated product</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
create duplicated product with description</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create with empty name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create with empty name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_create.spec.js">product/product_create.spec.js:<br>
product create without description value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## product delete ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Command
options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>product</sub></th>
      <th><sub>build</sub></th>
      <th><sub>force</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="3"><sub>product
exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by id</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete without confirmation</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by empty name</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by name without value</a></sub></td>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="2"><sub>product
with<br>
devicegroup</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by project</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
delete product with devicegroup</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>product not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
delete not exist product</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>project not exist</sub></td>
      <td><sub>project</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_delete.spec.js">product/product_delete.spec.js:<br>
product delete by not exist project</a></sub></th>
    </tr>
  </tbody>
</table>

## product info ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr>
      <th><sub>product</sub></th>
      <th><sub>full</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="9"><sub>product<br>exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info by name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>id</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info by id</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>project</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info by project</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product full info by name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>{me}{id}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="product/product_info.spec.js">product/product_info.spec.js:<br>
product info by id and owner me</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>{name}{id}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="product/product_info.spec.js">product/product_info.spec.js:<br>
product info by id and owner name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>{email}{id}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="product/product_info.spec.js">product/product_info.spec.js:<br>
product info by id and owner email</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>{id}{id}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="product/product_info.spec.js">product/product_info.spec.js:<br>
product info by id and owner id</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>{id}{name}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="product/product_info.spec.js">product/product_info.spec.js:<br>
product info by name and owner id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info without output value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info without product name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info with empty product name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product info with empty product name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{name}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
hierarchical product id without owner</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{}{name}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
hierarchical product id with empty owner</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
hierarchical product id with empty product</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>{me}{name}{}</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
hierarchical product id with excess field</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>product<br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
not exist product info</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## product list ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="3" rowspan="1"><sub>Command
options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>owner</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="5"><sub>product<br>
exist</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>me</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list with owner by me</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list with owner by name</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>email</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list with owner by email</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>id</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list with owner by id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o value</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list without owner value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./product/product_info.spec.js">product/product_info.spec.js:<br>
product list without output value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## product update ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command
options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>product</sub></th>
      <th><sub>name</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td colspan="1" rowspan="7"><sub>product<br>
exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product name </a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product description </a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product name and description </a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>empty</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product to empty description</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product name by id</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product name and description by project</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product without new values</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>empty</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product to empty name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>w/o value</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product to name without value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>w/o value</sub></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product to description without value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>empty</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product by empty name</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>w/o value</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product by name without value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>w/o value</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update product without output value</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>product<br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <th></th>
      <th align="left"><sub><a
 href="./product/product_update.spec.js">product/product_update.spec.js:<br>
update not existing product</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody><tbody>
  </tbody>
</table>

## Impt project command group ##

## project create ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="10" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>product / create</sub></th>
      <th><sub>name</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>d-file</sub></th>
      <th><sub>a-file</sub></th>
      <th><sub>pre-factory</sub></th>
      <th><sub>target/<br>create</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="left">
      <td><sub>product exist</sub></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create by product id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create by product name with device file</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create by product name with agent file</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>product<br>
not exist</sub></td>
      <td><sub>name / Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create with product creating</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create with not existing product</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>w/o value</sub></th>
      <th><sub>Y</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_create.spec.js">project_create.spec.js:<br>
project create without product value</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## project delete ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>entities</sub></th>
      <th><sub>files</sub></th>
      <th><sub>all</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>project<br>
exist</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete project</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete project with entities</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete project with files</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete project with all</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete project with entities and files</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_delete.spec.js">project_delete.spec.js:<br>
delete not exist project</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## project info ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="3" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>full</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>project<br>
exist</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_info.spec.js">project_info.spec.js:<br>
project info</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_info.spec.js">project_info.spec.js:<br>
project full info</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>dg not exist</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_info.spec.js">project_info.spec.js:<br>
project info with not exist device group</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_info.spec.js">project_info.spec.js:<br>
project info without project file</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## project link ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>d-file</sub></th>
      <th><sub>a -file</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>dg exist</sub></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_link.spec.js">project_link.spec.js:<br>
project link to dg by id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_link.spec.js">project_link.spec.js:<br>
project link to dg by name</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## project update ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="7" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>name</sub></th>
      <th><sub>descr</sub></th>
      <th><sub>d-file</sub></th>
      <th><sub>a -file</sub></th>
      <th><sub>target</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>project<br>
exist</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./project/project_update.spec.js">project_update.spec.js:<br>
prodject update</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>dg not exist</sub></th>
      <th><sub>Y</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_update.spec.js">project_update.spec.js:<br>
project update without project file</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>project<br>
not exist</sub></th>
      <th><sub>Y</sub></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./project/project_update.spec.js">project_update.spec.js:<br>
project update with not exist device group</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt webhook command group ##

## webhook create ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>dg</sub></th>
      <th><sub>url</sub></th>
      <th><sub>event</sub></th>
      <th><sub>mime</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>dg exist</sub></td>
      <td><sub>dg id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>deployment</sub></td>
      <td><sub>json</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_create.spec.js">wh_create.spec.js:<br>
webhook create by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>deployment</sub></td>
      <td><sub>json</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_create.spec.js">wh_create.spec.js:<br>
webhook create by dg name</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>project</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>deployment</sub></td>
      <td><sub>urlencoded</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_create.spec.js">wh_create.spec.js:<br>
webhook create by project</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>name</sub></th>
      <th><sub>invalid url</sub></th>
      <th><sub>deployment</sub></th>
      <th><sub>urlencoded</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_create.spec.js">wh_create.spec.js:<br>
webhook create with invalid url</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>dg not exist</sub></th>
      <th><sub>name</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>deployment</sub></th>
      <th><sub>json</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_create.spec.js">wh_create.spec.js:<br>
webhook create with not exist dg</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## webhook delete ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name&gt;</sub></th>
    </tr>
    <tr>
      <th><sub>wh</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>wh id exist</sub></td>
      <td><sub>wh id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_delete.spec.js">wh_delete.spec.js:<br>
webhook delete</a></sub></td>
    </tr>
    <tr align="center">
      <th></th>
      <th><sub>w/o value</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_delete.spec.js">wh_delete.spec.js:<br>
webhook delete without id</a></sub></th>
    </tr>
    <tr align="center">
      <th><sub>wh id not exist</sub></th>
      <th><sub>wh id</sub></th>
      <th><sub>Y</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_delete.spec.js">wh_delete.spec.js:<br>
delete not exist webhook</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## webhook info ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="3" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>wh</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>wh id exist</sub></td>
      <td><sub>wh id</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_info.spec.js">wh_info.spec.js:<br>
webhook info</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>wh id not exist</sub></th>
      <th><sub>wh id</sub></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_info.spec.js">wh_info.spec.js:<br>
not exist webhook info</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## webhook list ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="8" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>owner</sub></th>
      <th><sub>product</sub></th>
      <th><sub>dg</sub></th>
      <th><sub>dg-type</sub></th>
      <th><sub>url</sub></th>
      <th><sub>event</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>several wh id<br>
exists with<br>
different dg</sub></td>
      <td><sub>me</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by owner</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by product id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by product name</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>deployment</sub></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by product name url and event</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>x2</sub></td>
      <td></td>
      <td><sub>json</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_list.spec.js">wh_list.spec.js:<br>
webhook list by several url</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## webhook update ##

<table>
  <tbody>
    <tr>
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="5" rowspan="1"><sub>Command options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test
name</sub></th>
    </tr>
    <tr>
      <th><sub>wh</sub></th>
      <th><sub>url</sub></th>
      <th><sub>mime</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>wh id exist</sub></td>
      <td><sub>wh id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_update.spec.js">wh_update.spec.js:<br>
webhook update url and mime</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>wh id</sub></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./webhook/wh_update.spec.js">wh_update.spec.js:<br>
webhook update without url and mime</a></sub></td>
    </tr>
    <tr align="center">
      <th><sub>wh id not exist</sub></th>
      <th><sub>wh id</sub></th>
      <th><sub>Y</sub></th>
      <th></th>
      <th><sub>default</sub></th>
      <th></th>
      <th align="left"><sub><a
 href="./webhook/wh_update.spec.js">wh_update.spec.js:<br>
update not exist webhook</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## Impt test command group ##

## test create ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="13" rowspan="1"><sub>Options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>dg</sub></th>
      <th><sub>device<br>file</sub></th>
      <th><sub>agent<br>file</sub></th>
      <th><sub>timeout</sub></th>
      <th><sub>stop<br>on fail</sub></th>
      <th><sub>allow<br>disconnect</sub></th>
      <th><sub>builder<br>cache</sub></th>
      <th><sub>test<br>file</sub></th>
      <th><sub>github<br>config</sub></th>
      <th><sub>builder<br>config</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>id</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create by dg id</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create by dg name with options</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>id</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create by dg id with options</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>dg<br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create by not exist dg</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>device file <br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create whit not exist device file</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>agent file <br>
not exist</sub></td>
      <td><sub>name</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_create.spec.js">test/test_create.spec.js:<br>
test create whit not exist agent file</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>


## test delete ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="7" rowspan="1"><sub>Options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>github config</sub></th>
      <th><sub>builder config</sub></th>
      <th><sub>entities</sub></th>
      <th><sub>all</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_delete.spec.js">test/test_delete.spec.js:<br>
test delete</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_delete.spec.js">test/test_delete.spec.js:<br>
test delete with options</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>product with<br>several dg</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_delete.spec.js">test/test_delete.spec.js:<br>
test delete with all entities</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>dg not<br>exist</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_delete.spec.js">test/test_delete.spec.js:<br>
test delete with not exist dg</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## test github ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="6" rowspan="1"><sub>Options</sub></th>
      <td colspan="1" rowspan="2"><sub>Test name</sub></td>
    </tr>
    <tr align="center">
      <th><sub>github config</sub></th>
      <th><sub>user</sub></th>
      <th><sub>pwd</sub></th>
      <th><sub>confirmed</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td><sub>config not exist</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_github.spec.js">test/test_github.spec.js:<br>
create github config</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>config exist</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_github.spec.js">test/test_github.spec.js:<br>
update github config</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## test info ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="2" rowspan="1"><sub>Options</sub></th>
      <th colspan="1" rowspan="2"><sub>
Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_info.spec.js">test/test_info.spec.js:<br>
test info</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>dg not exist</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_info.spec.js">test/test_info.spec.js:<br>
test info with not exist dg</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>



## test run ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="4" rowspan="1"><sub>Options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr align="center">
      <th><sub>test</sub></th>
      <th><sub>clear<br>cache</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
test run all test files</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>[testfile]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
test run one test file</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>[testfile]:<br>
[testcase]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
test run one test case</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td><sub>[testfile]:<br>[testcase]:<br>[testmethod]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
test run one test method</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>test file<br>not exist</sub></td>
      <td><sub>[testfile]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
test run not exist test file</a></sub></th>
    </tr>
     <tr align="center">
      <td><sub>test case<br>not exist</sub></td>
      <td><sub>[testfile]:<br>[testcase]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
      test run not exist test case</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>test method<br>not exist</sub></td>
      <td><sub>[testfile]:<br>[testcase]:<br>[testmethod]</sub></td>
      <td></td>
      <td><sub>default</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_run.spec.js">test/test_run.spec.js:<br>
      test run not exist test method</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>

## test update ##

<table>
  <tbody>
    <tr align="center">
      <th colspan="1" rowspan="2"><sub>Precondition</sub></th>
      <th colspan="12" rowspan="1"><sub>Options</sub></th>
      <th colspan="1" rowspan="2"><sub>Test name</sub></th>
    </tr>
    <tr center="" align="">
      <th><sub>dg</sub></th>
      <th><sub>device<br>file</sub></th>
      <th><sub>agent<br>file</sub></th>
      <th><sub>timeout</sub></th>
      <th><sub>stop<br>on fail</sub></th>
      <th><sub>allow<br>disconnect</sub></th>
      <th><sub>builder<br>cache</sub></th>
      <th><sub>test file</sub></th>
      <th><sub>github<br>config</sub></th>
      <th><sub>builder<br>config</sub></th>
      <th><sub>output</sub></th>
      <th><sub>help</sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>Y</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_update.spec.js">test/test_update.spec.js:<br>
test update all attrs</a></sub></td>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td><sub>v/o value</sub></td>
      <td><sub>v/o value</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>v/o value</sub></td>
      <td><sub>v/o value</sub></td>
      <td><sub>all</sub></td>
      <td></td>
      <td align="left"><sub><a
 href="./test/test_update.spec.js">test/test_update.spec.js:<br>
test update remove attrs</a></sub></td>
    </tr>
    <tr align="center">
      <td><sub>dg not<br>
exist</sub></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_update.spec.js">test/test_update.spec.js:<br>
test update to not exist dg</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>file not<br>
exist</sub></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_update.spec.js">test/test_update.spec.js:<br>
test update to not exist device file</a></sub></th>
    </tr>
    <tr align="center">
      <td><sub>file not<br>
exist</sub></td>
      <td></td>
      <td></td>
      <td><sub>Y</sub></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>all</sub></td>
      <td></td>
      <th align="left"><sub><a
 href="./test/test_update.spec.js">test/test_update.spec.js:<br>
test update to not exist agent file</a></sub></th>
    </tr>
    <tr align="center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><sub>default</sub></td>
      <td><sub>Y</sub></td>
      <td align="left"><sub><a
 href="./help/help.spec.js">help/help.spec.js:<br>
impt help pages test suite</a></sub></td>
    </tr>
  </tbody>
</table>
