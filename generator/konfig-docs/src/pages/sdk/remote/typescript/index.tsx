import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RemoteTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="remote-typescript-sdk"
      metaDescription={`Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom.

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more.

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.`}
      company="Remote"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/logo.png"
      companyKebabCase="remote"
      clientNameCamelCase="remote"
      homepage="remote.com"
      lastUpdated={new Date("2024-03-27T17:31:49.635Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["remote","hr","hr_platform","global_employment","remote_work","remote_hiring"]}
      methods={[
  {
    "url": "/v1/contract-amendments",
    "method": "listRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "List Contract Amendment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many contract_amendments"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract-amendments",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "Create Contract Amendment",
    "parameters": [
      {
        "name": "amendment_contract_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMENDMENT_CONTRACT_ID"
      },
      {
        "name": "contract_amendment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract Amendment response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff/{id}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Show Time Off",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Timeoff ID",
        "example": "93t3j-timeoff-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timeoff response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff/{id}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Update Time Off",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Timeoff ID",
        "example": "93t3j-timeoff-id-9suej43"
      },
      {
        "name": "approved_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-15T18:18:17Z"
      },
      {
        "name": "approver_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "51546f60-dd71-4223-9312-4efede68a497"
      },
      {
        "name": "cancel_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCEL_REASON"
      },
      {
        "name": "document",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "edit_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EDIT_REASON"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-01"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-01"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeoff_days",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timeoff_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sick_leave"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Etc/UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timeoff response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff/{id}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Update Time Off",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Timeoff ID",
        "example": "93t3j-timeoff-id-9suej43"
      },
      {
        "name": "approved_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-15T18:18:17Z"
      },
      {
        "name": "approver_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "51546f60-dd71-4223-9312-4efede68a497"
      },
      {
        "name": "cancel_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCEL_REASON"
      },
      {
        "name": "document",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "edit_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EDIT_REASON"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-01"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-01"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeoff_days",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timeoff_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sick_leave"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Etc/UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timeoff response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "List Incentives",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": false,
        "description": "Filter by Employment ID",
        "example": "93t3j-employment-id-9suej43"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter by Incentive status",
        "example": "paid"
      },
      {
        "name": "recurringIncentiveId",
        "schema": "string",
        "required": false,
        "description": "Filter by Recurring Incentive id",
        "example": "2f900aaf-4952-4ec4-ac7c-2b917a2b4da9"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many incentives"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives",
    "method": "createIncentive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "Create Incentive",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50000
      },
      {
        "name": "amount_tax_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "net"
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-12-20"
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5e55386e-4f4f-4def-92f4-bdc19a5ce77d"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bonus for moving start date to an earlier date"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "signing_bonus"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Incentive response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/custom-fields",
    "method": "listDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Lists custom fields definitions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many custom_fields"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost-calculator/estimation-pdf",
    "method": "generateEstimationPdf",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cost Calculator",
    "typeScriptTag": "costCalculator",
    "description": "Creates a cost estimation of employments",
    "parameters": [
      {
        "name": "employer_currency_slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "663e0b79-c893-45ff-a1b2-f6dcabc098b5"
      },
      {
        "name": "employments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "include_benefits",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "include_cost_breakdowns",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/{id}",
    "method": "removeIncentive",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "Delete an Incentive",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Incentive ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "Show Incentive",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Incentive ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Incentive response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/{id}",
    "method": "updateIncentive",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "Update Incentive",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Incentive ID",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 50000
      },
      {
        "name": "amount_tax_type",
        "schema": "string",
        "description": "",
        "example": "net"
      },
      {
        "name": "effective_date",
        "schema": "string",
        "description": "",
        "example": "2021-12-20"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Bonus for moving start date to an earlier date"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "signing_bonus"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Incentive response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/{id}",
    "method": "updateIncentive",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Incentives",
    "typeScriptTag": "incentives",
    "description": "Update Incentive",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Incentive ID",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 50000
      },
      {
        "name": "amount_tax_type",
        "schema": "string",
        "description": "",
        "example": "net"
      },
      {
        "name": "effective_date",
        "schema": "string",
        "description": "",
        "example": "2021-12-20"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Bonus for moving start date to an earlier date"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "signing_bonus"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Incentive response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payslips",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payslips",
    "typeScriptTag": "payslips",
    "description": "List payslips",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": false,
        "description": "Employment ID",
        "example": "93t3j-employment-id-9suej43"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Filters by payslips `issued_at` field, after or on the same day than the given date",
        "example": "\"2022-12-15\""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Filters by payslips `issued_at` field, before or or the same day than the given date",
        "example": "\"2023-12-15\""
      },
      {
        "name": "expectedPayoutStartDate",
        "schema": "string",
        "required": false,
        "description": "Filters by payslips `expected_payout_date` field, after or on the same day than the given date",
        "example": "\"2022-12-15\""
      },
      {
        "name": "expectedPayoutEndDate",
        "schema": "string",
        "required": false,
        "description": "Filters by payslips `expected_payout_date` field, before or or the same day than the given date",
        "example": "\"2023-12-15\""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many payslips"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/oauth2/token",
    "method": "exchangeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2",
    "typeScriptTag": "oAuth2",
    "description": "Token",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "eyJhbG...xb6H0"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "description": "",
        "example": "authorization_code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employment-contracts/{employment_id}/pending-changes",
    "method": "getPendingChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employment Contracts",
    "typeScriptTag": "employmentContracts",
    "description": "Get employment contract pending changes",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "93t3j-employment_id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff",
    "method": "listRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List Time Off",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": false,
        "description": "Only show time off for a specific employment",
        "example": "31b8e49b-aa1c-47af-849c-3d0a53e20e0d"
      },
      {
        "name": "timeoffType",
        "schema": "string",
        "required": false,
        "description": "Filter time off by its type",
        "example": "sick_leave"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter time off by its status",
        "example": "approved"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Sort order",
        "example": "asc"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Field to sort by",
        "example": "timeoff_type"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of items per page",
        "example": 20,
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many timeoffs"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff",
    "method": "recordCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Create Time Off",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Timeoff response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments/{employment_id}",
    "method": "getEmploymentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Show employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "93t3j-employment-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments/{employment_id}",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Update employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "93t3j-employment-id-9suej43"
      },
      {
        "name": "address_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "administrative_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bank_account_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "basic_information",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_address_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e31adae1-company-id-af5fba7dd803"
      },
      {
        "name": "contract_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUS"
      },
      {
        "name": "department_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3bb56f01-3243-412b-bfaa-a5cfaaf2e431"
      },
      {
        "name": "emergency_contact_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "full_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jane Smith"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Backend Engineer"
      },
      {
        "name": "manager",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Taylor Johnson"
      },
      {
        "name": "personal_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jane@smith.com"
      },
      {
        "name": "pricing_plan_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provisional_start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-03"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments/{employment_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Update employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "93t3j-employment-id-9suej43"
      },
      {
        "name": "address_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "administrative_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bank_account_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "basic_information",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_address_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e31adae1-company-id-af5fba7dd803"
      },
      {
        "name": "contract_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUS"
      },
      {
        "name": "department_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3bb56f01-3243-412b-bfaa-a5cfaaf2e431"
      },
      {
        "name": "emergency_contact_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "full_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jane Smith"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Backend Engineer"
      },
      {
        "name": "manager",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Taylor Johnson"
      },
      {
        "name": "personal_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jane@smith.com"
      },
      {
        "name": "pricing_plan_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "provisional_start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-07-03"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payslips/{id}",
    "method": "showPayslip",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payslips",
    "typeScriptTag": "payslips",
    "description": "Show payslip",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payslip ID",
        "example": "93t3j-payslip-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A single payslip."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/recurring/{id}",
    "method": "deleteScheduled",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recurring Incentives",
    "typeScriptTag": "recurringIncentives",
    "description": "Delete a Recurring Incentive",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Recurring Incentive ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "`\"status\": \"ok\"` indicates that any recurring incentives with `pending` status were\nsuccessfully deleted.\n\n`already_scheduled_incentives` returns a list of incentives that were already scheduled\nfor payout and as such, cannot be deleted. You will notice that these incentives do not\nhave a `pending` status.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sandbox/employments/{employment_id}",
    "method": "updateEmploymentState",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Update employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "e3ee69d7-1293-4664-92fc-02625dae5247"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sandbox/employments/{employment_id}",
    "method": "employmentUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Update employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "e3ee69d7-1293-4664-92fc-02625dae5247"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/resignations/{employment_request_id}/resignation-letter",
    "method": "downloadLetter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resignation",
    "typeScriptTag": "resignation",
    "description": "Download a resignation letter",
    "parameters": [
      {
        "name": "employmentRequestId",
        "schema": "string",
        "required": true,
        "description": "The employment request ID",
        "example": "3ab2e491-ad1c-47af-849c-3d0a53e20e0d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses",
    "method": "listRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "List expenses",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response schema listing many expenses"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses",
    "method": "createApprovedExpense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Create expense",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      },
      {
        "name": "expense_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPENSE_DATE"
      },
      {
        "name": "receipt",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "content": "UGVyaW9kIEVuZCBEYXRlLFBheSBEYXRlLEVtcG...5jZSBPZiBSZXNpZGVuYdXJyZW50LEFsbG93",
          "name": "receipt.pdf"
        }
      },
      {
        "name": "receipts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewer_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_amount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Etc/UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Expense response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-departments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Department",
    "typeScriptTag": "companyDepartment",
    "description": "List Company Departments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "d2091b1e-b1a4-437a-91ea-2809ffbb6d59"
      },
      {
        "name": "paginate",
        "schema": "boolean",
        "required": false,
        "description": "Paginate option. Default: true. When true, paginates response; otherwise, does not.",
        "example": false
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of items per page",
        "example": 20,
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Department",
    "typeScriptTag": "companyDepartment",
    "description": "Create New Department",
    "parameters": [
      {
        "name": "company_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}",
    "method": "showRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Show expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Expense response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Update an expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Expense response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{id}",
    "method": "updateExpense",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Update an expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Expense ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Expense response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/benefits/country-summary",
    "method": "listSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits Country Summary",
    "typeScriptTag": "benefitsCountrySummary",
    "description": "List Benefits Country Summary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-managers",
    "method": "listManagers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Managers",
    "typeScriptTag": "companyManagers",
    "description": "List Company Managers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "A Company ID to filter the results (only applicable for Integration Partners).",
        "example": "0a8s2d1-company-id-2e3f4th"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many company_managers"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-managers",
    "method": "createInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Managers",
    "typeScriptTag": "companyManagers",
    "description": "Create and invite a Company Manager",
    "parameters": [
      {
        "name": "company_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payslips/{payslip_id}/pdf",
    "method": "downloadPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payslips",
    "typeScriptTag": "payslips",
    "description": "Download payslip in the PDF format",
    "parameters": [
      {
        "name": "payslipId",
        "schema": "string",
        "required": true,
        "description": "Payslip ID",
        "example": "93t3j-payslip-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The binary content of the payslip file."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/identity/current",
    "method": "getTokenInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identity",
    "typeScriptTag": "identity",
    "description": "Get token identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/files/{id}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download file",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "File ID",
        "example": "93t3j-file-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/offboardings",
    "method": "listRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offboarding",
    "typeScriptTag": "offboarding",
    "description": "List Offboarding",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": false,
        "description": "Filter by Employment ID",
        "example": "93t3j-employment-id-9suej43"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter by offboarding type",
        "example": "paid"
      },
      {
        "name": "includeConfidential",
        "schema": "string",
        "required": false,
        "description": "By default, the results do not include confidential termination requests.\nSend `include_confidential=true` to include confidential requests in the response.\n",
        "example": "true"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many offboardings"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/offboardings",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offboarding",
    "typeScriptTag": "offboarding",
    "description": "Create Offboarding",
    "parameters": [
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      },
      {
        "name": "termination_details",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Offboarding response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-managers/{user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Managers",
    "typeScriptTag": "companyManagers",
    "description": "Deletes a Company Manager user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "1a8s2d1-user-id-2e3f4tz"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company-managers/{user_id}",
    "method": "showUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Managers",
    "typeScriptTag": "companyManagers",
    "description": "Show company manager user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "1a8s2d1-user-id-2e3f4tz"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/custom-fields/{custom_field_id}/values/{employment_id}",
    "method": "showValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Show a custom field value",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "Custom field ID",
        "example": "CUSTOM_FIELD_ID"
      },
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "EMPLOYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "EmploymentCustomFieldValueResponse"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract-amendments/{id}",
    "method": "showSingleRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "Show Contract Amendment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contract amendment request ID",
        "example": "93t3j-contract_amendment_id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contract Amendment response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List all companies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Shows a list of companies"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Complementary action(s) to perform when creating a company:\n\n- `get_oauth_access_tokens` returns the user's access and refresh tokens\n- `send_create_password_email ` sends a reset password token to the company owner's email so they can log in using Remote UI (not needed if integration plans to use SSO only)\n\nIf `action` contains `send_create_password_email` you can redirect the user to [https://employ.remote.com/api-integration-new-password-send](https://employ.remote.com/api-integration-new-password-send)\n",
        "example": "get_oauth_access_tokens,send_create_password_email"
      },
      {
        "name": "address_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bank_account_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_owner_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_OWNER_EMAIL"
      },
      {
        "name": "company_owner_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_OWNER_NAME"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_CODE"
      },
      {
        "name": "desired_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESIRED_CURRENCY"
      },
      {
        "name": "email_domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registration_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terms_of_service_accepted_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERMS_OF_SERVICE_ACCEPTED_AT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract-amendments/automatable",
    "method": "checkAutomatability",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "Automatable Contract Amendment",
    "parameters": [
      {
        "name": "amendment_contract_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMENDMENT_CONTRACT_ID"
      },
      {
        "name": "contract_amendment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contract Amendment Automatable response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sandbox/employments",
    "method": "createEmploymentWithoutValidations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Create employment",
    "parameters": [
      {
        "name": "basic_information",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUS"
      },
      {
        "name": "full_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jane Smith"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineer"
      },
      {
        "name": "personal_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jane@smith.com"
      },
      {
        "name": "provisional_start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-07-10"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employee"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract-amendments/schema",
    "method": "getFormSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "Show form schema",
    "parameters": [
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_CODE"
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      },
      {
        "name": "form",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object with required and optional fields, its descriptions and suggested presentation"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing-documents",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Documents",
    "typeScriptTag": "billingDocuments",
    "description": "List Billing Documents",
    "parameters": [
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "The month for the billing documents (in ISO-8601 format)",
        "example": "\"2023-01\""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about a list of billing documents"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/recurring",
    "method": "listIncentives",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Incentives",
    "typeScriptTag": "recurringIncentives",
    "description": "List Recurring Incentive",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter by recurring incentive status: active or deactive.",
        "example": "active"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter by recurring incentive type.",
        "example": "meal_allowance"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "Filter by recurring incentives that contain the value in their notes.",
        "example": "meal"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response schema listing many recurring_incentives"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/incentives/recurring",
    "method": "createMonthlyIncentive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Incentives",
    "typeScriptTag": "recurringIncentives",
    "description": "Create Recurring Incentive",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50000
      },
      {
        "name": "amount_tax_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "net"
      },
      {
        "name": "duration_in_months",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-12-20"
      },
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5e55386e-4f4f-4def-92f4-bdc19a5ce77d"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bonus for moving start date to an earlier date"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "meal_allowance"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Recurring Incentive response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/countries",
    "method": "listAlphabetically",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Countries",
    "typeScriptTag": "countries",
    "description": "List countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of countries supported by Remote API"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost-calculator/regions/{slug}/fields",
    "method": "showRegionFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cost Calculator",
    "typeScriptTag": "costCalculator",
    "description": "Show region fields",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Slug",
        "example": "SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "JSON Schema Response"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook-callbacks/{id}",
    "method": "deleteCallback",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook Callbacks",
    "typeScriptTag": "webhookCallbacks",
    "description": "Delete a Webhook Callback",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook Callback ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/countries/{country_code}/holidays/{year}",
    "method": "listHolidaysByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Countries",
    "typeScriptTag": "countries",
    "description": "List all holidays of a country",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "Country code according to ISO 3166-1 3-digit alphabetic codes",
        "example": "PRT"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "Year for the holidays",
        "example": "2022"
      },
      {
        "name": "countrySubdivisionCode",
        "schema": "string",
        "required": false,
        "description": "Country subdivision code according to ISO 3166-2 codes",
        "example": "PT-10"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Holidays response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing-documents/{billing_document_id}/pdf",
    "method": "downloadPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Documents",
    "typeScriptTag": "billingDocuments",
    "description": "Download a billing document PDF",
    "parameters": [
      {
        "name": "billingDocumentId",
        "schema": "string",
        "required": true,
        "description": "The billing document's ID",
        "example": "93t3j-billing-doc-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/documents",
    "method": "uploadEmploymentFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload file",
    "parameters": [
      {
        "name": "employment_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENT_ID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A supported file"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook-callbacks",
    "method": "registerCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook Callbacks",
    "typeScriptTag": "webhookCallbacks",
    "description": "Create a Webhook Callback",
    "parameters": [
      {
        "name": "subscribed_events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webhook callback response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost-calculator/estimation",
    "method": "createEmploymentEstimation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cost Calculator",
    "typeScriptTag": "costCalculator",
    "description": "Creates a cost estimation of employments",
    "parameters": [
      {
        "name": "employer_currency_slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "663e0b79-c893-45ff-a1b2-f6dcabc098b5"
      },
      {
        "name": "employments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "include_benefits",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "include_cost_breakdowns",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{expense_id}/receipt",
    "method": "downloadReceipt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Download a receipt",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "string",
        "required": true,
        "description": "The expense ID",
        "example": "3ab2e491-ad1c-47af-849c-3d0a53e20e0d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments/{employment_id}/invite",
    "method": "inviteStartEnrollment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Invite employment",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID",
        "example": "31b8e49b-aa1c-47af-849c-3d0a53e20e0d"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff-balances/{employment_id}",
    "method": "showBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Balances",
    "typeScriptTag": "timeOffBalances",
    "description": "Show Time Off Balance",
    "parameters": [
      {
        "name": "employmentId",
        "schema": "string",
        "required": true,
        "description": "Employment ID for which to show the time off balance",
        "example": "03675381-50c9-492d-b8ed-e84e99046091"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Time Off Balance response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing-documents/{billing_document_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Documents",
    "typeScriptTag": "billingDocuments",
    "description": "Show Billing Document",
    "parameters": [
      {
        "name": "billingDocumentId",
        "schema": "string",
        "required": true,
        "description": "The billing document's ID",
        "example": "93t3j-billing-doc-id-9suej43"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information of a billing document"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/expenses/{expense_id}/receipts/{receipt_id}",
    "method": "downloadReceiptById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Expenses",
    "typeScriptTag": "expenses",
    "description": "Download a receipt by id",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "string",
        "required": true,
        "description": "The expense ID",
        "example": "3ab2e491-ad1c-47af-849c-3d0a53e20e0d"
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "The receipt ID",
        "example": "6ab2e49o-ad1c-47af-849c-3d0a53e21e0e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "List employments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "Company ID",
        "example": "93t3j-company-id-9suej43"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filters the results by employments whose login email matches the value",
        "example": "anna@example.com"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filters the results by employments whose status matches the value",
        "example": "active"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Starts fetching records after the given page",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Change the amount of records returned per page, defaults to 20, limited to 100",
        "example": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema listing many employments"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employments",
    "method": "createEmployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Create employment",
    "parameters": [
      {
        "name": "basic_information",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUS"
      },
      {
        "name": "full_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jane Smith"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineer"
      },
      {
        "name": "personal_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jane@smith.com"
      },
      {
        "name": "provisional_start_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-07-10"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employee"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost-calculator/countries",
    "method": "listCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cost Calculator",
    "typeScriptTag": "costCalculator",
    "description": "List countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/offboardings/{id}",
    "method": "showRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offboarding",
    "typeScriptTag": "offboarding",
    "description": "Show Offboarding",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Offboarding request ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Offboarding response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sandbox/webhook-callbacks/trigger",
    "method": "triggerWebhookCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Trigger a Webhook",
    "parameters": [
      {
        "name": "employment_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "event_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/timeoff/types",
    "method": "listTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List Time Off Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Time off types response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}",
    "method": "showCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Show a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "0a8s2d1-company-id-2e3f4th"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Shows a company"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}",
    "method": "updateCompany",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "0a8s2d1-company-id-2e3f4th"
      },
      {
        "name": "address_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bank_account_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desired_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registration_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tax_number",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Shows a company"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}",
    "method": "updateCompany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "0a8s2d1-company-id-2e3f4th"
      },
      {
        "name": "address_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bank_account_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desired_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registration_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tax_number",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Shows a company"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ready",
    "method": "completeOnboarding",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employments",
    "typeScriptTag": "employments",
    "description": "Complete onboarding",
    "parameters": [
      {
        "name": "employment_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete information of an employment"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sandbox/contract-amendments/{contract_amendment_request_id}/approve",
    "method": "approveAmendment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contract Amendments",
    "typeScriptTag": "contractAmendments",
    "description": "Approve Contract Amendment in the Sandbox Environment",
    "parameters": [
      {
        "name": "contractAmendmentRequestId",
        "schema": "string",
        "required": true,
        "description": "Contract amendment request ID",
        "example": "6d947344-b053-4a4f-acf0-79d296cbd082"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contract Amendment response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/countries/{country_code}/{form}",
    "method": "getFormSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Countries",
    "typeScriptTag": "countries",
    "description": "Show form schema",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "Country code according to ISO 3-digit alphabetic codes",
        "example": "PRT"
      },
      {
        "name": "form",
        "schema": "string",
        "required": true,
        "description": "Name of the desired form",
        "example": "address_details"
      },
      {
        "name": "employmentId",
        "schema": "string",
        "required": false,
        "description": "Required for `contract_amendment` form",
        "example": "663e0b79-c893-45ff-a1b2-f6dcabc098b5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object with required and optional fields, its descriptions and suggested presentation"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Remote API"
      apiBaseUrl="https://gateway.remote.com/"
      apiVersion="0.1.0"
      endpoints={55}
      sdkMethods={78}
      schemas={187}
      parameters={248}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/remote/openapi.yaml"
      developerDocumentation="gateway.remote.com/v1/docs/openapi.html"
    />
  );
}
  