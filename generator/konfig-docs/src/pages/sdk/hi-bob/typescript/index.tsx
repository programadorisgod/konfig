import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HiBobTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hi-bob-typescript-sdk"
      metaDescription={`HiBob is on a mission to transform how organizations operate in the modern world of work with its HR platform, "Bob." Leading the way for the future workplace, Bob offers resilient, agile technology that wraps all the complexities of HR processes into a game-changing, user-friendly tool that touches every employee across the business.

Since late 2015, trusted and empowered "Bobbers" from around the world have brought their authentic selves to work, inspired to build our exceptional HR systems that will revolutionize the work experience for HR professionals, managers, and employees alike. Agile and adaptable, HiBob innovates through continuous learning loops to produce seismic cultural shifts for companies with dynamic, distributed workforces. Organizations using Bob are able to accelerate hiring, retain the best talent, and elevate employee engagement.`}
      company="HiBob"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/logo.png"
      companyKebabCase="hi-bob"
      clientNameCamelCase="hiBob"
      homepage="hibob.com"
      lastUpdated={new Date("2024-03-26T06:56:00.998Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","human_resources","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","hr_management_system","hr_softwares","hr_management","hr_platform","personnel_management","hris","software","hr_tech","recruitment_software_business_process_outsourcing"]}
      methods={[
  {
    "url": "/people/search",
    "method": "searchEmployees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Search for employees",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "",
        "example": [
          "root.id",
          "root.firstName",
          "root.surname",
          "root.email",
          "work.site",
          "work.department"
        ]
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showInactive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "humanReadable",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people",
    "method": "listEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read all company employees",
    "parameters": [
      {
        "name": "showInactive",
        "schema": "boolean",
        "description": "Should include inactive employees."
      },
      {
        "name": "humanReadable",
        "schema": "boolean",
        "description": "Whether to supply humanReadable values in JSON instead of machine-readable format (default).",
        "default": false
      },
      {
        "name": "includeHumanReadable",
        "schema": "boolean",
        "description": "Whether to include the additional \"humanReadable\" JSON node in the response.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people",
    "method": "createEmployeeRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Create company employee.",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "surname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SURNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "work",
        "schema": "object",
        "required": false,
        "description": ""
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
    "url": "/people/{identifier}",
    "method": "readEmployeeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read company employee by ID.",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "IDENTIFIER"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": true,
        "description": "Whether to supply fields (paths) instead of empty list as a default in order  to not exceed data permitted."
      },
      {
        "name": "humanReadable",
        "schema": "boolean",
        "description": "Whether to supply humanReadable values in JSON instead of machine-readable (default) format.",
        "default": false
      },
      {
        "name": "includeHumanReadable",
        "schema": "boolean",
        "description": "Whether to include the additional \"humanReadable\" JSON node in the response.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{identifier}",
    "method": "readEmployeeFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read company employee fields by employee ID.",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "employee ID or email",
        "example": "IDENTIFIER"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "",
        "example": [
          "root.id",
          "root.firstName",
          "root.surname",
          "root.email",
          "work.site",
          "work.department"
        ]
      },
      {
        "name": "humanReadable",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{identifier}",
    "method": "updateEmployeeRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Update company employee.",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "IDENTIFIER"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Bob"
      },
      {
        "name": "personal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "about",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/employees/{identifier}/uninvite",
    "method": "revokeAccessToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Revoke access to Bob for an employee.",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{identifier}/terminate",
    "method": "terminateEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Terminate company employee.",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "IDENTIFIER"
      },
      {
        "name": "terminationDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TERMINATIONDATE"
      },
      {
        "name": "terminationReason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reasonType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "noticePeriod",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lastDayOfWork",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/onboarding/wizards",
    "method": "getWizardSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Get a summary of all onboarding wizards.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{employeeId}/invitations",
    "method": "inviteEmployeeWizard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Invite an employee with a welcome wizard ID.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "welcomeWizardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/employees/{employeeId}/start-date",
    "method": "setStartDate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Set or update an employee's start date.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employee ID",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/reports",
    "method": "listAccessibleReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Read company reports",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/reports/{reportId}/download",
    "method": "downloadById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Download the report by ID",
    "parameters": [
      {
        "name": "reportId",
        "schema": "number",
        "required": true,
        "description": "Report ID",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "File format",
        "example": "FORMAT"
      },
      {
        "name": "includeInfo",
        "schema": "boolean",
        "description": "Should include info."
      },
      {
        "name": "locale",
        "schema": "string",
        "description": "Requested language for the report columns in the format of locale (e.g. fr-FR). If this is not provided, the user preferences locale is used."
      },
      {
        "name": "humanReadable",
        "schema": "string",
        "required": false,
        "description": "Optional field. Only enforced when <i><b>format</b></i> is <i>json</i>. <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \"humanReadable\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/reports/{reportId}/download-async",
    "method": "getDownloadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get the report download URL for polling",
    "parameters": [
      {
        "name": "reportId",
        "schema": "number",
        "required": true,
        "description": "Report id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "File format",
        "example": "FORMAT"
      },
      {
        "name": "includeInfo",
        "schema": "boolean",
        "description": "Should include info"
      },
      {
        "name": "locale",
        "schema": "string",
        "description": "Requested language for the report columns in the format of the locale (e.g. fr-FR). If this is not provided, the user preferences locale is used."
      },
      {
        "name": "humanReadable",
        "schema": "string",
        "required": false,
        "description": "Optional field. Only enforced when <i><b>format</b></i> is <i>json</i>. <br> <b>If not sent:</b> supply machine-readable values only. <br> <br> Possible values: <br>  <br> <b>APPEND</b> - include the additional \"humanReadable\" JSON node in the response. <br>  <br> <b>REPLACE</b> - supply humanReadable values in JSON instead of machine-readable format. <br>"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/reports/download/{reportName}",
    "method": "downloadReportFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Download report by file URL",
    "parameters": [
      {
        "name": "reportName",
        "schema": "string",
        "required": true,
        "description": "Report name",
        "example": "REPORTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles",
    "method": "listActiveEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read the public profile section of all active employees.",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Optional field name to sort by. This defaults to firstName."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/avatars",
    "method": "getEmailAvatar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read avatar for an employee email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "Employee email."
      }
    ],
    "responses": []
  },
  {
    "url": "/avatars/{employeeId}",
    "method": "getAvatarUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read avatar for an employee ID.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": []
  },
  {
    "url": "/avatars/{employeeId}",
    "method": "uploadEmployeeAvatarUrl",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Upload employee's avatar by image url",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": []
  },
  {
    "url": "/my/avatar",
    "method": "getAvatarUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Read avatar for logged-in user",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/tasks",
    "method": "getOpenTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Read all open tasks.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/my/tasks",
    "method": "getEmployeeTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Read my tasks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/people/{id}",
    "method": "readEmployeeTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Read tasks of a specific employee ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
      },
      {
        "name": "taskStatus",
        "schema": "string",
        "description": "filter tasks by open / closed status. Not sending task_status will return all tasks."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{taskId}/complete",
    "method": "completeTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Mark a task as complete",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "task id",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{id}/email",
    "method": "updateEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Update an employee's email address.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/company/named-lists",
    "method": "getCompanyNamedLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get all company lists",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "Whether to include archived items in the response.",
        "default": false
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
    "url": "/company/named-lists/{listName}",
    "method": "getNamedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get a specific company list by name.",
    "parameters": [
      {
        "name": "listName",
        "schema": "string",
        "required": true,
        "description": "The internal name of the list.",
        "example": "LISTNAME"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "Whether to include archived items in the response.",
        "default": false
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
    "url": "/company/named-lists/{listName}",
    "method": "addNewItemToNamedList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Add a new item to an existing list.",
    "parameters": [
      {
        "name": "listName",
        "schema": "string",
        "required": true,
        "description": "The internal name of the list.",
        "example": "LISTNAME"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": ""
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
    "url": "/company/named-lists/{listName}/{itemId}",
    "method": "deleteItemFromCompanyNamedList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Delete an item from an existing list.",
    "parameters": [
      {
        "name": "listName",
        "schema": "string",
        "required": true,
        "description": "The internal name of the list.",
        "example": "LISTNAME"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the list item.",
        "example": "ITEMID"
      }
    ],
    "responses": []
  },
  {
    "url": "/company/named-lists/{listName}/{itemId}",
    "method": "updateItemFromNamedList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Update an existing item from a list.",
    "parameters": [
      {
        "name": "listName",
        "schema": "string",
        "required": true,
        "description": "The internal name of the list.",
        "example": "LISTNAME"
      },
      {
        "name": "itemId",
        "schema": "string",
        "required": true,
        "description": "The ID of the list item.",
        "example": "ITEMID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/company/people/fields",
    "method": "getCompanyFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get all company fields.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/company/people/fields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Create a new field.",
    "parameters": [
      {
        "name": "description",
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
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "historical",
        "schema": "string",
        "required": false,
        "description": ""
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
    "url": "/company/people/fields/{fieldId}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Delete an existing field.",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the field.",
        "example": "FIELDID"
      }
    ],
    "responses": []
  },
  {
    "url": "/company/people/fields/{fieldId}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Update an existing field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the field.",
        "example": "FIELDID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/timeoff/employees/{id}/requests",
    "method": "submitNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Submit a new time off request.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYTYPE"
      },
      {
        "name": "requestRangeType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "days"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "startDatePortion",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "all_day"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "endDatePortion",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "all_day"
      },
      {
        "name": "dayPortion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dailyHours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dailyMinutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "skipManagerApproval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "approver",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reasonCode",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/timeoff/employees/{id}/diffHours/requests",
    "method": "submitNewRequestDiffHours",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Submit a new time off request of different hours per day.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Vacation"
      },
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Holiday"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2024-01-03"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2024-01-05"
      },
      {
        "name": "durations",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "date": "2024-01-03",
            "hours": 0,
            "minutes": 15
          },
          {
            "date": "2024-01-04",
            "hours": 0,
            "minutes": 0
          },
          {
            "date": "2024-01-05",
            "hours": 2,
            "minutes": 45
          }
        ]
      },
      {
        "name": "skipManagerApproval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "approver",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3452152476387906847"
      },
      {
        "name": "reasonCode",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3000
      }
    ],
    "responses": []
  },
  {
    "url": "/timeoff/employees/{id}/requests/{requestId}",
    "method": "cancelRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Cancel an existing timeoff request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "requestId",
        "schema": "integer",
        "required": true,
        "description": "Request ID.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/timeoff/employees/{id}/requests/{requestId}",
    "method": "getDetailsOfRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get the details of an existing timeoff request.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
      },
      {
        "name": "requestId",
        "schema": "integer",
        "required": true,
        "description": "request id",
        "example": 0
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
    "url": "/timeoff/requests/changes",
    "method": "getNewDeletedRequestsSinceDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get all new/deleted time off requests since the specified date.",
    "parameters": [
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "Timestamp starting from which to return the changes. Should be in ISO-8601 format, e.g. 2050-04-05T14:30:24.345Z or 2050-04-05T12:30-02:00.",
        "example": "SINCE"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "Optional parameter. Indicates whether to include pending requests in the results.",
        "default": false
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
    "url": "/timeoff/whosout",
    "method": "getWhosOut",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Read a list of who's out of the office.",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start period date",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End period date",
        "example": "TO"
      },
      {
        "name": "includeHourly",
        "schema": "boolean",
        "description": "Include Hourly Requests",
        "default": false
      },
      {
        "name": "includePrivate",
        "schema": "boolean",
        "description": "Show the policy type's name instead of the policy's custom public name if the user has permission to view it, and the policy's custom public name exists.",
        "default": false
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "description": "Include Pending Requests",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/timeoff/outtoday",
    "method": "getOutOfOffice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Read a list of who's out of the office today or on the specified date.",
    "parameters": [
      {
        "name": "today",
        "schema": "string",
        "description": "Date to report out of the office. If not specified, the date at UTC at the time of the request is used."
      },
      {
        "name": "includeHourly",
        "schema": "boolean",
        "description": "Include Hourly Requests",
        "default": false
      },
      {
        "name": "includePrivate",
        "schema": "boolean",
        "description": "Show the policy type's name instead of the policy's custom public name if the user has permission to view it, and the policy's custom public name exists.",
        "default": false
      },
      {
        "name": "siteId",
        "schema": "integer",
        "description": "The employee's site ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/timeoff/policy-types/{policyType}/reason-codes",
    "method": "listReasonCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get Policy type reason codes",
    "parameters": [
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "Policy Type name.",
        "example": "POLICYTYPE"
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
    "url": "/timeoff/policy-types/{policyType}/reason-codes",
    "method": "addReasonCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Add a list of reason codes for a given policy type.",
    "parameters": [
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "Policy Type name",
        "example": "POLICYTYPE"
      },
      {
        "name": "reasonCodes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/timeoff/policy-types/{policyType}",
    "method": "getPolicyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get Policy type details",
    "parameters": [
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "Policy Type name",
        "example": "POLICYTYPE"
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
    "url": "/timeoff/policy-types",
    "method": "listPolicyTypesNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get all policy types names.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/timeoff/policies",
    "method": "getPolicyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get Policy details.",
    "parameters": [
      {
        "name": "policyName",
        "schema": "string",
        "required": true,
        "description": "Policy name.",
        "example": "POLICYNAME"
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
    "url": "/timeoff/policies/names",
    "method": "listPolicyTypeNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get a list of policy names for a given policy type.",
    "parameters": [
      {
        "name": "policyTypeName",
        "schema": "string",
        "required": true,
        "description": "Policy type name.",
        "example": "POLICYTYPENAME"
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
    "url": "/timeoff/employees/{id}/balance",
    "method": "getEmployeeBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Get the balance for a given employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "policyType",
        "schema": "string",
        "required": true,
        "description": "Policy type name.",
        "example": "POLICYTYPE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Point in time.",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/timeoff/employees/{id}/adjustments",
    "method": "createBalanceAdjustment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "Create a balance adjustment.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "adjustmentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "policyType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/attendance/import/{importMethod}",
    "method": "importData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "Import attendance data",
    "parameters": [
      {
        "name": "importMethod",
        "schema": "string",
        "required": true,
        "description": "Indicates if the provided data should be processed via an aggregation engine or immediately. <ul>Aggregate - will add the logs to a temporary location, and an aggregation job will process the data asynchronously.</ul><ul>Immediate - will insert the records as-is.</ul>",
        "example": "IMPORTMETHOD"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDTYPE"
      },
      {
        "name": "requests",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "dateTimeFormat",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "yyyy-MM-dd hh:mm a"
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
    "url": "/payroll/history",
    "method": "readHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Read payroll history.",
    "parameters": [
      {
        "name": "department",
        "schema": "string",
        "description": "filter payroll for specific department."
      },
      {
        "name": "showInactive",
        "schema": "boolean",
        "description": "Whether to include inactive employees in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/shared",
    "method": "uploadToSharedFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload a document to the employee's shared folder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/confidential",
    "method": "uploadToConfidentialFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload a document to the employee's confidential folder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/shared/upload",
    "method": "uploadToSharedFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload a file to the employee's shared folder.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/confidential/upload",
    "method": "uploadConfidentialFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload a file to the employee's confidential folder.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/shared/{docId}",
    "method": "removeEmployeeSharedDocument",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete specific document from the employee's shared folder.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "docId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}/confidential/{docId}",
    "method": "deleteEmployeeConfidentialDoc",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete a specific document from the employee's confidential folder.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "docId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs/people/{id}",
    "method": "downloadLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Download employee's documents",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/{id}/work",
    "method": "getWorkHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List employee's work history",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/work",
    "method": "createWorkEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new work entry for a given employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/work/{entry_id}",
    "method": "deleteWorkEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes a work entry from a given employee's work history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to delete",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/work/{entry_id}",
    "method": "updateWorkEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Updates a work entry from employee's work history",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to update.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/employment",
    "method": "getEmploymentHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List employee's employment history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
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
    "url": "/people/{id}/employment",
    "method": "createEmploymentEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new employment entry for a given employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "employee id",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/employment/{entry_id}",
    "method": "deleteEmploymentEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes an employment entry from a given employee's employment history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to delete.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/employment/{entry_id}",
    "method": "updateEmploymentEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Updates an employment entry from a given employee's employment history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to update.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/lifecycle",
    "method": "listEmployeeLifecycle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List employee's life-cycle status history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/salaries",
    "method": "getSalaryHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List employee's salary history.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/salaries",
    "method": "createNewSalaryEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new salary entry for a given employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/salaries/{entry_id}",
    "method": "deleteSalaryEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes a salary entry from the employee's list.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to delete.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/equities",
    "method": "listEquityGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List the employee's equity grants.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/equities",
    "method": "createEquityGrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new equity grant for a given employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/equities/{entry_id}",
    "method": "deleteEquityGrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes an equity grant for an employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The Entry ID to delete.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/equities/{entry_id}",
    "method": "updateEquityGrantForEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Updates an equity grant for an employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The entry ID to update.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/variable",
    "method": "listVariablePayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List employee's variable payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/variable",
    "method": "createVariablePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new variable payment for a given employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/variable/{entry_id}",
    "method": "deleteTrainingRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes a training record for an employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The Entry ID to delete.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/training",
    "method": "listTrainingRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List the employee's training records.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
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
    "url": "/people/{id}/training",
    "method": "createTrainingRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Creates a new training records for a given employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/{id}/training/{entry_id}",
    "method": "deleteTrainingRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Deletes any training records for an employee.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      },
      {
        "name": "entryId",
        "schema": "integer",
        "required": true,
        "description": "The Entry ID to delete.",
        "example": 0
      }
    ],
    "responses": []
  },
  {
    "url": "/people/custom-tables/metadata",
    "method": "getCustomTableMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Read metadata of custom tables defined",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/people/custom-tables/metadata/{custom_table_id}",
    "method": "getTableDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Read metadata for specific custom table",
    "parameters": [
      {
        "name": "customTableId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table.",
        "example": "CUSTOM_TABLE_ID"
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
    "url": "/people/custom-tables/{employee_id}/{custom_table_id}",
    "method": "readEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Tables",
    "typeScriptTag": "customTables",
    "description": "Read all entries of the given custom table",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "customTableId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table.",
        "example": "CUSTOM_TABLE_ID"
      },
      {
        "name": "includeHumanReadable",
        "schema": "boolean",
        "description": "Whether to include the additional \"humanReadable\" JSON node in the response.",
        "default": false
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
    "url": "/people/custom-tables/{employee_id}/{custom_table_id}",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Tables",
    "typeScriptTag": "customTables",
    "description": "Create new custom table entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "customTableId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table.",
        "example": "CUSTOM_TABLE_ID"
      },
      {
        "name": "RAW_BODY",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}",
    "method": "deleteEntryById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Tables",
    "typeScriptTag": "customTables",
    "description": "Delete custom table entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "customTableId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table.",
        "example": "CUSTOM_TABLE_ID"
      },
      {
        "name": "entryId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table entry.",
        "example": "ENTRY_ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/people/custom-tables/{employee_id}/{custom_table_id}/{entry_id}",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Tables",
    "typeScriptTag": "customTables",
    "description": "Update custom table entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "customTableId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table.",
        "example": "CUSTOM_TABLE_ID"
      },
      {
        "name": "entryId",
        "schema": "string",
        "required": true,
        "description": "The ID of custom table entry.",
        "example": "ENTRY_ID"
      },
      {
        "name": "RAW_BODY",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/metadata/objects/position",
    "method": "getPositionFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get all positions fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/objects/position/search",
    "method": "searchCompanyPositions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Read company positions",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "includeHumanReadable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Bob API"
      apiBaseUrl="https://api.hibob.com/v1"
      apiVersion="1.0.0"
      endpoints={67}
      sdkMethods={88}
      schemas={92}
      parameters={199}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hibob/openapi.yaml"
      developerDocumentation="apidocs.hibob.com/reference/getting-started-1"
    />
  );
}
  