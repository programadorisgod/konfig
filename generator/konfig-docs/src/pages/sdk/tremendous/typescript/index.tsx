import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TremendousTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="tremendous-typescript-sdk"
      metaDescription={`Tremendous is the simplest way to send rewards and payouts around the world. We've helped businesses send over 10 million payouts globally. We handle everything related to international sending, so you can issue rewards to recipients in over 200 countries. And you can give them the gift of choice: we offer 1,000 different redemption options. Plus, we're free to use. You only spend what you send. And if you or your recipients ever hit a snag, our best-in-class customer support team has you covered. 

We're 75 people, fully remote, highly profitable, and self-funded (yes, crazy, we know.) Even if you like your job, you'll probably be happier at Tremendous. Come work with us!`}
      company="Tremendous"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/logo.png"
      companyKebabCase="tremendous"
      clientNameCamelCase="tremendous"
      homepage="www.tremendous.com/"
      lastUpdated={new Date("2024-03-19T01:05:01.617Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/favicon.png"
      // Missing contactUrl
      contactEmail="developers@tremendous.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["payments","finance","developer_tools","payouts"]}
      methods={[
  {
    "url": "/rewards",
    "method": "listAllRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "List rewards",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offsets the returned list by the given number of rewards. The returned rewards are ordered (and offsetted) by their creation date (DESC).",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/rewards/{id}",
    "method": "getSingleReward",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "Retrieve single reward",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the reward that should be retrieved",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/rewards/{id}/generate_link",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "Generate a reward URL",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the reward",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/rewards/{id}/generate_embed_token",
    "method": "generateEmbedToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "Generate a reward token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the reward",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/rewards/{id}/resend",
    "method": "resendRewardById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "Resend reward",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the reward that should be resent",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/orders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List orders",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offsets the returned list by the given number of orders. The returned orders are ordered (and offsetted) by their creation date (DESC).",
        "example": 10
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "Only return results with a matching campaign_id.",
        "example": "IVM0I3WNJJL0"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "Only return results with a matching external_id.",
        "example": 12878
      },
      {
        "name": "createdAt[gte]",
        "schema": "string",
        "required": false,
        "description": "Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.",
        "example": "2023-07-15T18:12:18Z"
      },
      {
        "name": "createdAt[lte]",
        "schema": "string",
        "required": false,
        "description": "Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.",
        "example": "2023-08-01T18:12:18Z"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of orders listed. The maximum value is 100 and the default is 10.",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create order",
    "parameters": [
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Your-Individual-Identifier-for-This-Order"
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reward",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
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
        "statusCode": "402",
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
    "url": "/orders/{id}",
    "method": "getOrderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the order that should be retrieved. In case the order has an `external_id` reference supplied by the\ncustomer on creation, it's possible to use it instead.\n",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/order_approvals/{id}/approve",
    "method": "approveOrderById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Approve order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the order that should be approved. In case the order has an `external_id` reference supplied by the customer on creation, it's possible to use it instead.",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
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
    "url": "/order_approvals/{id}/reject",
    "method": "rejectById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Reject order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the order that should be rejected. In case the order has an `external_id` reference supplied by the customer on creation, it's possible to use it instead.",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/products",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List products",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Comma-separated list of [Alpha-2 country codes](https://www.iban.com/country-codes), used to only retrieve products available in the provided countries",
        "example": "US,UK"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "Comma-separated list of [currency codes](https://www.iban.com/currency-codes), used to only retrieve products available in the provided currencies",
        "example": "USD,EUR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/products/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Retrieve product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the product that should be retrieved",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/campaigns",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "List campaigns",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/campaigns/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Retrieve campaign",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the campaign that should be retrieved",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/funding_sources",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Funding sources",
    "typeScriptTag": "fundingSources",
    "description": "List funding sources",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/funding_sources/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Funding sources",
    "typeScriptTag": "fundingSources",
    "description": "Retrieve funding source",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the funding source that should be retrieved",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/invoices",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offsets the returned list by the given number of invoices. The returned invoices are ordered (and offsetted) by their creation date (DESC).",
        "example": 10
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of invoices listed. The maximum and default value is 10.",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/invoices",
    "method": "createAndFundAccountBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create invoice",
    "parameters": [
      {
        "name": "po_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123-PO-EE"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50.35
      },
      {
        "name": "memo",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/invoices/{id}",
    "method": "removeInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the invoice that should be retrieved",
        "example": "PPS-26873"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/invoices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the invoice that should be retrieved",
        "example": "PPS-26873"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/invoices/{id}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoice as PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the Invoice for that the PDF should be generated",
        "example": "PPS-26873"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The PDF binary data"
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
    "url": "/invoices/{id}/csv",
    "method": "getCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoice as CSV",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the Invoice for that the CSV should be generated",
        "example": "PPS-26873"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The CSV text file"
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
    "url": "/balance_transactions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance transactions",
    "typeScriptTag": "balanceTransactions",
    "description": "List balance transactions",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offsets the returned list by the given number of transactions. The returned transactions are ordered (and offsetted) by their creation date (DESC).",
        "example": 10
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of transactions listed. The default value is 10.",
        "example": 10
      },
      {
        "name": "createdAt[gte]",
        "schema": "string",
        "required": false,
        "description": "Only return results where the created_at field is greater than or equal to the supplied value. The string needs to be an ISO 8601 datetime.",
        "example": "2023-07-15T18:00:00Z"
      },
      {
        "name": "createdAt[lte]",
        "schema": "string",
        "required": false,
        "description": "Only return results where the created_at field is less than or equal to the supplied value. The string needs to be an ISO 8601 datetime.",
        "example": "2023-08-01T18:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/organizations",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/organizations",
    "method": "createNewOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create organization",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACME Inc."
      },
      {
        "name": "website",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.example.com/some-org"
      },
      {
        "name": "with_api_key",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "copy_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123-456-7890"
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
    "url": "/organizations/{id}",
    "method": "getOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the organization to retrieve",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/organizations/create_api_key",
    "method": "createApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create API key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "List members",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/members",
    "method": "createNewMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Create member",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jane@example.com"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jane Doe"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER"
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
    "url": "/members/{id}",
    "method": "getMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Retrieve member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the member to retrieve",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fields",
    "typeScriptTag": "fields",
    "description": "List fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/webhooks",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create webhook",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/webhook"
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
    "url": "/webhooks/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to retrieve",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/webhooks/{id}/simulate",
    "method": "triggerEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Test webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to test",
        "example": "SOMEIDSOMEID"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICES.PAID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty body"
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
    "url": "/webhooks/{id}/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List events",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the webhook to list the events for",
        "example": "SOMEIDSOMEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="API Endpoints"
      apiBaseUrl="https://testflight.tremendous.com/api/v2"
      apiVersion="2"
      endpoints={30}
      sdkMethods={36}
      schemas={228}
      parameters={50}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tremendous/openapi.yaml"
      developerDocumentation="developers.tremendous.com/"
    />
  );
}
  