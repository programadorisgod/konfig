import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function EchelonTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="echelon-typescript-sdk"
      metaDescription={`Echelon solutions simplify your payment process, and offer a wide range of features & services to help your business run smoothly.
With our cutting edge technology, global coverage, our alternative solutions - we will connect your business with over 1 billion consumers across Asia.
Echelon offers you an All-In-One API integration, giving your clients access to their preferred local payment method that's also available in their native language.
Offering your business a wide range of services from payments, settlements that are both local and international, international remittance and more, Echelon is your one stop shop for all things payments.
We are here to bring you one step closer to expanding your business in East and South Asia.`}
      company="Echelon"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/logo.png"
      companyKebabCase="echelon"
      clientNameCamelCase="echelon"
      homepage="www.echelonpro.io/"
      lastUpdated={new Date("2024-03-27T20:37:30.785Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["global_payments","fintech","online_payments","financial_services"]}
      methods={[
  {
    "url": "/payins/!availablePaymentOptions",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incoming payments",
    "typeScriptTag": "incomingPayments",
    "description": "Available payment options.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": "TODO: Add description of Id-Customer header"
      },
      {
        "name": "money",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "segmentCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "VIP"
      },
      {
        "name": "exchangedToCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of possible payment options.\nThe list always contains at least one payment option.\nIf no available payment options are found, an HTTP 406 response is returned with the error code."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts/!availablePaymentOptions",
    "method": "getAvailablePaymentOptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outgoing payments",
    "typeScriptTag": "outgoingPayments",
    "description": "Available payment options.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": "TODO: Add description of Id-Customer header"
      },
      {
        "name": "money",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "segmentCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "VIP"
      },
      {
        "name": "exchangedToCurrency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of possible payment options.\nThe list always contains at least one payment option.\nIf no available payment options are found, an HTTP 406 response is returned with the error code."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/payins/{idPayin}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incoming payments",
    "typeScriptTag": "incomingPayments",
    "description": "Incoming payment detail.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idPayin",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYIN"
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
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
    "url": "/payins/{idPayin}",
    "method": "createPaymentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incoming payments",
    "typeScriptTag": "incomingPayments",
    "description": "Create payment.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": "TODO: Add description of Id-Customer header"
      },
      {
        "name": "idPayin",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYIN"
      },
      {
        "name": "paymentRequested",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/order-status-change"
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com?id=123"
      },
      {
        "name": "customerIp",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "172.16.254.1"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "409",
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
    "url": "/payouts/{idPayout}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outgoing payments",
    "typeScriptTag": "outgoingPayments",
    "description": "Outgoing payment detail.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idPayout",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYOUT"
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
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
    "url": "/payouts/{idPayout}",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outgoing payments",
    "typeScriptTag": "outgoingPayments",
    "description": "Create outgoing payment.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": "TODO: Add description of Id-Customer header"
      },
      {
        "name": "idPayout",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYOUT"
      },
      {
        "name": "paymentRequested",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/order-status-change"
      },
      {
        "name": "customerIp",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "172.16.254.1"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The outgoing payment has been accepted for processing."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "409",
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
    "url": "/payins/{idPayin}/!setExternalReference",
    "method": "setExternalReference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incoming payments",
    "typeScriptTag": "incomingPayments",
    "description": "Set external reference for the payment.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idPayin",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYIN"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "External reference has been set."
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
        "statusCode": "410",
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
    "url": "/balances",
    "method": "getBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Account balance.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "currencyCodes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR,USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of account balances by currency."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
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
    "url": "/payins/{idPayin}/accounts",
    "method": "accounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incoming payments",
    "typeScriptTag": "incomingPayments",
    "description": "Incoming payment accounts details.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "idPayin",
        "schema": "string",
        "required": true,
        "description": "Unique Merchant Order ID provided by merchant. See [Request IDs](general.html#request-ids).",
        "example": "IDPAYIN"
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
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
    "url": "/merchant-info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant info",
    "typeScriptTag": "merchantInfo",
    "description": "Merchant information.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Merchant information."
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
        "statusCode": "410",
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
    "url": "/currencies",
    "method": "getCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Currencies.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available currencies."
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
        "statusCode": "410",
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
    "url": "/segments",
    "method": "listSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Segments.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available segments."
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
    "url": "/payment-operators",
    "method": "getOperatorsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Payment operators.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available payment operators."
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
    "url": "/payment-methods",
    "method": "listPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Payment methods.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available payment methods."
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
    "url": "/payment-options",
    "method": "getPaymentOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Payment options.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "paymentTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethodCodes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "OFFLINE,ONLINE"
      },
      {
        "name": "currencyCodes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR,USD"
      },
      {
        "name": "segmentCodes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentOperatorCodes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IDR_003,IDR_004"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of (possibly) available payment options."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
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
    "url": "/auth-tokens",
    "method": "issueJwt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Authorization token.",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "integer",
        "required": true,
        "description": "Required API version. See [Versioning](general.html#versioning)",
        "example": 0
      },
      {
        "name": "merchantCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YOUR_MERCHANT_ID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YOUR_MERCHANT_SECRET_KEY"
      },
      {
        "name": "validitySecs",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 600
      },
      {
        "name": "operations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "money",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Auth token for required operations. The Auth token payload can be decoded at [JWT official webiste](https://jwt.io/)."
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
        "statusCode": "406",
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
      apiTitle="Public API"
      apiBaseUrl="https://api.sandbox.echelonpay.com/"
      apiVersion="2.47"
      endpoints={14}
      sdkMethods={16}
      schemas={155}
      parameters={53}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/echelon/openapi.yaml"
      developerDocumentation="developers.echelonpay.com/"
    />
  );
}
  