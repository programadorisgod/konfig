import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PeachPaymentsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="peach-payments-typescript-sdk"
      metaDescription={`Peach Payments enables Simple, Seamless and Secure transactions for business and consumers in Africa. We provide our customers with all the tools and solutions they need to sell across any digital channel while ensuring a safe experience for them and their customers.

Customer service is a core part of our DNA and it is our mission to ensure that our customers are happy as they grow from their first transaction past their millionth

Peach Payments currently powers businesses in South Africa, Kenya and Mauritius.`}
      company="Peach Payments"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/logo.png"
      companyKebabCase="peach-payments"
      clientNameCamelCase="peachPayments"
      homepage="www.peachpayments.com/"
      lastUpdated={new Date("2024-03-26T22:36:48.020Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/favicon.png"
      contactUrl="https://support.peachpayments.com/support/home"
      contactEmail="support@peachpayments.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","africa","financial_technology","fintech","e_commerce"]}
      methods={[
  {
    "url": "/checkout/initiate",
    "method": "initiateRedirectCheckout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout generation",
    "typeScriptTag": "checkoutGeneration",
    "description": "Initiate redirect-based Checkout",
    "parameters": [
      {
        "name": "referer",
        "schema": "string",
        "required": true,
        "description": "An allowlisted domain for the merchant.",
        "example": "https://mydemostore.com"
      },
      {
        "name": "authentication.entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OrderNo453432"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1010.22
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DB"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "nonce",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNQ00012345678"
      },
      {
        "name": "shopperResultUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432"
      },
      {
        "name": "defaultPaymentMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CARD"
      },
      {
        "name": "forceDefaultMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false",
        "default": "false"
      },
      {
        "name": "merchantInvoiceId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "INV-0001"
      },
      {
        "name": "cancelUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/cancelled"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/webhook"
      },
      {
        "name": "customParameters[name]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "name: Name1 value: Value1"
      },
      {
        "name": "customer.merchantCustomerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 971020
      },
      {
        "name": "customer.givenName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "customer.surname",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "customer.mobile",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "johnsmith@mail.com"
      },
      {
        "name": "customer.status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EXISTING"
      },
      {
        "name": "customer.birthDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-02-17"
      },
      {
        "name": "customer.ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "customer.phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.idNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 9001010000084
      },
      {
        "name": "billing.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "billing.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "billing.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "billing.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "billing.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "billing.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "billing.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "shipping.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "shipping.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "shipping.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "shipping.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "shipping.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "cart.tax",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15.00"
      },
      {
        "name": "cart.shippingAmount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.25"
      },
      {
        "name": "cart.discount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "02.25"
      },
      {
        "name": "createRegistration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false"
      },
      {
        "name": "originator",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Webstore"
      },
      {
        "name": "returnTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid authentication information."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/checkout",
    "method": "initiatePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout generation",
    "typeScriptTag": "checkoutGeneration",
    "description": "Initiate Checkout",
    "parameters": [
      {
        "name": "referer",
        "schema": "string",
        "required": true,
        "description": "An allowlisted domain for the merchant.",
        "example": "https://mydemostore.com"
      },
      {
        "name": "authentication.entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OrderNo453432"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1010.22
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DB"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "nonce",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNQ00012345678"
      },
      {
        "name": "shopperResultUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432"
      },
      {
        "name": "defaultPaymentMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CARD"
      },
      {
        "name": "forceDefaultMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false",
        "default": "false"
      },
      {
        "name": "merchantInvoiceId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "INV-0001"
      },
      {
        "name": "cancelUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/cancelled"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/webhook"
      },
      {
        "name": "customParameters[name]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "name: Name1 value: Value1"
      },
      {
        "name": "customer.merchantCustomerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 971020
      },
      {
        "name": "customer.givenName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "customer.surname",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "customer.mobile",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "johnsmith@mail.com"
      },
      {
        "name": "customer.status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EXISTING"
      },
      {
        "name": "customer.birthDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-02-17"
      },
      {
        "name": "customer.ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "customer.phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.idNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 9001010000084
      },
      {
        "name": "billing.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "billing.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "billing.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "billing.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "billing.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "billing.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "billing.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "shipping.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "shipping.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "shipping.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "shipping.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "shipping.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "cart.tax",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15.00"
      },
      {
        "name": "cart.shippingAmount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.25"
      },
      {
        "name": "cart.discount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "02.25"
      },
      {
        "name": "createRegistration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false"
      },
      {
        "name": "originator",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Webstore"
      },
      {
        "name": "returnTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The checkout frontend HTML page."
      },
      {
        "statusCode": "400",
        "description": "An error page detailing the error that has occured."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/checkout/validate",
    "method": "validateRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout generation",
    "typeScriptTag": "checkoutGeneration",
    "description": "Validate Checkout request",
    "parameters": [
      {
        "name": "referer",
        "schema": "string",
        "required": true,
        "description": "An allowlisted domain for the merchant.",
        "example": "https://mydemostore.com"
      },
      {
        "name": "authentication.entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OrderNo453432"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1010.22
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DB"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "nonce",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNQ00012345678"
      },
      {
        "name": "shopperResultUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432"
      },
      {
        "name": "defaultPaymentMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CARD"
      },
      {
        "name": "forceDefaultMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false",
        "default": "false"
      },
      {
        "name": "merchantInvoiceId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "INV-0001"
      },
      {
        "name": "cancelUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/cancelled"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/webhook"
      },
      {
        "name": "customParameters[name]",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "name: Name1 value: Value1"
      },
      {
        "name": "customer.merchantCustomerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 971020
      },
      {
        "name": "customer.givenName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "customer.surname",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "customer.mobile",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "johnsmith@mail.com"
      },
      {
        "name": "customer.status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EXISTING"
      },
      {
        "name": "customer.birthDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-02-17"
      },
      {
        "name": "customer.ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.168.1.1"
      },
      {
        "name": "customer.phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 27123456789
      },
      {
        "name": "customer.idNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 9001010000084
      },
      {
        "name": "billing.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "billing.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "billing.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "billing.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "billing.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "billing.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "billing.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.street1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1 Example Road"
      },
      {
        "name": "shipping.street2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LocalityA"
      },
      {
        "name": "shipping.city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cape Town"
      },
      {
        "name": "shipping.company",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CompanyA"
      },
      {
        "name": "shipping.postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "shipping.country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZA"
      },
      {
        "name": "shipping.state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Western Cape"
      },
      {
        "name": "cart.tax",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15.00"
      },
      {
        "name": "cart.shippingAmount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.25"
      },
      {
        "name": "cart.discount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "02.25"
      },
      {
        "name": "createRegistration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "false"
      },
      {
        "name": "originator",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Webstore"
      },
      {
        "name": "returnTo",
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
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/status",
    "method": "checkoutStatusGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Query Checkout status",
    "parameters": [
      {
        "name": "authenticationEntityId",
        "schema": "string",
        "required": true,
        "description": "Merchant's entity ID.",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "checkoutId",
        "schema": "string",
        "description": "Checkout ID.",
        "example": "948cc8dec52a11eb85290242ac130003"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "description": "Merchant transaction ID.",
        "example": "OrderNo453432"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "Signature of data signed with secret key of merchant.",
        "example": "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4"
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
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/merchant_specs",
    "method": "getPaymentMethods",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Helpers",
    "typeScriptTag": "helpers",
    "description": "Retrieve a list of payment methods for a currency",
    "parameters": [
      {
        "name": "authentication.entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request processed successfully."
      },
      {
        "statusCode": "400",
        "description": "Invalid authentication information."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/v2/checkout",
    "method": "initiateCheckoutInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkout V2 generation",
    "typeScriptTag": "checkoutV2Generation",
    "description": "Initiate Checkout",
    "parameters": [
      {
        "name": "referer",
        "schema": "string",
        "required": true,
        "description": "An allowlisted domain for the merchant.",
        "example": "https://mydemostore.com"
      },
      {
        "name": "authentication.entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "8ac7a4ca68c22c4d0168c2caab2e0025"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OrderNo453432"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1010.22
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "nonce",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNQ00012345678"
      },
      {
        "name": "shopperResultUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432"
      },
      {
        "name": "defaultPaymentMethod",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CARD"
      },
      {
        "name": "forceDefaultMethod",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": "false"
      },
      {
        "name": "merchantInvoiceId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "INV-00001"
      },
      {
        "name": "cancelUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/cancelled"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mydemostore.com/OrderNo453432/webhook"
      },
      {
        "name": "customParameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createRegistration",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "originator",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Webstore"
      },
      {
        "name": "returnTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "STORE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/channels/{entityId}/payments",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Generate link",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The entity for the request.",
        "example": "8ac7a4ca694cec2601694cf5f9360026"
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "checkout",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/payments",
    "method": "getAllPaymentLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Retrieve or export all payment links",
    "parameters": [
      {
        "name": "merchant",
        "schema": "string",
        "required": false,
        "description": "The unique merchant ID to scope the list to. Required if you're exporting payment links to CSV.",
        "example": "9f6ea39b121d11e89d9774d4352a31dz"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset from which to read data.",
        "default": 0
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The amount of items to retrieve.",
        "default": 50
      },
      {
        "name": "filters[startDate]",
        "schema": "string",
        "required": false,
        "description": "Retrieve all payment links from the start date onwards.",
        "example": "2018-03-20T09:12:28Z"
      },
      {
        "name": "filters[endDate]",
        "schema": "string",
        "required": false,
        "description": "Retrieve all payment links until the end date.",
        "example": "2018-03-20T09:12:28Z"
      },
      {
        "name": "filters[status]",
        "schema": "string",
        "required": false,
        "description": "The payment link status to filter on.",
        "example": "initiated"
      },
      {
        "name": "filters[amountValue]",
        "schema": "number",
        "required": false,
        "description": "The amount to filter by.",
        "example": 100
      },
      {
        "name": "filters[amountOperator]",
        "schema": "string",
        "required": false,
        "description": "How to use the amountValue for filtering.",
        "example": "lt"
      },
      {
        "name": "filters[sendingOptions]",
        "schema": "string",
        "required": false,
        "description": "The sending option to filter on.",
        "example": "sendEmail"
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
      }
    ]
  },
  {
    "url": "/api/payments/{paymentId}",
    "method": "cancelLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Cancel link",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment. Returned when creating a new payment.",
        "example": "b95d6888-591b-4538-b508-6102cf1259c9"
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
      }
    ]
  },
  {
    "url": "/api/payments/{paymentId}",
    "method": "queryPaymentStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Query payment status",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment ID. Returned when creating a new payment.",
        "example": "b95d6888-591b-4538-b508-6102cf1259c9"
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
      }
    ]
  },
  {
    "url": "/api/payments/{paymentId}/files/{fileId}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download a file",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Payment ID.",
        "example": "b95d6888-591b-4538-b508-6102cf1259c9"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "ca6cd55b-4be6-451d-bd72-fe5b7ec1f75z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK."
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
      }
    ]
  },
  {
    "url": "/api/attachments",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload a file",
    "parameters": [
      {
        "name": "file",
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
      }
    ]
  },
  {
    "url": "/api/channels/{entityId}/payments/batches",
    "method": "getBatchStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Get all batch statuses",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The entity for the request.",
        "example": "8ac7a4ca694cec2601694cf5f9360026"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "The offset from which to read data.",
        "default": 0
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The amount of items to retrieve.",
        "default": 50
      },
      {
        "name": "filters[startDate]",
        "schema": "string",
        "required": false,
        "description": "Retrieve all batches from the start date onwards.",
        "example": "2018-03-20T09:12:28Z"
      },
      {
        "name": "filters[endDate]",
        "schema": "string",
        "required": false,
        "description": "Retrieve all batches until the end date.",
        "example": "2018-03-20T09:12:28Z"
      },
      {
        "name": "filters[status]",
        "schema": "string",
        "required": false,
        "description": "The payment link status to filter on.",
        "example": "initiated"
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
      }
    ]
  },
  {
    "url": "/api/channels/{entityId}/payments/batches",
    "method": "generateLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Generate batch link",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "The entity for the request.",
        "example": "8ac7a4ca694cec2601694cf5f9360026"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test.csv"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/"
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
      }
    ]
  },
  {
    "url": "/api/batches/{batchId}",
    "method": "linkStatusGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Batch link status",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "The batch ID for the request.",
        "example": "421e1e63-ddd5-46ec-8812-74eda861259b"
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
    "url": "/api/batches/{batchId}/files",
    "method": "getErrorFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Get batch error files",
    "parameters": [
      {
        "name": "batchId",
        "schema": "string",
        "required": true,
        "description": "The batch for the request.",
        "example": "421e1e63-ddd5-46ec-8812-74eda861259b"
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
    "url": "/",
    "method": "webhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments API outbound",
    "typeScriptTag": "paymentsApiOutbound",
    "description": "Merchant webhook",
    "parameters": [
      {
        "name": "xInitializationVector",
        "schema": "string",
        "description": "",
        "example": "34ba8cf802216b4fab4c3f1z"
      },
      {
        "name": "xAuthenticationTag",
        "schema": "string",
        "description": "",
        "example": "50d697553c37c1f9865acc3dc0f8b5az"
      },
      {
        "name": "encryptedData",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "48d33e173781de4ebfe247593240fee492aad55bc140bd1157b62da5747d74bf349d1c5035ab40bb62ba7ee3eafa7e8f8cf5e3af2cdea0c915eed159d0efa12ccd3c6a4ded4182e26687180a73f1d1ed7ab6415be9f0100a3803d19f1cf90402211185c4fc764be11a1b8d7c5434150db5d74c70e309a701d670c3beef47ea53726c5b7d677e13a0ca4b05a1b4fd7ca4218a3922b45271904f17a8a5c4cbe2b4571928a089610ccf37d14c98ccc51085f0897d22cead18f13504fa2b9182389ed77323ed2c8cacb18f0b1fd8cf0599bfabaac27e0d926d60af3f41f47bf0607c6df031de8973da17fac8ca6eb04c2b6491fa5e73e29cd4f9c3c4fce1c397b729ed6132c7a5fc812dc4bb7173354e7f13f9e80407c9b3c6e5dc82edabbf160097b82438874eb79edd7540ed963c5eb268a74cbbefce1661b388c0e442b4a90a954932e19f49aef5c10c9ac2639085049a2fe3c903aaafed326a2b81e2dcd4e32ac16c72218067c623cd5d20f98ee2594c8557a704c1e7b2a7ac2c7bf8ce52d91e0816081dd88697b0c9ea1b07adaf9a39948f88d02aec37103e52675a394d324db7cab951284f08da17306a1b4107a2b6b5aeead6bdb087fbe927eaf03d9b8e0a4a9683a0966e8d1d8e8ea1069e3870275317d3bc676a697fe4d4b6c0bbabc806ae6ff0d7cec926bfce10eca2f07ac832d6a9984d19b121d99f2db4b33ed6b8ecbf25687c34d8e48ffc1f438a4524c3f9657140102cc55ec0c48d37cb42424e8e622da6fc3f60bd969791b21b6360e25a2bcf956f2cdc1bbf049f173ac0b0558c34f89964cb8aced7bf2b532910d98f83760d529a2e67af7f9a7cd2739b871e7f914a99061623990a64a854560a860c1b5eff565b2de2be64d68be5de3d3a061aabb3ead5039d49d976ea9b094752d1a55851d33be6c1eab4197f1f409150eae8e6fca14ad757bf9c7451a795ab04763b8f1c1d4b3416e055f074aa51c6c5477eb0c219dd9b4bb26926e6490061284e14fa8c6969aba4a8036d685be81de9ad8c834217e456ed0be40e0b2331db8f0240135ac4ae066fe7596c28e949f20af760e6d0836e7ab218ca1092c4d45b64856f286f69d8754622a5a45c1865454c78f6df271481b692f2b5481d09c1d2eba226f40ec1ce008186d286aab4d4e091623e78147b1cbbd4a2c671beca4402565b0d663fc11776085bb5288396cb770bf43281ca14212abc057206684e40181d3e0498eda17e9c5dce344b16dc2853fc6cb3d6e5e86891c8573fb537701a01431cb5d1fe74ef565de48286db8bf17912dc6a46e7413115091d1cb7535e0d08685d57f5a18990cabdd5c73cd193147703f2221c0c2adf1e0bb1d4a170bc38b7082490464cbffcab72ffad243401645e23df324d072bad90200bab1ae40a272bcbd0bf1ccc9595498f0416ec10eb73b7a9024cc9082693c97d98908bc2b34724865dc08f88fbf09ed984b4987c3abf01a30f1d91919f29eecf5849b337512591c1f110de3ea17e0048ff4521820f33adcbb11c1e70b6c7ae646a7e9d024356cf34a5e2ccdbf30c3825e41bdb000d04bd5bda835eb52fd301dece1b11c45d97d03d5048c1a154c0e84e21b066790261632e487ec3c35d877ba79590bac13ea679772d8b2e4821ae3204c34475a2871039835817d10c8db9f3ec241532099dc8d0b4891b23fb12ad173a7be287afe31f3e6e29266c213430b4a749b92bbcfe8ad7ef4281ca7b71502de99adf574f81c5605c70a76295ce51f1f0ce6e475c98c1dc4dfcb3492494cbda9038e8193d072be09f9cf8103d67f79effe972c710accd94a6c5ee0c3e1bf8facb7fee1499a4cbeb5f444de1f85f998698bacbd2b0a8f6f2010bff95d8e75800ff39ea75f18bd0f3729bd24408e464e44d2fb2e62ec6ef06c349b8f1f83cd43bbad21657bece4fb6e115ab12e7a28458b5c8e9ebf5a06dbdd6e459105cab7c69f2792fb21a8b8c05a6498f4b20f42975cedb784ed45898fe3be750af3a23769e5cb7407219044aa4736bffcf66d76459b0c9cb0d7fb91575949beb0b28add0b8f5bb88c63b23643f20954074a561db01dc1fd5fbe0efa0e6e09e0de5fddc84fa12fadf236b9160f7b9a3408919af1e27d81a80f87a65f7038a703f8526d7f85c916223306ee2ba38bba1d3ff01a3c97806ed78fabd5ec298a2716292b852e7d3f7e6575b77457e44b6d22f57f0ae756c2c1c71de0d5278bac29334467949b7fddf6cb4e7d3c5b5b841335a80f9e3c8ed86fe4d0e77d4804418273d6f580f781475ec43edbeb378c172"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK."
      }
    ]
  },
  {
    "url": "/payments",
    "method": "status",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments API inbound",
    "typeScriptTag": "paymentsApiInbound",
    "description": "Query a transaction by merchantTransactionId",
    "parameters": [
      {
        "name": "authenticationUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "80d41ee71ee011e98e81067b75644abf"
      },
      {
        "name": "authenticationPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "xDZWEIefSkyibutsU3"
      },
      {
        "name": "authenticationEntityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "80d41ee71ee011e98e81067b75644abf"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the status request using merchantTransactionId as the query field."
      },
      {
        "statusCode": "400",
        "description": "Error object describing the 400 status code error."
      },
      {
        "statusCode": "401",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "404",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "500",
        "description": "Error object describing the error."
      }
    ]
  },
  {
    "url": "/payments",
    "method": "initiateDebitTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments API inbound",
    "typeScriptTag": "paymentsApiInbound",
    "description": "Payment",
    "parameters": [
      {
        "name": "authentication",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test12345"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "22.50"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "paymentBrand",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFTSECURE"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DB"
      },
      {
        "name": "virtualAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shopify",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "cart",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantInvoiceId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 20170630407200
      },
      {
        "name": "shopperResultUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/redirect"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error object describing the 400 status code error."
      },
      {
        "statusCode": "401",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "500",
        "description": "Error object describing the error."
      }
    ]
  },
  {
    "url": "/payments/{uniqueId}",
    "method": "queryTransactionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments API inbound",
    "typeScriptTag": "paymentsApiInbound",
    "description": "Query a transaction by transaction ID",
    "parameters": [
      {
        "name": "uniqueId",
        "schema": "string",
        "required": true,
        "description": "The Peach Payments unique ID for the transaction.",
        "example": "b4508276b8d146728dac871d6f68b45d"
      },
      {
        "name": "authenticationEntityId",
        "schema": "string",
        "required": true,
        "description": "Authentication entityId.",
        "example": "80d41ee71ee011e98e81067b75644abf"
      },
      {
        "name": "authenticationUserId",
        "schema": "string",
        "required": true,
        "description": "Authentication userId.",
        "example": "80d41ee71ee011e98e81067b75644abf"
      },
      {
        "name": "authenticationPassword",
        "schema": "string",
        "required": true,
        "description": "Authentication password.",
        "example": "xDZWEIefSkyibutsU3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the status request using transactionId as the query field."
      },
      {
        "statusCode": "400",
        "description": "Error object describing the 400 status code error."
      },
      {
        "statusCode": "401",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "403",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "404",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "500",
        "description": "Error object describing the error."
      }
    ]
  },
  {
    "url": "/payments/{uniqueId}",
    "method": "refundTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments API inbound",
    "typeScriptTag": "paymentsApiInbound",
    "description": "Refund",
    "parameters": [
      {
        "name": "uniqueId",
        "schema": "string",
        "required": true,
        "description": "The Peach Payments unique ID of the original debit transaction.",
        "example": "b4508276b8d146728dac871d6f68b45d"
      },
      {
        "name": "authentication",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "22.50"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZAR"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error object describing the 400 status code error."
      },
      {
        "statusCode": "401",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "404",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "500",
        "description": "Error object describing the error."
      },
      {
        "statusCode": "502",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Payments API inbound"
      apiBaseUrl="https://testapi-v2.peachpayments.com"
      apiVersion="2.0.0"
      endpoints={17}
      sdkMethods={21}
      schemas={92}
      parameters={221}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peach-payments/openapi.yaml"
      developerDocumentation="developer.peachpayments.com/reference"
    />
  );
}
  