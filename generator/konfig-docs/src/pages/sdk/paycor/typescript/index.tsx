import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PaycorTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="paycor-typescript-sdk"
      metaDescription={`Paycor is a leading provider of comprehensive HR and payroll solutions for businesses of all sizes. With a focus on simplifying HR processes and improving employee management, Paycor offers a range of services including payroll processing, time and attendance tracking, benefits administration, and HR compliance tools. Trusted by thousands of organizations, Paycor helps streamline HR operations and empower companies to focus on their business growth.`}
      company="Paycor"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/logo.png"
      companyKebabCase="paycor"
      clientNameCamelCase="paycor"
      homepage="paycor.com"
      lastUpdated={new Date("2024-03-27T04:31:00.655Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","workforce_planning","talent_acquisition_analytics","benefits","benefits_administration","time_attendance","people","strategic_hr","time","attendance_solutions","tax_filing","compliance","onboarding"]}
      methods={[
  {
    "url": "/v1/legalEntities/{legalEntityId}/ats/{atsAccountId}/jobs",
    "method": "getAccountJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking System",
    "typeScriptTag": "applicantTrackingSystem",
    "description": "Get a list of ATS Account jobs for ATS Account Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "Paycor Legal Entity ID of the legal entity for which you want to get the ATS account jobs",
        "example": 0
      },
      {
        "name": "atsAccountId",
        "schema": "string",
        "required": true,
        "description": "ATS account ID of for which you want to get the ATS account jobs",
        "example": "ATSACCOUNTID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Hiring managers, Recruiters, Team members, Executives"
      },
      {
        "name": "postedToCareers",
        "schema": "boolean",
        "description": "Option to filter jobs based on if they are posted to the careers page"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Option to filter jobs by status"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalEntities/{legalEntityId}/ats/{atsAccountId}/jobs/{atsJobId}",
    "method": "getJobByJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking System",
    "typeScriptTag": "applicantTrackingSystem",
    "description": "Get an ATS Account Job for ATS Account Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "Paycor Legal Entity ID of the legal entity for which you want to get the ATS account job",
        "example": 0
      },
      {
        "name": "atsAccountId",
        "schema": "string",
        "required": true,
        "description": "ATS account ID of for which you want to get the ATS account job",
        "example": "ATSACCOUNTID"
      },
      {
        "name": "atsJobId",
        "schema": "string",
        "required": true,
        "description": "ATS Job ID",
        "example": "ATSJOBID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Hiring managers, Recruiters, Team members, Executives"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the Job."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalEntities/{legalEntityId}/ats/accounts",
    "method": "listAtsAccountsByLegalEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking System",
    "typeScriptTag": "applicantTrackingSystem",
    "description": "Get a list of ATS Accounts for Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "Paycor Legal Entity ID of the legal entity for which you want to get the ATS accounts",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about the ATS Account"
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/emergencycontact",
    "method": "createUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Emergency Contact",
    "typeScriptTag": "employeeEmergencyContact",
    "description": "Either Home Phone, Work Phone or Mobile Phone must be specified\n\nData Access: Create Emergency Contact",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Charles"
      },
      {
        "name": "MiddleName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lutwidge"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Dodgson"
      },
      {
        "name": "Relationship",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "HomePhone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "WorkPhone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "WorkPhoneExtension",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 123
      },
      {
        "name": "MobilePhone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "EmailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "abc@paycor.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/certifications",
    "method": "listByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Certifications",
    "typeScriptTag": "employeeCertifications",
    "description": "Get a list of Employee Certifications for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for which you want to get the certifications",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/certifications",
    "method": "addNewCertification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Certifications",
    "typeScriptTag": "employeeCertifications",
    "description": "Add Employee Certification",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add the certification",
        "example": "EMPLOYEEID"
      },
      {
        "name": "EffectiveDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-09"
      },
      {
        "name": "ExpirationDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-19"
      },
      {
        "name": "CertificationName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "First Aid certificate"
      },
      {
        "name": "CertificationNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "436576"
      },
      {
        "name": "CertificationOrganizationName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Red Cross"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "note: expires soon"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/certifications",
    "method": "updateCertification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Certifications",
    "typeScriptTag": "employeeCertifications",
    "description": "Update Employee Certification",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for which you want to update the certifications",
        "example": "EMPLOYEEID"
      },
      {
        "name": "CertificationNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "436576"
      },
      {
        "name": "EmployeeCertificationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FDB487C7-E853-4097-8697-B705AC3C7ABF"
      },
      {
        "name": "EffectiveDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-09"
      },
      {
        "name": "ExpirationDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-03-19"
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "note: expires soon"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/customfields",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Custom Fields",
    "typeScriptTag": "employeeCustomFields",
    "description": "Get Employee Custom Fields by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for whom you want to get the custom fields",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employee custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/customfields",
    "method": "updateByEmployeeId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Custom Fields",
    "typeScriptTag": "employeeCustomFields",
    "description": "Update Custom Field by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to update the custom field",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/deductions/{employeeDeductionId}",
    "method": "getByEmployeeIdAndDeductionId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Deductions",
    "typeScriptTag": "employeeDeductions",
    "description": "Get Employee Deduction by EmployeeID and EmployeeDeductionID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the deduction.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "employeeDeductionId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee Deduction you want to get.",
        "example": "EMPLOYEEDEDUCTIONID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, AmountData\n\nData Access required\n\nAmountData = View Employee Deduction Amounts"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Employee Deduction model represents Employee level Deduction information.\nProvides link to associated Employee information."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/deductions",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Deductions",
    "typeScriptTag": "employeeDeductions",
    "description": "Get Employee Deductions by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for whom you want to get the deductions",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, AmountData\n\nData Access required\n\nAmountData = View Employee Deductions Amounts"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employee earnings"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/deductions",
    "method": "addDeductionToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Deductions",
    "typeScriptTag": "employeeDeductions",
    "description": "Add Deduction to Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add the deduction",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pension"
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IncludeInPay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountData",
        "schema": "array",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/deductions",
    "method": "updateByEmployeeId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Deductions",
    "typeScriptTag": "employeeDeductions",
    "description": "Update Employee Deduction by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee that has the Deduction you wish to update",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "IncludeInPay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "AmountData",
        "schema": "array",
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
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/HSAaccounts",
    "method": "getByEmployeeIdHsa",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Get Employee HSA Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for whom you want to get HSA Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of HSA Direct Deposits"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/HSAaccounts",
    "method": "addByEmployeeIdHsa",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Add Employee HSA Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to add HSA Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "AccountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "RoutingNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 322271627
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "DeductionCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pension"
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 22.22
      },
      {
        "name": "Rate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.84
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/HSAaccounts",
    "method": "updateHsaDirectDepositsByEmployeeId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Update Employee HSA Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to update HSA Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5e699a0d-0000-0000-0000-0007d54d9839"
      },
      {
        "name": "AccountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "RoutingNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 322271627
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 22.22
      },
      {
        "name": "Rate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.84
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/DirectDeposits",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Get Employee Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to get Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of direct deposits"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/DirectDeposits",
    "method": "addByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Add Employee Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of employee for which you want to add Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "AccountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "RoutingNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 322271627
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "DeductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DirectDepositType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 22.22
      },
      {
        "name": "Rate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.84
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/DirectDeposits",
    "method": "updateByEmployeeIdDdd",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Update Employee Direct Deposits by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to update Direct Deposit",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5e699a0d-0000-0000-0000-0007d54d9839"
      },
      {
        "name": "AccountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "RoutingNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 322271627
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "DirectDepositType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 22.22
      },
      {
        "name": "Rate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.84
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/DirectDeposits/{directDepositId}",
    "method": "getByEmployeeAndDepositId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Direct Deposits",
    "typeScriptTag": "employeeDirectDeposits",
    "description": "Get Employee Direct Deposit by EmployeeID and DirectDepositID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to get Direct Deposits",
        "example": "EMPLOYEEID"
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "required": true,
        "description": "ID of an employee direct deposit which you want to retrieve",
        "example": "DIRECTDEPOSITID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Employee Direct Deposit model represents an Employee's Direct Deposit information."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/paystubDocumentData",
    "method": "getPayStubDocumentByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Documents",
    "typeScriptTag": "employeeDocuments",
    "description": "Get Employee Pay Stubs document link by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Pay Stubs Document Link",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Date that is earlier or equal to paycheck date",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Date that is after or equal to paycheck date",
        "example": "ENDDATE"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Pay Stubs Document Links"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/PayStubDocument/{documentId}",
    "method": "downloadPayStub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Documents",
    "typeScriptTag": "employeeDocuments",
    "description": "Download Employee Pay Stub Document",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of an Employee for whom you want to get the Pay Stub Document",
        "example": "EMPLOYEEID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Id of Pay Stub Document",
        "example": "DOCUMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/earnings/{employeeEarningId}",
    "method": "getByEmployeeAndEarning",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Earnings",
    "typeScriptTag": "employeeEarnings",
    "description": "Get Employee Earning by EmployeeID and EmployeeEarningID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Earning",
        "example": "EMPLOYEEID"
      },
      {
        "name": "employeeEarningId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee Earning you want to get",
        "example": "EMPLOYEEEARNINGID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, AmountData\n\nData Access required\n\nAmountData = View Employee Earning Amounts"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A record of one specific earning that one particular employee has setup, including employee-specific details such as amount. Must be tied to an earning at the LegalEntity level."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/earnings",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Earnings",
    "typeScriptTag": "employeeEarnings",
    "description": "Get Employee Earnings by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Earnings",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, AmountData\n\nData Access required\n\nAmountData = View Employee Earnings Amounts"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Earnings"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/earnings",
    "method": "addNewEarning",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Earnings",
    "typeScriptTag": "employeeEarnings",
    "description": "Add Earning to Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add an Earning",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BonusDis"
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SequenceNumber",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "IncludeInPay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "AmountData",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/earnings",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Earnings",
    "typeScriptTag": "employeeEarnings",
    "description": "Update Employee Earning",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee that has the Earning you wish to update",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BonusDis"
      },
      {
        "name": "Frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "SequenceNumber",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "IncludeInPay",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCLUDEINPAY"
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "AmountData",
        "schema": "array",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/payrollhours",
    "method": "addHoursAndEarningsToPaygrid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Payroll Hours",
    "typeScriptTag": "employeePayrollHours",
    "description": "Add Employee Hours And Earnings To Paygrid",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to set employee hours and earnings",
        "example": 0
      },
      {
        "name": "replaceData",
        "schema": "boolean",
        "description": "If \"True\" is passed for this query parameter and a matching ProcessID is passed, then the system will fully replace the entire record that was previously added."
      },
      {
        "name": "appendData",
        "schema": "boolean",
        "description": "If \"True\" is passed for this query parameter, then the system will NOT replace any record that was previously added."
      },
      {
        "name": "IntegrationVendor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONVENDOR"
      },
      {
        "name": "ProcessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "b962666d-8c1e-46db-a750-53edfe25d47e"
      },
      {
        "name": "ImportEmployees",
        "schema": "array",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/payrollhours",
    "method": "importToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Payroll Hours",
    "typeScriptTag": "employeePayrollHours",
    "description": "Import Payroll Hours to Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add the payroll hours",
        "example": "EMPLOYEEID"
      },
      {
        "name": "AppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "763a5661-b518-0000-0000-000014e00100"
      },
      {
        "name": "IntegrationVendor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONVENDOR"
      },
      {
        "name": "ProcessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "b962666d-8c1e-46db-a750-53edfe25d47e"
      },
      {
        "name": "LegalEntityId",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100289
      },
      {
        "name": "EmployeeNumber",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 33420
      },
      {
        "name": "DepartmentCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 334
      },
      {
        "name": "JobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TimeCardData",
        "schema": "array",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/I9Verification",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee I9 Verification",
    "typeScriptTag": "employeeI9Verification",
    "description": "Get Employee I9 Verification by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for whom you want to get the I9 information",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: documents"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/I9Verification",
    "method": "updateByEmployeeIdI9Verification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee I9 Verification",
    "typeScriptTag": "employeeI9Verification",
    "description": "Update I9 Verification by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to update the I9 Verification",
        "example": "EMPLOYEEID"
      },
      {
        "name": "CitizenOfCountry",
        "schema": "string",
        "description": "",
        "example": "USA"
      },
      {
        "name": "WorkEligibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkVisaType",
        "schema": "string",
        "description": "",
        "example": "H1B"
      },
      {
        "name": "WorkVisaExpirationDate",
        "schema": "string",
        "description": "",
        "example": "10/25/2023"
      },
      {
        "name": "AlienAdmissionNumber",
        "schema": "string",
        "description": "",
        "example": 12365478961
      },
      {
        "name": "AlienAdmissionExpirationDate",
        "schema": "string",
        "description": "",
        "example": "05/25/2023"
      },
      {
        "name": "ListA",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ListB",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ListC",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ForeignPassportNumber",
        "schema": "string",
        "description": "",
        "example": "N4123456"
      },
      {
        "name": "CountryOfIssuance",
        "schema": "string",
        "description": "",
        "example": "AU"
      },
      {
        "name": "AdditionalInformation",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/payrates",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Rates",
    "typeScriptTag": "employeePayRates",
    "description": "Get Employee Payrates by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to get payrates",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of payrates"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/payrates",
    "method": "addNewRate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Pay Rates",
    "typeScriptTag": "employeePayRates",
    "description": "Add Payrate to Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee you wish to create the payrate for",
        "example": "EMPLOYEEID"
      },
      {
        "name": "EffectiveStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-11-22T00:00:00Z"
      },
      {
        "name": "EffectiveEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-01T12:15:00Z"
      },
      {
        "name": "SequenceNumber",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "PayRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 25.52
      },
      {
        "name": "AnnualPayRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 53081.6
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Rate 1"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Merit Increase."
      },
      {
        "name": "Notes",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/payrates/{payrateId}",
    "method": "updateByEmployeeIdAndPayrateId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Pay Rates",
    "typeScriptTag": "employeePayRates",
    "description": "Update Employee Payrate by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee that has the Payrate you wish to update",
        "example": "EMPLOYEEID"
      },
      {
        "name": "payrateId",
        "schema": "string",
        "required": true,
        "description": "ID of the Payrate you wish to update",
        "example": "PAYRATEID"
      },
      {
        "name": "EffectiveStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-11-22T00:00:00Z"
      },
      {
        "name": "SequenceNumber",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "PayRate",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 25.52
      },
      {
        "name": "AnnualPayRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 53081.6
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Rate 1"
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Reason",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Merit Increase."
      },
      {
        "name": "Notes",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/payschedule",
    "method": "getUpcomingCheckDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Schedule",
    "typeScriptTag": "employeePaySchedule",
    "description": "Get Employee Pay Schedule by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee for which you want to get the Pay Schedule",
        "example": "EMPLOYEEID"
      },
      {
        "name": "periodStartDate",
        "schema": "string",
        "description": "Exact Period Start Date of Pay Schedule, to lookup specific payrun. "
      },
      {
        "name": "periodEndDate",
        "schema": "string",
        "description": "Exact Period End Date of Pay Schedule, if you wish to filter - defaults to showing upcoming (future) runs"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Pay Schedule"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: Additional Runs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/paystubs",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Stubs",
    "typeScriptTag": "employeePayStubs",
    "description": "Get Employee Pay Stubs by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Pay Stubs",
        "example": "EMPLOYEEID"
      },
      {
        "name": "checkDate",
        "schema": "string",
        "description": "Check Date of Pay Stubs - required (unless processDate supplied)"
      },
      {
        "name": "processDate",
        "schema": "string",
        "description": "Process Date of Pay Stubs - required (unless checkDate supplied)"
      },
      {
        "name": "plannerId",
        "schema": "string",
        "description": "ID of the Planner for which you want to get the Pay Stubs."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, GrossAmount, NetAmount, Earnings, Taxes, Deductions\n\nData Access required\n\nGrossAmount = View Paystub Gross Pay Information\n\nNetAmount = View Paystub Net Pay Information\n\nEarnings = View Paystub Earning Information\n\nTaxes = View Paystub Tax Information\n\nDeductions = View Paystub Deduction Information"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Pay Stubs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/paystubs",
    "method": "getByLegalEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Stubs",
    "typeScriptTag": "employeePayStubs",
    "description": "Get Employee Pay Stubs by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of a Legal entity for which you want to get the Pay Stubs",
        "example": 0
      },
      {
        "name": "checkDate",
        "schema": "string",
        "description": "Check Date of Pay Stubs - required (unless processDate supplied)"
      },
      {
        "name": "processDate",
        "schema": "string",
        "description": "Process Date of Pay Stubs - required (unless checkDate supplied)"
      },
      {
        "name": "plannerId",
        "schema": "string",
        "description": "ID of the Planner for which you want to get the Pay Stubs."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, GrossAmount, NetAmount, Earnings, Taxes, Deductions\n\nData Access required\n\nGrossAmount = View Paystub Gross Pay Information\n\nNetAmount = View Paystub Net Pay Information\n\nEarnings = View Paystub Earning Information\n\nTaxes = View Paystub Tax Information\n\nDeductions = View Paystub Deduction Information"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Pay Stubs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/paystubsytd",
    "method": "getYtdByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Stubs",
    "typeScriptTag": "employeePayStubs",
    "description": "Get Employee Pay Stubs YTD by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Pay Stubs",
        "example": "EMPLOYEEID"
      },
      {
        "name": "toCheckDate",
        "schema": "string",
        "required": true,
        "description": "Check Date of latest Pay Stub for YTD data. ",
        "example": "TOCHECKDATE"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Earnings, Taxes, Deductions\n\nData Access required\n\nEarnings = View Paystub Earning Information YTD\n\nTaxes = View Paystub Tax Information YTD\n\nDeductions = View Paystub Deduction Information YTD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/paystubsytd",
    "method": "getYtdByLegalEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Pay Stubs",
    "typeScriptTag": "employeePayStubs",
    "description": "Get Employee Pay Stubs YTD by Legal entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of a Legal entity for which you want to get the Pay Stubs",
        "example": 0
      },
      {
        "name": "toCheckDate",
        "schema": "string",
        "required": true,
        "description": "Check Date of latest Pay Stub for YTD data. ",
        "example": "TOCHECKDATE"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Earnings, Taxes, Deductions\n\nData Access required\n\nEarnings = View Paystub Earning Information YTD By Legal Entity\n\nTaxes = View Paystub Tax Information YTD By Legal Entity\n\nDeductions = View Paystub Deduction Information YTD By Legal Entity"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/schedules",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee (Legacy / Perform Time) Schedules",
    "typeScriptTag": "employeeLegacyPerformTimeSchedules",
    "description": "Get Employee Schedules by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to get schedules",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/schedules",
    "method": "addToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee (Legacy / Perform Time) Schedules",
    "typeScriptTag": "employeeLegacyPerformTimeSchedules",
    "description": "Add Schedule to Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add a schedule",
        "example": "EMPLOYEEID"
      },
      {
        "name": "StartDateTime",
        "schema": "string",
        "description": "",
        "example": "2019-11-01T00:00:00Z"
      },
      {
        "name": "EndDateTime",
        "schema": "string",
        "description": "",
        "example": "2019-11-01T00:00:00Z"
      },
      {
        "name": "BeforeStartTimeInMinutes",
        "schema": "integer",
        "description": "",
        "example": 120
      },
      {
        "name": "AfterEndTimeInMinutes",
        "schema": "integer",
        "description": "",
        "example": 120
      },
      {
        "name": "Label",
        "schema": "string",
        "description": "",
        "example": "MorningShift"
      },
      {
        "name": "ShiftDepeartmentId",
        "schema": "string",
        "description": "",
        "example": "2f28bd9c-a39e-41f1-b40f-b44bf2e9c265"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalEntities/{legalEntityId}/schedules",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee (Legacy / Perform Time) Schedules",
    "typeScriptTag": "employeeLegacyPerformTimeSchedules",
    "description": "Get Employee Schedules by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of Legal Entity for which you want to get schedules",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/schedules/{scheduleId}",
    "method": "deleteLegacySchedule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee (Legacy / Perform Time) Schedules",
    "typeScriptTag": "employeeLegacyPerformTimeSchedules",
    "description": "Delete Employee Schedule",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID of the schedule record you want to delete",
        "example": "EMPLOYEEID"
      },
      {
        "name": "scheduleId",
        "schema": "string",
        "required": true,
        "description": "Schedule ID to delete",
        "example": "SCHEDULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get Employee by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee you want to get",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, EmploymentDates, Status, Position, WorkLocation\n            \nData Access required\n            \nEmploymentDates = View Employee Employment Dates\n            \nStatus = View Employee Status\n            \nPosition = View Employee Position\n            \nWorkLocation = View Employee Work Location"
      },
      {
        "name": "emailType",
        "schema": "string",
        "description": "Options to specify which emaill address to return. Work email type will be returned if none are specified: Home, Work"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Contact",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "HomeEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "PrimaryAddress",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}/employees",
    "method": "listByTenantId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get Employees By TenantID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the tenant for which you want to get employees",
        "example": 0
      },
      {
        "name": "statusFilter",
        "schema": "string",
        "description": "Option to filter by employment status"
      },
      {
        "name": "employeeNumber",
        "schema": "integer",
        "description": "Option to filter by Employee Number."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "Option to filter by Employee Last Name."
      },
      {
        "name": "departmentCode",
        "schema": "integer",
        "description": "Option to filter by Department Code."
      },
      {
        "name": "workLocationName",
        "schema": "string",
        "description": "Option to filter by Work Location Name."
      },
      {
        "name": "jobCode",
        "schema": "string",
        "description": "Option to filter by Job Code."
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employees"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/employees",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get Employees by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get employees",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, EmploymentDates, Status, Position, WorkLocation\n            \nData Access required\n            \nEmploymentDates = View Legal Entity Employees Employment Dates\n            \nStatus = View Legal Entity Employees Status\n            \nPosition = View Legal Entity Employees Position\n            \nWorkLocation = View Legal Entity Employees Work Location"
      },
      {
        "name": "emailType",
        "schema": "string",
        "description": "Options to specify which email address to return. Work email type will be returned if none are specified: Home, Work"
      },
      {
        "name": "statusFilter",
        "schema": "string",
        "description": "Option to filter by employment status."
      },
      {
        "name": "employeeNumber",
        "schema": "integer",
        "description": "Option to filter by Employee Number."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "Option to filter by Employee Last Name."
      },
      {
        "name": "departmentCode",
        "schema": "integer",
        "description": "Option to filter by Department Code."
      },
      {
        "name": "workLocationName",
        "schema": "string",
        "description": "Option to filter by Work Location Name."
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employees"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create Employee",
    "parameters": [
      {
        "name": "LegalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123666
      },
      {
        "name": "EmployeeNumber",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12345
      },
      {
        "name": "AlternateEmployeeNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1234567890
      },
      {
        "name": "Prefix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Charles"
      },
      {
        "name": "MiddleName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lutwidge"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Dodgson"
      },
      {
        "name": "Suffix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "HomeEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WorkEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Phones",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "SocialSecurityNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 555555555
      },
      {
        "name": "BirthDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1944-04-01T00:00:00Z"
      },
      {
        "name": "Gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Ethnicity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MaritalStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WorkLocation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "HireDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2000-11-01T00:00:00Z"
      },
      {
        "name": "ReHireDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-05-21T00:00:00Z"
      },
      {
        "name": "Status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "Flsa",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ManagerEmpId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "52a2s23-0000-0000-0000-0007d0009840"
      },
      {
        "name": "PaygroupDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYGROUPDESCRIPTION"
      },
      {
        "name": "DepartmentCode",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Veteran",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Disability",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PrimaryAddress",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/positionandstatus",
    "method": "updatePositionAndStatusData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Position and Status data",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "EmploymentStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENTSTATUS"
      },
      {
        "name": "RehireDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-05-21T00:00:00Z"
      },
      {
        "name": "EmploymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENTTYPE"
      },
      {
        "name": "WorkLocation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Cincinnati"
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "Flsa",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ManagerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "44480aa9-08d8-0000-0000-0000fd0d0300"
      },
      {
        "name": "DepartmentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3c88ef90-5e35-0000-0000-0000fb0d0300"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/position",
    "method": "updatePositionData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Position data",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "EmploymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENTTYPE"
      },
      {
        "name": "WorkLocation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Cincinnati"
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "Flsa",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ManagerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "44480aa9-08d8-0000-0000-0000fd0d0300"
      },
      {
        "name": "DepartmentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3c88ef90-5e35-0000-0000-0000fb0d0300"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/status",
    "method": "updateStatusData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Status data",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "EffectiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-11-01T00:00:00Z"
      },
      {
        "name": "EmployeeStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEESTATUS"
      },
      {
        "name": "EmployeeStatusReasonId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "aaeeef19-7b65-4ace-a244-ae1e43c6a634"
      },
      {
        "name": "EligibleForRehire",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IsVoluntaryByEmployee",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "Notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Employee absence from work"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/identifyingdata",
    "method": "updatePersonalData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Personal data",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Charles"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Peterson"
      },
      {
        "name": "MiddleName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hubble"
      },
      {
        "name": "Suffix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUFFIX"
      },
      {
        "name": "SocialSecurityNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 555555555
      },
      {
        "name": "BirthDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1944-04-01T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/employeesIdentifyingData",
    "method": "getIdentifyingData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "GET Identifying Employee Data by Legal Entity Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get employees",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to filter employees by employment status: Active, Inactive"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/Paygroup",
    "method": "updatePaygroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee Paygroup",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Id of the employee",
        "example": "EMPLOYEEID"
      },
      {
        "name": "payGroupId",
        "schema": "string",
        "description": "ID of the Paygroup for whom you want to get the Pay Schedule. Available via 'GET Legal Entity Pay Groups'"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/onboarding",
    "method": "addNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Onboarding",
    "typeScriptTag": "employeeOnboarding",
    "description": "Create Employee Onboarding",
    "parameters": [
      {
        "name": "LegalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 122900
      },
      {
        "name": "ExportedByEmailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "email@domain.com"
      },
      {
        "name": "FirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Edwin"
      },
      {
        "name": "LastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hubble"
      },
      {
        "name": "PreferredName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Carroll"
      },
      {
        "name": "CountryCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USA"
      },
      {
        "name": "Zip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 45212
      },
      {
        "name": "State",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "OH"
      },
      {
        "name": "City",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cincinnati"
      },
      {
        "name": "Address1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "4811 Montgomery Road"
      },
      {
        "name": "Address2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Building A"
      },
      {
        "name": "MobilePhone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "(123) 456–7890"
      },
      {
        "name": "HomePhone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "(123) 456–7890"
      },
      {
        "name": "HomeEmailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "homeEmail@domain.com"
      },
      {
        "name": "Gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Ethnicity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VeteranStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-01T00:00:00Z"
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "DepartmentCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 80
      },
      {
        "name": "Disability",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BaseSalary",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 10000
      },
      {
        "name": "SalaryFrequency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bi-Weekly"
      },
      {
        "name": "WorkLocationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "dc069074-24b2-0000-0000-000014e00100"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/onboardingemployees",
    "method": "listOnboardingEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Onboarding",
    "typeScriptTag": "employeeOnboarding",
    "description": "Get employees in the onboarding state",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get the employees in the onboarding state",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of Onboarding Employee records"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/taxes",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Taxes",
    "typeScriptTag": "employeeTaxes",
    "description": "Get Employee Taxes by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the employee for whom you want to get the taxes",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, TaxCredits\n\nData Access required\n\nTaxCredits = View Employee Tax Credits"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employee taxes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/taxes",
    "method": "addByEmployeeId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Taxes",
    "typeScriptTag": "employeeTaxes",
    "description": "Add Tax by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to add the tax",
        "example": "EMPLOYEEID"
      },
      {
        "name": "LegalEntityTaxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "b55a9eba-1007-0000-0000-000040e20100"
      },
      {
        "name": "ReciprocityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPROCITYTYPE"
      },
      {
        "name": "FilingStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WithholdingEffectiveStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-11-13T00:00:00"
      },
      {
        "name": "BlockDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-11-13T00:00:00"
      },
      {
        "name": "NonResidentAlien",
        "schema": "string",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "IsProbationaryEmployee",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "OccupationalCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12"
      },
      {
        "name": "GeographicCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11-1011"
      },
      {
        "name": "SOCCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11-1012"
      },
      {
        "name": "SeasonalCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "14"
      },
      {
        "name": "CountyCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "124"
      },
      {
        "name": "SpouseWork",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Yes/True"
      },
      {
        "name": "DependentInsuranceEligible",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Yes/True"
      },
      {
        "name": "DependentInsuranceEligibleDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-02-13T00:00:00"
      },
      {
        "name": "ApplicableBirthyear",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1980
      },
      {
        "name": "AdjustWithholding",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3141.59
      },
      {
        "name": "Percentage",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.2
      },
      {
        "name": "NCCICode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2004"
      },
      {
        "name": "PsdCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 101001
      },
      {
        "name": "PsdRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.123
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "Exemptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCredit",
        "schema": "object",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/taxes",
    "method": "updateByEmployeeId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Taxes",
    "typeScriptTag": "employeeTaxes",
    "description": "Update Tax by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to update the tax",
        "example": "EMPLOYEEID"
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a5713n92-196c-0000-0000-0007d5268Sa2"
      },
      {
        "name": "LegalEntityTaxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "b55a9eba-1007-0000-0000-000040e20100"
      },
      {
        "name": "ReciprocityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FilingStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WithholdingEffectiveStartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-13T00:00:00"
      },
      {
        "name": "BlockDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-11-13T00:00:00"
      },
      {
        "name": "NonResidentAlien",
        "schema": "string",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "IsProbationaryEmployee",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "OccupationalCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12"
      },
      {
        "name": "GeographicCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11-1011"
      },
      {
        "name": "SOCCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "11-1012"
      },
      {
        "name": "SeasonalCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "14"
      },
      {
        "name": "CountyCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "124"
      },
      {
        "name": "SpouseWork",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Yes/True"
      },
      {
        "name": "DependentInsuranceEligible",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Yes/True"
      },
      {
        "name": "DependentInsuranceEligibleDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-02-13T00:00:00"
      },
      {
        "name": "ApplicableBirthyear",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1980
      },
      {
        "name": "Amount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3141.59
      },
      {
        "name": "Percentage",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.2
      },
      {
        "name": "NCCICode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2004"
      },
      {
        "name": "PsdCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 101001
      },
      {
        "name": "PsdRate",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.123
      },
      {
        "name": "OnHold",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "Exemptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCredit",
        "schema": "object",
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
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/taxes/filingStatus/{taxCode}",
    "method": "getFilingStatusByTaxCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Taxes",
    "typeScriptTag": "employeeTaxes",
    "description": "Get Filing Status by Tax Code",
    "parameters": [
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "You can retrieve a valid Tax Code via Get Legal Entity Taxes by Legal Entity ID",
        "example": "TAXCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Filing Status Model represents the filing status information."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/taxes/taxFields/{taxCode}",
    "method": "getTaxFieldsByTaxCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Taxes",
    "typeScriptTag": "employeeTaxes",
    "description": "Get Tax Fields by Tax Code",
    "parameters": [
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "You can retrieve a Tax fields by Tax Codes",
        "example": "TAXCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Global Tax Form model represents required fields when creating/updating Employee tax.\nSo that user can easily determine what data needs to be passed for each specific Tax Code."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalEntities/{legalEntityId}/punches",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Time Card Punches",
    "typeScriptTag": "employeeTimeCardPunches",
    "description": "Get Legal Entity Employees Time Card Punches by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of legal entity for which you want to get hours",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of Employee Time Cards. ContinuationToken would be valid only for 24 hours. If a call is made after 24 hours with old continuationToken, no data will be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/punches",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Time Card Punches",
    "typeScriptTag": "employeeTimeCardPunches",
    "description": "Get Legal Entity Employees Time Card Punches by Employee ID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of employee for which you want to get hours",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Date range filter, showing which records to return"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of Employee Time Cards. ContinuationToken would be valid only for 24 hours. If a call is made after 24 hours with old continuationToken, no data will be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/timeoffaccruals",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Time Off Accruals",
    "typeScriptTag": "employeeTimeOffAccruals",
    "description": "Get Employee Accruals by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of an Employee for whom you want to get the Balances",
        "example": "EMPLOYEEID"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Employee Balances"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/timeoffaccruals",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Time Off Accruals",
    "typeScriptTag": "employeeTimeOffAccruals",
    "description": "Get Employee Accruals by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "Legal entity ID for which you want to get the balances",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of employee balances"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/timeoffrequests",
    "method": "listByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Requests",
    "typeScriptTag": "timeOffRequests",
    "description": "Get Employee Time Off Requests by EmployeeId",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee for which you want to get the Time Off Requests.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Date range filter, showing which records to return.",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Date range filter, showing which records to return.",
        "example": "ENDDATE"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/events/mockevent",
    "method": "notifyEventDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Mock Event Notification",
    "parameters": [
      {
        "name": "ApplicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0f8fad5b-d9cb-469f-a165-70867728950e"
      },
      {
        "name": "NotificationURL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://partner/v1/eventNotificationReceiver"
      },
      {
        "name": "NotificationSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bearer WREXIDWmfhlc19eLE1vXQ5KDnGEk22AeEvGcON2L2As8I1GwDUGstl-SUfyV6V3e23v3_EVABGx"
      },
      {
        "name": "EventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employee.Modified"
      },
      {
        "name": "ItemId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "89610735-e570-0000-0000-000066000000"
      },
      {
        "name": "LegalEntityId",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 501123
      },
      {
        "name": "TenantId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2080
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Event Model Emitted By Paycor."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/generalledger/legalentities/{legalEntityId}",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General Ledger",
    "typeScriptTag": "generalLedger",
    "description": "Get General Ledger by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get the general ledger items",
        "example": 0
      },
      {
        "name": "plannerId",
        "schema": "string",
        "description": "ID of planner, required if report type is regular"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "Type of General Ledger, Regular or Setup "
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: EmployeeData"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of General Ledger records"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/generalledger/jobcosting/legalentities/{legalEntityId}",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "General Ledger Job Costing",
    "typeScriptTag": "generalLedgerJobCosting",
    "description": "Get General Ledger Job Costing by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get the job costing items.",
        "example": 0
      },
      {
        "name": "plannerId",
        "schema": "string",
        "required": true,
        "description": "ID of planner.",
        "example": "PLANNERID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: EmployeeData"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get next set of Job Costing records."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/laborcategories",
    "method": "byLegalEntityIdGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labor Categories",
    "typeScriptTag": "laborCategories",
    "description": "Get Labor Categories by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get labor categories (also known as job categories)",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/laborcodes",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labor Codes",
    "typeScriptTag": "laborCodes",
    "description": "Get Labor Code By Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get labor codes (also known as job codes)",
        "example": 0
      },
      {
        "name": "continuationToken",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/laborcodes",
    "method": "addLaborCodeToLegalEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Labor Codes",
    "typeScriptTag": "laborCodes",
    "description": "Add Labor Code to Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to create Labor Code",
        "example": 0
      },
      {
        "name": "LaborCategoryId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12e0e1c9-e8dc-ec11-912c-0050569f27b8"
      },
      {
        "name": "LaborCodeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IT"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "labor code effective until New year"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "code 1"
      },
      {
        "name": "EffectiveStartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-05-26"
      },
      {
        "name": "EffectiveEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-11-25"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/laborcodes",
    "method": "updateSpecifiedLaborCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Labor Codes",
    "typeScriptTag": "laborCodes",
    "description": "Update Labor Code",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to update Labor Code",
        "example": 0
      },
      {
        "name": "LaborCodeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12e0e1c9-e8dc-ec11-912c-0050569f27b8"
      },
      {
        "name": "LaborCodeName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IT"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "labor code effective until New year"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "code 1"
      },
      {
        "name": "EffectiveStartDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-05-26"
      },
      {
        "name": "EffectiveEndDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-11-25"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entities",
    "typeScriptTag": "legalEntities",
    "description": "",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Legal Entity (Client) model represents organization Legal Entity information.\nProvides links to the Legal Entity's associated Tenant, Employee, Person, Earning, Deduction, Taxes and Custom Field information."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/ActivatedLegalEntityTenantList",
    "method": "getTenantList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entities",
    "typeScriptTag": "legalEntities",
    "description": "Get Legal Entities/Tenants for the user logged in",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The User Info provides a List of the Legal Entities and Tenants User has access to."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/certificationOrganizations",
    "method": "listCertificationOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Certifications",
    "typeScriptTag": "legalEntityCertifications",
    "description": "Get a list of Certification Organizations for a Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the certification organizations",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of certification organizations"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/certifications",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Certifications",
    "typeScriptTag": "legalEntityCertifications",
    "description": "Get a list of Certifications for a Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "continuationToken",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/deductions",
    "method": "viewEmployeesData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Deductions",
    "typeScriptTag": "legalEntityDeductions",
    "description": "Get Legal Entity Deductions by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the deductions",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Deductions"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/departments",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Departments",
    "typeScriptTag": "legalEntityDepartments",
    "description": "Get Legal Entity Departments by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Departments",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Departments"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal Entity Departments",
    "typeScriptTag": "legalEntityDepartments",
    "description": "Create Departments by Legal Entity Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to create the Departments",
        "example": 0
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "ParentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cb4a1b67-000c-0000-0000-000066000456"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Department 123"
      },
      {
        "name": "WorkLocationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cb4a1b67-000c-0000-0000-000066000212"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/departments",
    "method": "updateByLegalEntityId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Legal Entity Departments",
    "typeScriptTag": "legalEntityDepartments",
    "description": "Update Legal Entity Department by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to update the Department",
        "example": 0
      },
      {
        "name": "DepartmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "89b88074-4b20-0000-0000-000014e00146"
      },
      {
        "name": "Code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "ParentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cb4a1b67-000c-0000-0000-000066000456"
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Department 123"
      },
      {
        "name": "WorkLocationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cb4a1b67-000c-0000-0000-000066000212"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/departments/{departmentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Departments",
    "typeScriptTag": "legalEntityDepartments",
    "description": "Get Legal Entity Department by Legal Entity ID and Department ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Departments",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "string",
        "required": true,
        "description": "ID of the Department",
        "example": "DEPARTMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Client Department model represents client department information."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/earnings",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Earnings",
    "typeScriptTag": "legalEntityEarnings",
    "description": "",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "continuationToken",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/jobtitles",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Job Titles",
    "typeScriptTag": "legalEntityJobTitles",
    "description": "Get Job Titles by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity you want to get Job Titles.",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Job Titles"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/paydata",
    "method": "getPayDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Pay Data",
    "typeScriptTag": "legalEntityPayData",
    "description": "Get Legal Entity Pay Data by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Pay Data",
        "example": 0
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "ID of an Employee, if you want to filter to paydata from a specific Employee"
      },
      {
        "name": "fromCheckDate",
        "schema": "string",
        "description": "Filter Option 1: Date Range, From Check Date of Payrun"
      },
      {
        "name": "toCheckDate",
        "schema": "string",
        "description": "Filter Option 1: Date Range, To Check Date of Payrun"
      },
      {
        "name": "processDate",
        "schema": "string",
        "description": "Filter Option 2: Process Date of Payrun"
      },
      {
        "name": "plannerId",
        "schema": "string",
        "description": "Filter Option 3: ID of the Planner for which you want to get the Pay Data."
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Pay Data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/payGroups",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Pay Groups",
    "typeScriptTag": "legalEntityPayGroups",
    "description": "Get Pay Groups by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Pay Groups",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Pay Groups"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/payrollProcessing",
    "method": "getByLegalEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Payroll Processing Data",
    "typeScriptTag": "legalEntityPayrollProcessingData",
    "description": "GET Payroll Processing Data by Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Pay Groups",
        "example": 0
      },
      {
        "name": "fromCheckDate",
        "schema": "string",
        "required": true,
        "description": "Date range filter, From Check Date ",
        "example": "FROMCHECKDATE"
      },
      {
        "name": "toCheckDate",
        "schema": "string",
        "description": "Date range filter, To Check Date"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Payroll Processing Data"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/payschedule",
    "method": "getByLegalEntityAndPaygroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Pay Schedule",
    "typeScriptTag": "legalEntityPaySchedule",
    "description": "Get Legal Entity Pay Schedule by Legal Entity ID and Paygroup ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Pay Schedule",
        "example": 0
      },
      {
        "name": "payGroupId",
        "schema": "string",
        "description": "ID of the Paygroup for whom you want to get the Pay Schedule. Available via 'GET Legal Entity Pay Groups'"
      },
      {
        "name": "asOfDate",
        "schema": "string",
        "description": "Acts as a 'start date' filter - looks for Payruns that are in-progress or unpaid as of this date"
      },
      {
        "name": "untilDate",
        "schema": "string",
        "description": "Acts as an 'end date' filter - looks for Payruns that are in-progress or unpaid until this date"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity Pay Schedule"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/activitytypes",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Activity Types",
    "typeScriptTag": "legalEntityActivityTypes",
    "description": "Get Legal Entity Activity Types by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "Legal Entity Id for whom you want to get the Activity Types",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/schedulegroups",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Schedule Groups",
    "typeScriptTag": "legalEntityScheduleGroups",
    "description": "Get Schedules Groups for Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity you want to get Schedule Groups",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "A token to get next set of results"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/services",
    "method": "getSubscribedServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Services",
    "typeScriptTag": "legalEntityServices",
    "description": "Get subscribed services for Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity you want to get (synonymous to Paycor's ClientID)",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Services model represents service offerings available to a Legal Entity."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/statusReasons/{statusCategory}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Status Reason",
    "typeScriptTag": "legalEntityStatusReason",
    "description": "Get Legal Entity Status Reason values",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the legal entity for which you want to get the status reasons items",
        "example": 0
      },
      {
        "name": "statusCategory",
        "schema": "string",
        "required": true,
        "description": "Status category of status reasons.",
        "example": "STATUSCATEGORY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/taxes",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": " Legal Entity Taxes",
    "typeScriptTag": "legalEntityTaxes",
    "description": "Get Legal Entity Taxes by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity you want to get (synonymous to Paycor's ClientID) the taxes",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Legal Entity taxes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/timeoffrequests",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Requests",
    "typeScriptTag": "timeOffRequests",
    "description": "Get Employee Time Off Requests by Legal Entity Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Time Off Requests.",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Date range filter, showing which records to return.",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Date range filter, showing which records to return.",
        "example": "ENDDATE"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/timeoffRequests/{timeoffRequestId}",
    "method": "getTimeoffRequestById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Requests",
    "typeScriptTag": "timeOffRequests",
    "description": "Get Employee Timeoff Request by Legal Entity Id And Timeoff Request Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Timeoff Request.",
        "example": 0
      },
      {
        "name": "timeoffRequestId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee Timeoff Request.",
        "example": "TIMEOFFREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee Time Off Request model represents information about time off requests for specific employee."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/timeoffRequestserrorlog/{trackingId}",
    "method": "getTimeOffRequestErrorLogsByTrackingId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Time Data",
    "typeScriptTag": "legalEntityTimeData",
    "description": "Get Employee Timeoff Request error logs by Legal Entity Id And Tracking Id",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the Timeoff Request.",
        "example": 0
      },
      {
        "name": "trackingId",
        "schema": "string",
        "required": true,
        "description": "ID of the Employee Timeoff Request failure result.",
        "example": "TRACKINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Time Off Request Error log model represents information about error logs in the create timeoff request api."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/timeofftypes",
    "method": "viewTimeOffTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Time Off Types",
    "typeScriptTag": "legalEntityTimeOffTypes",
    "description": "Get Legal Entity Time Off Types",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of an Legal Entity for which you want to get the Time Off Types",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of results"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worklocations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Work Locations",
    "typeScriptTag": "legalEntityWorkLocations",
    "description": "Get a list of Work Locations for a Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the work locations",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of work locations"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worklocations",
    "method": "addByLegalEntityId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal Entity Work Locations",
    "typeScriptTag": "legalEntityWorkLocations",
    "description": "Add Work Location By Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "addressData",
        "schema": "boolean",
        "description": "Use Physical Address as mailing address?"
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Temp WL."
      },
      {
        "name": "StoreId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 18
      },
      {
        "name": "IsFmlaEligible",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "Addresses",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "PhoneNumbers",
        "schema": "array",
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
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worklocations",
    "method": "updateByLegalEntityId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Legal Entity Work Locations",
    "typeScriptTag": "legalEntityWorkLocations",
    "description": "Update Work Location By Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the work locations",
        "example": 0
      },
      {
        "name": "Id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "164f5405-d32c-4612-8a11-20491516e557"
      },
      {
        "name": "Addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "PhoneNumbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "TimeZone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 12
      },
      {
        "name": "IsFmlaEligible",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "IsDefault",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worklocations/{workLocationId}",
    "method": "deleteByLegalEntityAndWorkLocationId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Legal Entity Work Locations",
    "typeScriptTag": "legalEntityWorkLocations",
    "description": "Delete Work Location By Work Location ID And Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to delete Work Location",
        "example": 0
      },
      {
        "name": "workLocationId",
        "schema": "string",
        "required": true,
        "description": "ID of the Work Location",
        "example": "WORKLOCATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worklocations/{workLocationId}",
    "method": "getByLegalEntityAndLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Work Locations",
    "typeScriptTag": "legalEntityWorkLocations",
    "description": "Get a Work Location for a Legal Entity By Legal Entity ID and Work Location ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the work location",
        "example": 0
      },
      {
        "name": "workLocationId",
        "schema": "string",
        "required": true,
        "description": "ID of the Work Location",
        "example": "WORKLOCATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalentities/{legalEntityId}/worksites",
    "method": "getByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal Entity Work Sites",
    "typeScriptTag": "legalEntityWorkSites",
    "description": "Get Work Sites for Legal Entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity you want to get Work Sites",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "A token to get next set of results"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/legalEntities/{legalEntityId}/persons",
    "method": "listByLegalEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get Persons by Legal Entity ID",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Legal Entity for which you want to get the persons",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Demographic, Benefit, Military, SocialMedia, Addresses, EmployeeAssignments, SocialSecurityNumber, Phones\n\nData Access required\n\nDemographic = View Person Demographic Information\n\nBenefit = View Person Disability and Tobacco Status\n\nMilitary = View Person Military\n\nSocialMedia = View Person Social Media\n\nAddresses = View Person Addresses\n\nEmployeeAssignments = View Employee Records"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of persons"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}/persons",
    "method": "listByTenantId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get Persons By TenantID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Tenant for which you want to get persons",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of persons"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}/persons/{personId}",
    "method": "getByTenantAndPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get Person By TenantID And PersonID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Tenant that the Person is in",
        "example": 0
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "ID of the Person you want to get",
        "example": "PERSONID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data:  All, Demographic, Benefit, Military, SocialMedia, Addresses, EmployeeAssignments, EmergencyContact, SocialSecurityNumber, Phones\n\nDemographic = View Person Demographic Information\n\nBenefit = View Person Disability and Tobacco Status\n\nMilitary = View Person Military\n\nSocialMedia = View Person Social Media\n\nAddresses = View Person Addresses\n\nEmployeeAssignments = View Employee Records\n\nEmergencyContact = View Person Emergency Contacts\n\nSocialSecurityNumber = View Person SSN\n\nPhones = View Person Phone"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Each Person is associated with one or more Employees within one Tenant. An Employee works for a single Legal Entity within the Tenant.  If a person works\nfor multiple Legal Entities within a Tenant, they will be associated with multiple Employee records - but will only have a single Person record in the Paycor system.\nProvides links to the Person's associated Employee, Legal Entity and Tenant information.\n            "
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/employees/{employeeId}/person",
    "method": "getByEmployeeIdPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get Person by EmployeeID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "EmployeeID linked to the Person you want to get",
        "example": "EMPLOYEEID"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Options to include more data: All, Demographic, Benefit, Military, SocialMedia, Addresses, EmployeeAssignments, EmergencyContact, SocialSecurityNumber, Phones"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Each Person is associated with one or more Employees within one Tenant. An Employee works for a single Legal Entity within the Tenant.  If a person works\nfor multiple Legal Entities within a Tenant, they will be associated with multiple Employee records - but will only have a single Person record in the Paycor system.\nProvides links to the Person's associated Employee, Legal Entity and Tenant information.\n            "
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Get Tenant by TenantID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Tenant you want to get",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Tenant model represents information about Tenant (company) level organization information.\nProvides links to the associated Legal Entity information.\n            "
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}/worklocations",
    "method": "getWorkLocationsByTenantId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tenants",
    "typeScriptTag": "tenants",
    "description": "Get Tenant Work Locations by TenantID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Tenant you want to get work locations.",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of work locations"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  },
  {
    "url": "/v1/tenants/{tenantId}/jobtitles",
    "method": "listByTenantId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Titles",
    "typeScriptTag": "jobTitles",
    "description": "Get All Job Titles by Tenant ID",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Tenant you want to get Job Titles.",
        "example": 0
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Token to get the next set of Job Titles"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Paged Result model enables pagination of results if maximum of 100 records per response is exceeded. Additional\nresults can be requested by providing calling the AdditionalResultsUrl endpoint containing the continuation token, or\nby building your own URL using the provided continuation token."
      },
      {
        "statusCode": "404",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      },
      {
        "statusCode": "500",
        "description": "The Paycor Error model is used to catch exceptions and related contextual data for logging."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Paycor Public API"
      apiBaseUrl="https://apis.paycor.com"
      apiVersion=""
      endpoints={85}
      sdkMethods={109}
      schemas={327}
      parameters={543}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paycor/openapi.yaml"
      developerDocumentation="developers.paycor.com/explore"
    />
  );
}
  