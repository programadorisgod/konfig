import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FinleyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="finley-typescript-sdk"
      metaDescription={`Finley's software simplifies debt capital raise and management for businesses. High-growth startups like Ramp, Even, and Arc rely on Finley to manage over $2 billion in debt capital. By automating due diligence, ensuring compliance, and streamlining ongoing reporting with capital providers, Finley helps ensure that companies always have access to funding when they need it. Finley's investors include Y Combinator, Bain Capital Ventures, Haystack, Nine Four Ventures, and TwentyTwo VC.`}
      company="Finley"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/logo.png"
      companyKebabCase="finley"
      clientNameCamelCase="finley"
      homepage="finleycms.com"
      lastUpdated={new Date("2024-03-29T21:57:13.775Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["debt_capital_raise","due_diligence","compliance","capital_providers_reporting"]}
      methods={[
  {
    "url": "/credit-facilities/{creditFacilityId}/borrowing-base-reports/{borrowingBaseReportId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BorrowingBaseReports",
    "typeScriptTag": "borrowingBaseReports",
    "description": "Get Borrowing-base Report",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility id",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "borrowingBaseReportId",
        "schema": "string",
        "required": true,
        "description": "id of the borrowing base report to get",
        "example": "4a61197g-a7c6-32cd-b9f7-f02921c5b123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/borrowing-base-reports",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BorrowingBaseReports",
    "typeScriptTag": "borrowingBaseReports",
    "description": "List Borrowing-base Reports",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility id",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CreditFacilities",
    "typeScriptTag": "creditFacilities",
    "description": "Get Credit Facility",
    "parameters": [
      {
        "name": "creditFacility",
        "schema": "string",
        "required": true,
        "description": "id of the credit facility to get",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CreditFacilities",
    "typeScriptTag": "creditFacilities",
    "description": "Get Credit Facilities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/expenses-fees",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExpensesFeesReports",
    "typeScriptTag": "expensesFeesReports",
    "description": "Get Expenses & Fees Report",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "ID of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Optional start date (https://docs.finleycms.com/ for ledger data",
        "example": "2023-08-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Optional end date (https://docs.finleycms.com/ for ledger data",
        "example": "2023-08-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object containing maximum date boundaries and ledger data"
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests/{fundingRequestId}",
    "method": "getByRequestId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "Get Funding Request",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "List Funding Requests",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "ID of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "borrowingBaseReportId",
        "schema": "string",
        "required": false,
        "description": "ID of the associated borrowing base report from which the funding request was generated",
        "example": "3d743493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the funding request",
        "example": "pending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests",
    "method": "createPendingRequestUsingLatestBorrowingBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "Create Funding Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests/{fundingRequestId}/components/{fundingRequestComponentId}",
    "method": "getComponentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "Get Component",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request of whose components to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      },
      {
        "name": "fundingRequestComponentId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request component to be settled",
        "example": "a22cc363-639b-4243-b4b6-3a8d5c46316c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests/{fundingRequestId}/components",
    "method": "listComponentsByRequestId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "List Components",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request of whose components to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests/{fundingRequestId}/components/{fundingRequestComponentId}/settle",
    "method": "settleComponentSettlement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "Settle Component",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request whose component will be settled",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      },
      {
        "name": "fundingRequestComponentId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request component to be settled",
        "example": "a22cc363-639b-4243-b4b6-3a8d5c46316c"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 1234567.89
      },
      {
        "name": "settlementDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "409",
        "description": "Settle has already been performed previously"
      }
    ]
  },
  {
    "url": "/credit-facilities/{creditFacilityId}/funding-requests/{fundingRequestId}/submit",
    "method": "submitFundingRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FundingRequests",
    "typeScriptTag": "fundingRequests",
    "description": "Submit Funding Request",
    "parameters": [
      {
        "name": "creditFacilityId",
        "schema": "string",
        "required": true,
        "description": "id of the associated credit facility",
        "example": "2c843493-ee7d-4998-94cb-6a97deb92123"
      },
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request whose component will be settled",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      },
      {
        "name": "collectionsPaydown",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collectionsRecycle",
        "schema": "object",
        "description": ""
      },
      {
        "name": "curePaydown",
        "schema": "object",
        "description": ""
      },
      {
        "name": "drawRequest",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding-requests/{fundingRequestId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequestsDeprecated",
    "typeScriptTag": "fundingRequestsDeprecated",
    "description": "Get Funding Request",
    "parameters": [
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding-requests",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequestsDeprecated",
    "typeScriptTag": "fundingRequestsDeprecated",
    "description": "List Funding Requests",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding-requests/{fundingRequestId}/components/{fundingRequestComponentId}",
    "method": "getComponentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequestsDeprecated",
    "typeScriptTag": "fundingRequestsDeprecated",
    "description": "Get Component",
    "parameters": [
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request of whose components to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      },
      {
        "name": "fundingRequestComponentId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request component to be settled",
        "example": "a22cc363-639b-4243-b4b6-3a8d5c46316c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding-requests/{fundingRequestId}/components",
    "method": "getComponentsByRequestId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FundingRequestsDeprecated",
    "typeScriptTag": "fundingRequestsDeprecated",
    "description": "List Components",
    "parameters": [
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request of whose components to get",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/funding-requests/{fundingRequestId}/components/{fundingRequestComponentId}/settle",
    "method": "settleComponent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FundingRequestsDeprecated",
    "typeScriptTag": "fundingRequestsDeprecated",
    "description": "Settle Component",
    "parameters": [
      {
        "name": "fundingRequestId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request whose component will be settled",
        "example": "5e71197d-e7d6-41fd-b9f7-f02921c5b392"
      },
      {
        "name": "fundingRequestComponentId",
        "schema": "string",
        "required": true,
        "description": "id of the funding request component to be settled",
        "example": "a22cc363-639b-4243-b4b6-3a8d5c46316c"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 1234567.89
      },
      {
        "name": "settlementDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "409",
        "description": "Settle has already been performed previously"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Finley API"
      apiBaseUrl="api.finleycms.com"
      apiVersion="0.0.2"
      endpoints={16}
      sdkMethods={17}
      schemas={19}
      parameters={36}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finley/openapi.yaml"
      developerDocumentation="docs.finleycms.com/"
    />
  );
}
  