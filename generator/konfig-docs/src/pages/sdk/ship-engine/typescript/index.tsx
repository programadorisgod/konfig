import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ShipEngineTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ship-engine-typescript-sdk"
      metaDescription={`ShipEngine is the leading multi-carrier shipping API. Our highly efficient API helps brands, platforms and third-party logistics providers drive efficiency and cost savings through a network of 70-plus carriers worldwide. You can invest significant resources into building carrier and order source integrations. And, after those integrations are built, you can continue exhausting resources to maintain them. Many businesses choose this expensive, time-intensive path — only to realize the approach is unsustainable.

There's a better alternative: Integrate once with ShipEngine and never worry about building or maintaining integrations again. Spend your team's valuable time and money on projects that are core to growing your business, rather than dealing with legacy carrier integrations. In addition to the ROI you achieve after implementing ShipEngine, our shipping API also offers pre-negotiated, discounted rates through the USPS, UPS and DHL. Our users report that shipping-related tasks that once took minutes now take seconds, and that ShipEngine's features and capabilities help unlock thousands in savings. 

Getting started with ShipEngine is easy.

Visit our API documentation and start building with our SDKs at shipengine.com/docs/

Schedule time to talk to one of our shipping experts by visiting shipengine.com/contact/

Or get a free API key and start building, no credit card required, at shipengine.com/signup/`}
      company="ShipEngine"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/logo.png"
      companyKebabCase="ship-engine"
      clientNameCamelCase="shipEngine"
      homepage="shipengine.com"
      lastUpdated={new Date("2024-03-20T00:37:28.388Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/favicon.png"
      contactUrl="https://www.shipengine.com/contact/"
      contactEmail="sales@shipengine.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["shipping_api","multi_carrier","logistics_provider","shipping_integration","usps","ups","dhl","shipping_experts","shipping","ecommerce","order_management","international_shipping"]}
      methods={[
  {
    "url": "/v1/account/settings",
    "method": "listSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Account Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ShipEngine account settings response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/account/settings/images",
    "method": "listImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Account Images",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/account/settings/images",
    "method": "createImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create an Account Image",
    "parameters": [
      {
        "name": "label_image_id",
        "schema": "string",
        "description": "",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My logo"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "image_content_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "image_data",
        "schema": "string",
        "description": "",
        "example": "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg=="
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "modified_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ShipEngine account images body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/account/settings/images/{label_image_id}",
    "method": "deleteImageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete Account Image By Id",
    "parameters": [
      {
        "name": "labelImageId",
        "schema": "string",
        "required": true,
        "description": "Label Image Id",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/account/settings/images/{label_image_id}",
    "method": "getImageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get Account Image By ID",
    "parameters": [
      {
        "name": "labelImageId",
        "schema": "string",
        "required": true,
        "description": "Label Image Id",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ShipEngine account images body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/account/settings/images/{label_image_id}",
    "method": "updateImageById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update Account Image By ID",
    "parameters": [
      {
        "name": "labelImageId",
        "schema": "string",
        "required": true,
        "description": "Label Image Id",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      },
      {
        "name": "label_image_id",
        "schema": "string",
        "description": "",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My logo"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "image_content_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "image_data",
        "schema": "string",
        "description": "",
        "example": "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg=="
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "modified_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/addresses/recognize",
    "method": "address",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "addresses",
    "typeScriptTag": "addresses",
    "description": "Parse an address",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652."
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/addresses/validate",
    "method": "address",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "addresses",
    "typeScriptTag": "addresses",
    "description": "Validate An Address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An address validation response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches",
    "method": "batches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "List Batches",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per response.",
        "example": 50,
        "default": 25
      },
      {
        "name": "sortDir",
        "schema": "string",
        "required": false,
        "description": "Controls the sort order of the query."
      },
      {
        "name": "batchNumber",
        "schema": "string",
        "required": false,
        "description": "Batch Number"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list batch response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches",
    "method": "batch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Create A Batch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or\nthousands of labels at a time.\n"
      },
      {
        "statusCode": "207",
        "description": "Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or\nthousands of labels at a time.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/external_batch_id/{external_batch_id}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Get Batch By External ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or\nthousands of labels at a time.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}",
    "method": "batch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Delete Batch By Id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Get Batch By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or\nthousands of labels at a time.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}",
    "method": "batch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Update Batch By Id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}/add",
    "method": "addToBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Add to a Batch",
    "parameters": [
      {
        "name": "shipment_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rate_ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}/errors",
    "method": "getErrors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Get Batch Errors",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A batch errors response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}/process/labels",
    "method": "batch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Process Batch ID Labels",
    "parameters": [
      {
        "name": "ship_date",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "label_layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_scheme",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/batches/{batch_id}/remove",
    "method": "removeFromBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batches",
    "typeScriptTag": "batches",
    "description": "Remove From Batch",
    "parameters": [
      {
        "name": "shipment_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rate_ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers",
    "method": "carriers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "List Carriers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}",
    "method": "disconnectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "Disconnect Carrier by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "Get Carrier By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A carrier object that represents a provider such as UPS, USPS, DHL, etc\nthat has been tied to the current account.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}/add_funds",
    "method": "addFundsToCarrier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "Add Funds To Carrier",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The current balance of the requested carrier account"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}/options",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "Get Carrier Options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A carrier list options response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}/packages",
    "method": "listPackageTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "List Carrier Package Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list carrier package types response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/carriers/{carrier_id}/services",
    "method": "listServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carriers",
    "typeScriptTag": "carriers",
    "description": "List Carrier Services",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A carrier list services response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/carriers/{carrier_name}",
    "method": "carrier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "carrier_accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Connect a carrier account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A connect account response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/carriers/{carrier_name}/{carrier_id}",
    "method": "carrier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "carrier_accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Disconnect a carrier",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/carriers/{carrier_name}/{carrier_id}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "carrier_accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Get carrier settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/carriers/{carrier_name}/{carrier_id}/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "carrier_accounts",
    "typeScriptTag": "carrierAccounts",
    "description": "Update carrier settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/insurance/shipsurance",
    "method": "insurer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "insurance",
    "typeScriptTag": "insurance",
    "description": "Disconnect a Shipsurance Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/connections/insurance/shipsurance",
    "method": "insurer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insurance",
    "typeScriptTag": "insurance",
    "description": "Connect a Shipsurance Account",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john.doe@example.com"
      },
      {
        "name": "policy_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/downloads/{dir}/{subdir}/{filename}",
    "method": "file",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "downloads",
    "typeScriptTag": "downloads",
    "description": "Download File",
    "parameters": [
      {
        "name": "download",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rotation",
        "schema": "integer",
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
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/environment/webhooks",
    "method": "webhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "List Webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A webhook list response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/environment/webhooks",
    "method": "webhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a Webhook",
    "parameters": [
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://api.shipengine.com/v1/labels/se-28529731"
      },
      {
        "name": "headers",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A webhook"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "409",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/environment/webhooks/{webhook_id}",
    "method": "webhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/environment/webhooks/{webhook_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhook By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A webhook"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/environment/webhooks/{webhook_id}",
    "method": "webhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a Webhook",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "http://api.shipengine.com/v1/labels/se-28529731"
      },
      {
        "name": "headers",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/insurance/shipsurance/add_funds",
    "method": "autoFundAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "insurance",
    "typeScriptTag": "insurance",
    "description": "Add Funds To Insurance",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/insurance/shipsurance/balance",
    "method": "getFundsBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insurance",
    "typeScriptTag": "insurance",
    "description": "Get Insurance Funds Balance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels",
    "method": "labels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "List labels",
    "parameters": [
      {
        "name": "labelStatus",
        "schema": "string",
        "required": false,
        "description": "Only return labels that are currently in the specified status"
      },
      {
        "name": "serviceCode",
        "schema": "string",
        "required": false,
        "description": "Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/)",
        "example": "usps_first_class_mail"
      },
      {
        "name": "carrierId",
        "schema": "string",
        "required": false,
        "description": "Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/)",
        "example": "se-28529731"
      },
      {
        "name": "trackingNumber",
        "schema": "string",
        "required": false,
        "description": "Only return labels with a specific tracking number",
        "example": "9405511899223197428490"
      },
      {
        "name": "batchId",
        "schema": "string",
        "required": false,
        "description": "Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/)",
        "example": "se-28529731"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": false,
        "description": "Rate ID",
        "example": "se-28529731"
      },
      {
        "name": "shipmentId",
        "schema": "string",
        "required": false,
        "description": "Shipment ID",
        "example": "se-28529731"
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": "Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/)",
        "example": "se-28529731"
      },
      {
        "name": "createdAtStart",
        "schema": "string",
        "required": false,
        "description": "Only return labels that were created on or after a specific date/time",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "createdAtEnd",
        "schema": "string",
        "required": false,
        "description": "Only return labels that were created on or before a specific date/time",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per response.",
        "example": 50,
        "default": 25
      },
      {
        "name": "sortDir",
        "schema": "string",
        "required": false,
        "description": "Controls the sort order of the query."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Controls which field the query is sorted by.",
        "default": "created_at"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels",
    "method": "label",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Purchase Label",
    "parameters": [
      {
        "name": "label_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipment_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "shipment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ship_date",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T00:00:00.000Z"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "shipment_cost",
        "schema": "object",
        "description": ""
      },
      {
        "name": "insurance_cost",
        "schema": "object",
        "description": ""
      },
      {
        "name": "requested_comparison_amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tracking_number",
        "schema": "string",
        "description": "",
        "example": "782758401696"
      },
      {
        "name": "is_return_label",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rma_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_international",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "batch_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "carrier_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "charge_event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "outbound_label_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "service_code",
        "schema": "string",
        "description": "",
        "example": "usps_first_class_mail"
      },
      {
        "name": "test_label",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "package_code",
        "schema": "string",
        "description": "",
        "example": "small_flat_rate_box"
      },
      {
        "name": "validate_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voided",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "voided_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "label_download_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_scheme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "label_image_id",
        "schema": "string",
        "description": "",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      },
      {
        "name": "carrier_code",
        "schema": "string",
        "description": "",
        "example": "dhl_express"
      },
      {
        "name": "tracking_status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_download",
        "schema": "object",
        "description": ""
      },
      {
        "name": "form_download",
        "schema": "object",
        "description": ""
      },
      {
        "name": "insurance_claim",
        "schema": "object",
        "description": ""
      },
      {
        "name": "packages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "alternative_identifiers",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/external_shipment_id/{external_shipment_id}",
    "method": "getByExternalShipmentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Get Label By External Shipment ID",
    "parameters": [
      {
        "name": "labelDownloadType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "url"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/rates/{rate_id}",
    "method": "purchaseLabelWithRateId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Purchase Label with Rate ID",
    "parameters": [
      {
        "name": "validate_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_download_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_scheme",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/shipment/{shipment_id}",
    "method": "purchaseLabelWithShipmentId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Purchase Label with Shipment ID",
    "parameters": [
      {
        "name": "validate_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_download_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_scheme",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/{label_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Get Label By ID",
    "parameters": [
      {
        "name": "labelDownloadType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "url"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/{label_id}/return",
    "method": "createReturnLabel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Create a return label",
    "parameters": [
      {
        "name": "charge_event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_download_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_scheme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label_image_id",
        "schema": "string",
        "description": "",
        "example": "img_DtBXupDBxREpHnwEXhTfgK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/{label_id}/track",
    "method": "getTrackingInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Get Label Tracking Information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tracking information resource"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/labels/{label_id}/void",
    "method": "label",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "labels",
    "typeScriptTag": "labels",
    "description": "Void a Label By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A void label response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/manifests",
    "method": "manifests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "manifests",
    "typeScriptTag": "manifests",
    "description": "List Manifests",
    "parameters": [
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": "Warehouse ID",
        "example": "se-28529731"
      },
      {
        "name": "shipDateStart",
        "schema": "string",
        "required": false,
        "description": "ship date start range",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "shipDateEnd",
        "schema": "string",
        "required": false,
        "description": "ship date end range",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "createdAtStart",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "createdAtEnd",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "carrierId",
        "schema": "string",
        "required": false,
        "description": "Carrier ID",
        "example": "se-28529731"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per response.",
        "example": 50,
        "default": 25
      },
      {
        "name": "labelIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list manifests response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/manifests",
    "method": "manifest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "manifests",
    "typeScriptTag": "manifests",
    "description": "Create Manifest",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A create manifest response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/manifests/{manifest_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "manifests",
    "typeScriptTag": "manifests",
    "description": "Get Manifest By Id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Used for combining packages into one scannable form that a carrier can use when picking up a large \nnumber of shipments\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/manifests/requests/{manifest_request_id}",
    "method": "getRequestById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "manifests",
    "typeScriptTag": "manifests",
    "description": "Get Manifest Request By Id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A create manifest response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/packages",
    "method": "listCustomPackageTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "package_types",
    "typeScriptTag": "packageTypes",
    "description": "List Custom Package Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list package types response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/packages",
    "method": "createCustomPackageType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "package_types",
    "typeScriptTag": "packageTypes",
    "description": "Create Custom Package Type",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Packaging for laptops"
      },
      {
        "name": "package_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "package_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "small_flat_rate_box"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "laptop_box"
      },
      {
        "name": "dimensions",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A package type that a carrier supports for shipment."
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/packages/{package_id}",
    "method": "deleteCustomPackageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "package_types",
    "typeScriptTag": "packageTypes",
    "description": "Delete A Custom Package By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/packages/{package_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "package_types",
    "typeScriptTag": "packageTypes",
    "description": "Get Custom Package Type By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A package type that a carrier supports for shipment."
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/packages/{package_id}",
    "method": "updateCustomPackageTypeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "package_types",
    "typeScriptTag": "packageTypes",
    "description": "Update Custom Package Type By ID",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Packaging for laptops"
      },
      {
        "name": "package_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "package_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "small_flat_rate_box"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "laptop_box"
      },
      {
        "name": "dimensions",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/pickups",
    "method": "listScheduledPickups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "package_pickups",
    "typeScriptTag": "packagePickups",
    "description": "List Scheduled Pickups",
    "parameters": [
      {
        "name": "carrierId",
        "schema": "string",
        "required": false,
        "description": "Carrier ID",
        "example": "se-28529731"
      },
      {
        "name": "warehouseId",
        "schema": "string",
        "required": false,
        "description": "Warehouse ID",
        "example": "se-28529731"
      },
      {
        "name": "createdAtStart",
        "schema": "string",
        "required": false,
        "description": "Only return scheduled pickups that were created on or after a specific date/time",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "createdAtEnd",
        "schema": "string",
        "required": false,
        "description": "Only return scheduled pickups that were created on or before a specific date/time",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per response.",
        "example": 50,
        "default": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/pickups",
    "method": "pickup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "package_pickups",
    "typeScriptTag": "packagePickups",
    "description": "Schedule a Pickup",
    "parameters": [
      {
        "name": "pickup_id",
        "schema": "string",
        "description": "",
        "example": "pik_3YcKU5zdtJuCqoeNwyqqbW"
      },
      {
        "name": "label_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "cancelled_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      },
      {
        "name": "carrier_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "confirmation_number",
        "schema": "string",
        "description": "",
        "example": "292513CL4A3"
      },
      {
        "name": "warehouse_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "pickup_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contact_details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pickup_notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pickup_window",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pickup_windows",
        "schema": "array",
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
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/pickups/{pickup_id}",
    "method": "removeScheduledPickup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "package_pickups",
    "typeScriptTag": "packagePickups",
    "description": "Delete a Scheduled Pickup",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/pickups/{pickup_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "package_pickups",
    "typeScriptTag": "packagePickups",
    "description": "Get Pickup By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/rates",
    "method": "rates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rates",
    "typeScriptTag": "rates",
    "description": "Get Shipping Rates",
    "parameters": [
      {
        "name": "rate_options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A rate shipment response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/rates/bulk",
    "method": "getBulkShipmentRates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rates",
    "typeScriptTag": "rates",
    "description": "Get Bulk Rates",
    "parameters": [
      {
        "name": "rate_options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A bulk rate response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/rates/estimate",
    "method": "rates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rates",
    "typeScriptTag": "rates",
    "description": "Estimate Rates",
    "parameters": [
      {
        "name": "from_country_code",
        "schema": "string",
        "description": "",
        "example": "CA"
      },
      {
        "name": "from_postal_code",
        "schema": "string",
        "description": "",
        "example": "78756-3717"
      },
      {
        "name": "from_city_locality",
        "schema": "string",
        "description": "",
        "example": "Austin"
      },
      {
        "name": "from_state_province",
        "schema": "string",
        "description": "",
        "example": "Austin"
      },
      {
        "name": "to_country_code",
        "schema": "string",
        "description": "",
        "example": "CA"
      },
      {
        "name": "to_postal_code",
        "schema": "string",
        "description": "",
        "example": "78756-3717"
      },
      {
        "name": "to_city_locality",
        "schema": "string",
        "description": "",
        "example": "Austin"
      },
      {
        "name": "to_state_province",
        "schema": "string",
        "description": "",
        "example": "Houston"
      },
      {
        "name": "weight",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dimensions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "confirmation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address_residential_indicator",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ship_date",
        "schema": "string",
        "description": "",
        "example": "2018-09-23T15:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A rate estimate response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/rates/{rate_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rates",
    "typeScriptTag": "rates",
    "description": "Get Rate By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A rate"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/service_points/list",
    "method": "getByLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "service_points",
    "typeScriptTag": "servicePoints",
    "description": "List Service Points",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list service points response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/service_points/{carrier_code}/{country_code}/{service_point_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "service_points",
    "typeScriptTag": "servicePoints",
    "description": "Get Service Point By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A get service point by ID response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments",
    "method": "shipments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "List Shipments",
    "parameters": [
      {
        "name": "shipmentStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "batchId",
        "schema": "string",
        "required": false,
        "description": "Batch ID",
        "example": "se-28529731"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Search for shipments based on the custom tag added to the shipment object",
        "example": "Letters_to_santa"
      },
      {
        "name": "createdAtStart",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "createdAtEnd",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "modifiedAtStart",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "modifiedAtEnd",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return per response.",
        "example": 50,
        "default": 25
      },
      {
        "name": "salesOrderId",
        "schema": "string",
        "required": false,
        "description": "Sales Order ID"
      },
      {
        "name": "sortDir",
        "schema": "string",
        "required": false,
        "description": "Controls the sort order of the query."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "modified_at"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list shipment response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments",
    "method": "shipments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Create Shipments",
    "parameters": [
      {
        "name": "shipments",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A create shipments response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/external_shipment_id/{external_shipment_id}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Get Shipment By External ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/recognize",
    "method": "shipment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Parse shipping info",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n"
      },
      {
        "name": "shipment",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Get Shipment By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}",
    "method": "shipment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Update Shipment By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A create and validate shipment resource"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}/cancel",
    "method": "shipments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Cancel a Shipment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}/rates",
    "method": "getRatesForShipment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Get Shipment Rates",
    "parameters": [
      {
        "name": "createdAtStart",
        "schema": "string",
        "required": false,
        "description": "Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)",
        "example": "2019-03-12T19:24:13.657Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A rates information resource"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Update Shipments Tags",
    "parameters": [
      {
        "name": "shipments_tags",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}/tags",
    "method": "getTagsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Get Shipment Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Get shipment tags response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}/tags/{tag_name}",
    "method": "shipment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Remove Tag from Shipment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/shipments/{shipment_id}/tags/{tag_name}",
    "method": "shipment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "shipments",
    "typeScriptTag": "shipments",
    "description": "Add Tag to Shipment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Get shipment tags response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "tags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Get Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response body from a successful GET /tags API call"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tags/{tag_name}",
    "method": "tag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Delete Tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tags/{tag_name}",
    "method": "tag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Create a New Tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.\n"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tags/{tag_name}/{new_tag_name}",
    "method": "tag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Update Tag Name",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tokens/ephemeral",
    "method": "generateEphemeralToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tokens",
    "typeScriptTag": "tokens",
    "description": "Get Ephemeral Token",
    "parameters": [
      {
        "name": "redirect",
        "schema": "string",
        "required": false,
        "description": "Include a redirect url to the application formatted with the ephemeral token."
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
    "url": "/v1/tracking",
    "method": "infoRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracking",
    "typeScriptTag": "tracking",
    "description": "Get Tracking Information",
    "parameters": [
      {
        "name": "carrierCode",
        "schema": "string",
        "required": false,
        "description": "A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.\n",
        "example": "stamps_com"
      },
      {
        "name": "trackingNumber",
        "schema": "string",
        "required": false,
        "description": "The tracking number associated with a shipment",
        "example": "9405511899223197428490"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tracking information resource"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tracking/start",
    "method": "tracking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tracking",
    "typeScriptTag": "tracking",
    "description": "Start Tracking a Package",
    "parameters": [
      {
        "name": "carrierCode",
        "schema": "string",
        "required": false,
        "description": "A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.\n",
        "example": "stamps_com"
      },
      {
        "name": "trackingNumber",
        "schema": "string",
        "required": false,
        "description": "The tracking number associated with a shipment",
        "example": "9405511899223197428490"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/tracking/stop",
    "method": "tracking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tracking",
    "typeScriptTag": "tracking",
    "description": "Stop Tracking a Package",
    "parameters": [
      {
        "name": "carrierCode",
        "schema": "string",
        "required": false,
        "description": "A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.\n",
        "example": "stamps_com"
      },
      {
        "name": "trackingNumber",
        "schema": "string",
        "required": false,
        "description": "The tracking number associated with a shipment",
        "example": "9405511899223197428490"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses",
    "method": "warehouses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "List Warehouses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A warehouse list response body"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses",
    "method": "warehouse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "Create Warehouse",
    "parameters": [
      {
        "name": "warehouse_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Zero Cool HQ"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2019-06-25T18:12:35.583Z"
      },
      {
        "name": "origin_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "return_address",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A warehouse"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses/{warehouse_id}",
    "method": "warehouse",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "Delete Warehouse By ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses/{warehouse_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "Get Warehouse By Id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A warehouse"
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses/{warehouse_id}",
    "method": "warehouse",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "Update Warehouse By Id",
    "parameters": [
      {
        "name": "warehouse_id",
        "schema": "string",
        "description": "",
        "example": "se-28529731"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Zero Cool HQ"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2019-06-25T18:12:35.583Z"
      },
      {
        "name": "origin_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "return_address",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  },
  {
    "url": "/v1/warehouses/{warehouse_id}/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "warehouses",
    "typeScriptTag": "warehouses",
    "description": "Update Warehouse Settings",
    "parameters": [
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error response body"
      },
      {
        "statusCode": "404",
        "description": "An error response body"
      },
      {
        "statusCode": "500",
        "description": "An error response body"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ShipEngine API"
      apiBaseUrl="https://api.shipengine.com"
      apiVersion="1.1.202403141503"
      endpoints={67}
      sdkMethods={261}
      schemas={251}
      parameters={94}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shipengine/openapi.yaml"
      developerDocumentation="www.shipengine.com/docs/getting-started/"
    />
  );
}
  