import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function UnstructuredTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="unstructured-typescript-sdk"
      metaDescription={`At Unstructured, we're on a mission to give organizations access to all of their data. We know the world runs on documents—from research reports and memos, to quarterly filings and plans of action, documents are the unit of information that companies depend on. And yet, 80% of this information is trapped in inaccessible formats, and businesses have long struggled to unlock this data, leading to information silos, inefficient decision-making, and repetitive work. Until now.

Unstructured captures this unstructured data wherever it lives and transforms it into AI-friendly JSON files for companies who are eager to fold AI into their business.`}
      company="Unstructured"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/logo.png"
      companyKebabCase="unstructured"
      clientNameCamelCase="unstructured"
      homepage="unstructured.io"
      lastUpdated={new Date("2024-03-20T07:06:17.783Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/favicon.jpg"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["document_management","ai","data_transformation","nlp","unstructured","llm","large_language_model","artifical_intelegence","rag","machine_learning","open_source","data_pipeline","pdf","xml","html"]}
      methods={[
  {
    "url": "/general/v0/general",
    "method": "createPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "general",
    "typeScriptTag": "general",
    "description": "Pipeline 1",
    "parameters": [
      {
        "name": "files",
        "schema": "string",
        "description": "",
        "example": {
          "summary": "File to be partitioned",
          "externalValue": "https://github.com/Unstructured-IO/unstructured/blob/98d3541909f64290b5efb65a226fc3ee8a7cc5ee/example-docs/layout-parser-paper.pdf"
        }
      },
      {
        "name": "strategy",
        "schema": "string",
        "description": "",
        "example": "hi_res"
      },
      {
        "name": "gz_uncompressed_content_type",
        "schema": "string",
        "description": "",
        "example": "application/pdf"
      },
      {
        "name": "output_format",
        "schema": "string",
        "description": "",
        "example": "application/json"
      },
      {
        "name": "coordinates",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "encoding",
        "schema": "string",
        "description": "",
        "example": "utf-8"
      },
      {
        "name": "hi_res_model_name",
        "schema": "string",
        "description": "",
        "example": "yolox"
      },
      {
        "name": "include_page_breaks",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "description": "",
        "example": "[eng]",
        "default": []
      },
      {
        "name": "pdf_infer_table_structure",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "skip_infer_table_types",
        "schema": "array",
        "description": ""
      },
      {
        "name": "xml_keep_tags",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "chunking_strategy",
        "schema": "string",
        "description": "",
        "example": "by_title"
      },
      {
        "name": "multipage_sections",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "combine_under_n_chars",
        "schema": "integer",
        "description": "",
        "example": 500
      },
      {
        "name": "new_after_n_chars",
        "schema": "integer",
        "description": "",
        "example": 1500
      },
      {
        "name": "max_characters",
        "schema": "integer",
        "description": "",
        "example": 1500
      },
      {
        "name": "overlap",
        "schema": "integer",
        "description": "",
        "example": 25
      },
      {
        "name": "overlap_all",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "extract_image_block_types",
        "schema": "array",
        "description": "",
        "example": [
          "image",
          "table"
        ],
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Unstructured Pipeline API"
      apiBaseUrl="https://api.unstructured.io"
      apiVersion="0.0.1"
      endpoints={1}
      sdkMethods={1}
      schemas={4}
      parameters={20}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unstructured/openapi.yaml"
      developerDocumentation="unstructured-io.github.io/unstructured/"
    />
  );
}
  