import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SuprSendTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="supr-send-typescript-sdk"
      metaDescription={`SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.`}
      company="SuprSend"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/logo.png"
      companyKebabCase="supr-send"
      clientNameCamelCase="suprSend"
      homepage="suprsend.com"
      lastUpdated={new Date("2024-03-26T20:18:41.641Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communication","notifications","android_push","ios_push","email","sms","whatsapp","slack","microsoft_teams","telegram","web_push","notification_infrastructure"]}
      methods={[
  {
    "url": "/v1/template",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Fetch Template List",
    "parameters": [
      {
        "name": "hasTagIdsAny",
        "schema": "string",
        "description": "comma separated string of tag ids attached to the template"
      },
      {
        "name": "hasChannelsAny",
        "schema": "string",
        "description": "comma separated string of channels. Returns templates which has any of the channels present from the channel string. Use these keys for channels - `email`, `sms`, `whatsapp`, `inbox`, `slack`, `androidpush`, `iospush`, `webpush`"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "Set `true` for published templates, `false` for templates which are in draft. Do not pass this key to return all templates."
      },
      {
        "name": "isArchived",
        "schema": "boolean",
        "description": "Set `true` to get archived templates, default = `false`"
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
      }
    ]
  },
  {
    "url": "/v1/template/{template_slug}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Fetch Template details",
    "parameters": [
      {
        "name": "templateSlug",
        "schema": "string",
        "required": true,
        "description": "Template group slug you want to fetch content details. You'll get the template slug by clicking on copy button next to template group name on SuprSend dashboard -> template details page.",
        "example": "TEMPLATE_SLUG"
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
      }
    ]
  },
  {
    "url": "/v1/template/{template_slug}/channel/{channel_slug}",
    "method": "getContentChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Fetch Template content for a channel",
    "parameters": [
      {
        "name": "templateSlug",
        "schema": "string",
        "required": true,
        "description": "Template group slug you want to fetch content details. You'll get the template slug by clicking on copy button next to template group name on SuprSend dashboard -> template details page.",
        "example": "TEMPLATE_SLUG"
      },
      {
        "name": "channelSlug",
        "schema": "string",
        "required": true,
        "description": "add one of the template channels  - `email`, `sms`, `whatsapp`, `inbox`, `slack`, `androidpush`, `iospush`, `webpush`",
        "example": "CHANNEL_SLUG"
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
      }
    ]
  },
  {
    "url": "/v1/brand/{brand_id}",
    "method": "brandDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Brand data",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "unique identifier of the brand you want to get the details for",
        "example": "BRAND_ID"
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
      }
    ]
  },
  {
    "url": "/v1/brand/{brand_id}",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Create / Update Brands",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "unique identifier of the brand that you want to create / update",
        "example": "BRAND_ID"
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAND_NAME",
        "default": "Awesome Brand"
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "https://ik.imagekit.io/l0quatz6utm/suprsend/staging/media/suprsend-only-logo_c8aa27faef118418e8c5bd7b31a1cafc74e09200.png"
      },
      {
        "name": "primary_color",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "#ff0000"
      },
      {
        "name": "secondary_color",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "#00ff00"
      },
      {
        "name": "tertiary_color",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "#0000ff"
      },
      {
        "name": "preference_page_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "social_links",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
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
      }
    ]
  },
  {
    "url": "/v1/subscriber/{distinct_id}/category/{category_slug}",
    "method": "updateUserPreferencesCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Update User Preferences (Category level)",
    "parameters": [
      {
        "name": "distinctId",
        "schema": "string",
        "required": true,
        "description": "distinct_id of the user whose preferences should be fetched",
        "example": "DISTINCT_ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "description": "to fetch user preferences for a particular brand"
      },
      {
        "name": "categorySlug",
        "schema": "string",
        "required": true,
        "description": "notification category slug. You can get this from Notification Categories page on SuprSend dashboard -> Settings page",
        "example": "CATEGORY_SLUG"
      },
      {
        "name": "preference",
        "schema": "string",
        "description": "",
        "default": "opt_in"
      },
      {
        "name": "opt_out_channels",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/subscriber/add",
    "method": "addToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Add Subscribers to List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list to which user needs to be updated",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "description": "",
        "default": [
          "_distinct_id1_"
        ]
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/subscriber/remove",
    "method": "removeSubscribersFromList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SubscriberList",
    "typeScriptTag": "subscriberList",
    "description": "Remove Subscribers from List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list to which user needs to be updated",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "description": "",
        "default": [
          "_distinct_id1_"
        ]
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/delete",
    "method": "deleteList",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SubscriberList",
    "typeScriptTag": "subscriberList",
    "description": "Delete List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list which you want to delete",
        "example": "LIST_ID"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/version/{version_id}/delete",
    "method": "deleteDraftList",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Delete Draft List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list which you want to delete",
        "example": "LIST_ID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the draft version of the list which needs to be deleted",
        "example": "VERSION_ID",
        "default": "__version_id__"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/start_sync",
    "method": "listStartSync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sync",
    "typeScriptTag": "sync",
    "description": "Start Sync",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the list on which the sync needs to start to create a draft version",
        "example": "LIST_ID",
        "default": "_list_id_"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/add",
    "method": "addToDraftList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Add Subscribers to Draft List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list to which user needs to be updated",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the draft version of the list to which user needs to be updated",
        "example": "VERSION_ID",
        "default": "__version_id__"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "description": "",
        "default": [
          "[]"
        ]
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/remove",
    "method": "removeFromDraftList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Remove Subscribers from Draft List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list to which user needs to be updated",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the draft version of the list to which user needs to be updated",
        "example": "VERSION_ID",
        "default": "__version_id__"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "description": "",
        "default": [
          "[]"
        ]
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}/version/{version_id}/finish_sync",
    "method": "finishSyncDraftVersion",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriber",
    "typeScriptTag": "subscriber",
    "description": "Finish Sync",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the draft version of the list which needs to be made active(live)",
        "example": "VERSION_ID",
        "default": "__version_id__"
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
      }
    ]
  },
  {
    "url": "/{workspace_key}/broadcast",
    "method": "triggerMessageList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Broadcast",
    "typeScriptTag": "broadcast",
    "description": "Trigger Broadcast",
    "parameters": [
      {
        "name": "workspaceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_KEY"
      },
      {
        "name": "list_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "template",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE",
        "default": "_template_slug_"
      },
      {
        "name": "notification_category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATION_CATEGORY",
        "default": "transactional"
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{ \"key\": { \"k1\": \"v1\", \"k2\": \"v2\" } }"
      },
      {
        "name": "delay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trigger_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "brand_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/event",
    "method": "triggerEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Trigger an Event",
    "parameters": [
      {
        "name": "distinct_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISTINCT_ID",
        "default": "_distinct_id_"
      },
      {
        "name": "$user_operations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT",
        "default": "_event_name_"
      },
      {
        "name": "properties",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{}"
      },
      {
        "name": "brand_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "$idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{workspace_key}/trigger",
    "method": "configureTrigger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Trigger Workflow",
    "parameters": [
      {
        "name": "workspaceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_KEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME",
        "default": "_workflow_name_"
      },
      {
        "name": "template",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE",
        "default": "_template_slug_"
      },
      {
        "name": "notification_category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATION_CATEGORY",
        "default": "transactional"
      },
      {
        "name": "users",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "{ \"key\": { \"k1\": \"v1\", \"k2\": \"v2\" } }"
      },
      {
        "name": "delivery",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "delay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trigger_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "brand_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "$idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/brand",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Brand list",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "number of results to be returned in API response",
        "default": "20"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "starting position of brand list",
        "default": "0"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber/{distinct_id}/channel_preference",
    "method": "getUserChannelPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Preference",
    "typeScriptTag": "preference",
    "description": "Get User Preferences (Channel level)",
    "parameters": [
      {
        "name": "distinctId",
        "schema": "string",
        "required": true,
        "description": "distinct_id of the user whose preferences should be fetched",
        "example": "DISTINCT_ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "description": "to fetch user preferences for a particular brand"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber/{distinct_id}/channel_preference",
    "method": "updateChannelPreferences",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Preference",
    "typeScriptTag": "preference",
    "description": "Update User Preferences (Channel level)",
    "parameters": [
      {
        "name": "distinctId",
        "schema": "string",
        "required": true,
        "description": "distinct_id of the user whose preferences should be fetched",
        "example": "DISTINCT_ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "description": "to fetch user preferences for a particular brand"
      },
      {
        "name": "channel_preferences",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriber/{distinct_id}/category",
    "method": "getUserPreferencesAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PrefCategory",
    "typeScriptTag": "prefCategory",
    "description": "Get User Preferences (All Categories)",
    "parameters": [
      {
        "name": "distinctId",
        "schema": "string",
        "required": true,
        "description": "distinct_id of the user whose preferences should be fetched",
        "example": "DISTINCT_ID"
      },
      {
        "name": "tenantId",
        "schema": "string",
        "description": "to fetch user preferences for a particular brand"
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
      }
    ]
  },
  {
    "url": "/v1/brand/{brand_id}/category/{category_slug}",
    "method": "updateDefaultPreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Update Brand Default Preference",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "unique identifier of the brand you want to update default preferences for",
        "example": "BRAND_ID"
      },
      {
        "name": "categorySlug",
        "schema": "string",
        "required": true,
        "description": "notification category slug. You can get this from Notification Categories page on SuprSend dashboard -> Settings page",
        "example": "CATEGORY_SLUG"
      },
      {
        "name": "preference",
        "schema": "string",
        "description": "",
        "default": "opt_in"
      },
      {
        "name": "visible_to_subscriber",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "mandatory_channels",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/brand/{brand_id}/category",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brand",
    "typeScriptTag": "brand",
    "description": "Get Brand Default Preference",
    "parameters": [
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "unique identifier of the brand you want to get default preferences for",
        "example": "BRAND_ID"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list",
    "method": "getAllLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SubscriberList",
    "typeScriptTag": "subscriberList",
    "description": "Get all Lists",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "number of results to be returned in API response",
        "default": "20"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "starting position of brand list",
        "default": "0"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SubscriberList",
    "typeScriptTag": "subscriberList",
    "description": "Create a List",
    "parameters": [
      {
        "name": "list_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIST_ID",
        "default": "_list_id_"
      },
      {
        "name": "list_name",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "_list_name_"
      },
      {
        "name": "list_description",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "_some sample description_"
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
      }
    ]
  },
  {
    "url": "/v1/subscriber_list/{list_id}",
    "method": "getListData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SubscriberList",
    "typeScriptTag": "subscriberList",
    "description": "Get List data",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "Unique string idenitifier of the list.",
        "example": "LIST_ID",
        "default": "_list_id_"
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SuprSend API"
      apiBaseUrl="https://hub.suprsend.com"
      apiVersion="1.2.1"
      endpoints={24}
      sdkMethods={27}
      schemas={64}
      parameters={90}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/suprsend/openapi.yaml"
      developerDocumentation="docs.suprsend.com/reference/overview"
    />
  );
}
  