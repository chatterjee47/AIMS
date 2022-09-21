$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying Login Functionality",
  "description": "",
  "id": "verifying-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify Login Page function",
  "description": "",
  "id": "verifying-login-functionality;to-verify-login-page-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@LoginPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in the login page \u0027https://demoqa.com/login\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter UserName \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Password \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the title on the profile page \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verifying-login-functionality;to-verify-login-page-function;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Title"
      ],
      "line": 13,
      "id": "verifying-login-functionality;to-verify-login-page-function;;1"
    },
    {
      "cells": [
        "demoqaname12",
        "Demoqaabc@-1",
        "ToolsQA"
      ],
      "line": 14,
      "id": "verifying-login-functionality;to-verify-login-page-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1393900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify Login Page function",
  "description": "",
  "id": "verifying-login-functionality;to-verify-login-page-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@LoginPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in the login page \u0027https://demoqa.com/login\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter UserName \"demoqaname12\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Password \"Demoqaabc@-1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the title on the profile page \"ToolsQA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_am_in_the_login_page_https_demoqa_com_login()"
});
formatter.result({
  "duration": 46354673100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demoqaname12",
      "offset": 18
    }
  ],
  "location": "LoginTest.i_enter_UserName(String)"
});
formatter.result({
  "duration": 3270511700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demoqaabc@-1",
      "offset": 18
    }
  ],
  "location": "LoginTest.i_enter_Password(String)"
});
formatter.result({
  "duration": 3098826200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Login_button()"
});
formatter.result({
  "duration": 3076740400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_be_on_the_profile_page()"
});
formatter.result({
  "duration": 3116470700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA",
      "offset": 40
    }
  ],
  "location": "LoginTest.i_verify_the_title_on_the_profile_page(String)"
});
formatter.result({
  "duration": 3495021900,
  "status": "passed"
});
});