import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MarketDataTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="market-data-typescript-sdk"
      metaDescription={`Somos un centro de información que analiza el mercado bursátil, financiero y econonómico.`}
      company="MarketData"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/logo.png"
      companyKebabCase="market-data"
      clientNameCamelCase="marketData"
      homepage="marketdata.app"
      lastUpdated={new Date("2024-03-29T22:43:24.817Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/favicon.png"
      // Missing contactUrl
      contactEmail="support@marketdata.app"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance"]}
      methods={[
  {
    "url": "/v1/indices/candles/{resolution}/{symbol}",
    "method": "indicesCandlesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get historical price candles for an index.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": true,
        "description": "The duration of each candle.\n                                                                                        Minutely Resolutions: (1, 3, 5, 15, 30, 45, ...)\n                                                                                        Hourly Resolutions: (H, 1H, 2H, ...)\n                                                                                        Daily Resolutions: (D, 1D, 2D, ...)\n                                                                                        Weekly Resolutions: (W, 1W, 2W, ...)\n                                                                                        Monthly Resolutions: (M, 1M, 2M, ...)\n                                                                                        Yearly Resolutions:(Y, 1Y, 2Y, ...)')",
        "example": "RESOLUTION"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The index's ticker symbol. If no exchange is specified. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup historical candles from a specific trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The leftmost candle on a chart (https://api.marketdata.app/. If you use countback, to is not required. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The rightmost candle on a chart (not inclusive). Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a number of candles before (to the left of) to If you use from, countback is not required."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/indices/quotes/{symbol}",
    "method": "indicesQuotesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get last quote for an index.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The index's ticker symbol. If no exchange is specified. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.",
        "example": "SYMBOL"
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint's default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/markets/status",
    "method": "marketsStatusRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get market status (\"open\" or \"closed\") for a date or range of dates.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup status from a specific trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Limit the status to dates after from (https://api.marketdata.app/. Should be combined with to to create a range. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Limit the status to dates before to (https://api.marketdata.app/. Should be combined with from to create a range. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a number of dates before (to the left of) to. If you use from, countback is not required."
      },
      {
        "name": "country",
        "schema": "string",
        "description": "Use to specify the country of the exchange. Use the two digit ISO 3166 country code. If no country is specified, US exchanges will be assumed."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/options/chain/{underlying}",
    "method": "optionsChainRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get a current or historical end of day options chain for an underlying ticker symbol.\nOptional parameters allow for extensive filtering of the chain.\nUse the optionSymbol returned from this endpoint to get quotes, greeks, or other information using the other endpoints.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "underlying",
        "schema": "string",
        "required": true,
        "description": "The underlying ticker symbol for the options chain you wish to lookup.\n                                                                                        Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                        ",
        "example": "UNDERLYING"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup a historical end of day options chain from a specific trading day. If no date is specified the chain will be the most current chain available during market hours. When the market is closed the chain will be from the last trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "expiration",
        "schema": "string",
        "description": "Limit the option chain to a specific expiration date. Accepted date inputs: ISO 8601, unix, spreadsheet. If omitted all expirations will be returned."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Limit the option chain to expiration dates after from (https://api.marketdata.app/. Should be combined with to to create a range. Accepted date inputs: ISO 8601, unix, spreadsheet. If omitted all expirations will be returned."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Limit the option chain to expiration dates before to (not inclusive). Should be combined with from to create a range. Accepted date inputs: ISO 8601, unix, spreadsheet. If omitted all expirations will be returned."
      },
      {
        "name": "month",
        "schema": "integer",
        "description": "Limit the option chain to options that expire in a specific month (https://api.marketdata.app/."
      },
      {
        "name": "year",
        "schema": "integer",
        "description": "Limit the option chain to options that expire in a specific year."
      },
      {
        "name": "weekly",
        "schema": "boolean",
        "description": "Limit the option chain to weekly expirations by setting weekly to true and omitting the monthly and quarterly parameters. If set to false, no weekly expirations will be returned."
      },
      {
        "name": "monthly",
        "schema": "boolean",
        "description": "Limit the option chain to standard monthly expirations by setting monthly to true and omitting the weekly and quarterly parameters. If set to false, no monthly expirations will be returned."
      },
      {
        "name": "quarterly",
        "schema": "boolean",
        "description": "Limit the option chain to quarterly expirations by setting quarterly to true and omitting the weekly and monthly parameters. If set to false, no quarterly expirations will be returned."
      },
      {
        "name": "dte",
        "schema": "integer",
        "description": "Days to expiry. Limit the option chain to a single expiration date closest to the dte provided. Should not be used together with from and to. Take care before combining with weekly, monthly, quarterly, since that will limit the expirations dte can return. If you are using the date parameter, dte is relative to the date provided."
      },
      {
        "name": "side",
        "schema": "string",
        "description": "Limit the option chain to either call or put. If omitted, both sides will be returned."
      },
      {
        "name": "range",
        "schema": "string",
        "description": "Limit the option chain to strikes that are in the money, out of the money, or include all. If omitted all options will be returned. Valid inputs: itm, otm, all."
      },
      {
        "name": "strike",
        "schema": "number",
        "description": "Limit the option chain to options with the specific strike specified."
      },
      {
        "name": "minOpenInterest",
        "schema": "number",
        "description": "Limit the option chain to options with an open interest greater than or equal to the number provided. Can be combined with minVolume and minLiquidity to further filter."
      },
      {
        "name": "minVolume",
        "schema": "integer",
        "description": "Limit the option chain to options with an volume transacted greater than or equal to the number provided."
      },
      {
        "name": "maxBidAskSpread",
        "schema": "number",
        "description": "Limit the option chain to options with a bid-ask spread less than or equal to the number provided."
      },
      {
        "name": "maxBidAskSpreadPct",
        "schema": "number",
        "description": "Limit the option chain to options with a bid-ask spread less than or equal to the percent provided (relative to the underlying). For example, a value of 0.5% would exclude all options trading with a bid-ask spread greater than $1.00 in an underlying that trades at $200."
      },
      {
        "name": "nonstandard",
        "schema": "boolean",
        "description": "Include non-standard contracts by nonstandard to true. If set to false, no non-standard options expirations will be returned. If no parameter is provided, the output will default to false."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "symbolLookup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "quote",
        "schema": "boolean",
        "description": "Include quotes"
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/options/expirations/{underlying}",
    "method": "optionsExpirationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get a list of current or historical option expiration dates for an underlying symbol.\nIf no optional parameters are used, the endpoint returns the expirations for strike in the chain.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "underlying",
        "schema": "string",
        "required": true,
        "description": "The underlying ticker symbol for the options chain you wish to lookup.\n                                                                                        Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                        ",
        "example": "UNDERLYING"
      },
      {
        "name": "strike",
        "schema": "number",
        "description": "Limit the lookup of expiration dates to the strike provide. This will cause the endpoint to only return expiration dates that include this strike."
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup a historical list of expiration dates from a specific previous trading day. If date is omitted the expiration dates will be from the current trading day during market hours or from the last trading day when the market is closed. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "symbolLookup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/options/lookup/{userInput}",
    "method": "optionsSymbolGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Generate a properly formatted OCC option symbol based on the user's human-readable description of an option.\nThis endpoint converts text such as \"AAPL 7/26/23 $200 Call\" to OCC option symbol format: AAPL230726C00200000.\nThe user input must be URL-encoded.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userInput",
        "schema": "string",
        "required": true,
        "description": "The human-readable string input that contains (https://api.marketdata.app/ stock symbol (https://api.marketdata.app/ strike (https://api.marketdata.app/ expiration date (https://api.marketdata.app/ option side (i.e. put or call). This endpoint will translate the user's input into a valid OCC option symbol.",
        "example": "USERINPUT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/options/quotes/{optionSymbol}",
    "method": "optionsQuotesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get a current or historical end of day quote for a single or multiple options contracts.\nSeparate multiple options symbols with a comma.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "optionSymbol",
        "schema": "string",
        "required": true,
        "description": "The option symbol (as defined by the OCC) for the option you wish to lookup. Use the current OCC option symbol format, even for historic options that quoted before the format change in 2010.",
        "example": "OPTIONSYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup a historical end of day quote from a specific trading day. If no date is specified the quote will be the most current price available during market hours. When the market is closed the quote will be from the last trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Use to lookup a series of end of day quotes. From is the oldest (https://api.marketdata.app/ date to return (https://api.marketdata.app/. If from/to is not specified the quote will be the most current price available during market hours. When the market is closed the quote will be from the last trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Use to lookup a series of end of day quotes. To is the newest (https://api.marketdata.app/ date to return (https://api.marketdata.app/. If from/to is not specified the quote will be the most current price available during market hours. When the market is closed the quote will be from the last trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a number of quotes before (to the left of) to If you use from, countback is not required."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/options/strikes/{underlying}",
    "method": "optionsStrikesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get a list of current or historical options strikes for an underlying symbol.\nIf no optional parameters are used, the endpoint returns the strikes for every expiration in the chain.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "underlying",
        "schema": "string",
        "required": true,
        "description": "The underlying ticker symbol for the options chain you wish to lookup.\n                                                                                        Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                       ",
        "example": "UNDERLYING"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup a historical list of strikes from a specific previous trading day. If date is omitted the strikes will be from the current trading day during market hours or from the last trading day when the market is closed. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "expiration",
        "schema": "string",
        "description": "imit the lookup of strikes to options that expire on a specific expiration date. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "symbolLookup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/bulkcandles/{resolution}",
    "method": "stocksBulkcandlesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get bulk candle data for stocks. This endpoint returns bulk daily candle data for multiple stocks.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": true,
        "description": "The duration of each candle.\n                                                                                        Minutely Resolutions: (1, 3, 5, 15, 30, 45, ...)\n                                                                                        Hourly Resolutions: (H, 1H, 2H, ...)\n                                                                                        Daily Resolutions: (D, 1D, 2D, ...)\n                                                                                        Weekly Resolutions: (W, 1W, 2W, ...)\n                                                                                        Monthly Resolutions: (M, 1M, 2M, ...)\n                                                                                        Yearly Resolutions:(Y, 1Y, 2Y, ...)')",
        "example": "RESOLUTION"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup historical candles from a specific trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The leftmost candle on a chart (https://api.marketdata.app/. If you use countback, to is not required. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The rightmost candle on a chart (not inclusive). Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a number of candles before (to the left of) to If you use from, countback is not required."
      },
      {
        "name": "exchange",
        "schema": "string",
        "description": "Use to specify the exchange of the ticker. This is useful when you need to specify stock that quotes on several exchanges with the same symbol. You may specify the exchange using the EXCHANGE ACRONYM, MIC CODE, or two digit YAHOO FINANCE EXCHANGE CODE. If no exchange is specified symbols will be matched to US exchanges first."
      },
      {
        "name": "extended",
        "schema": "boolean",
        "description": "Include extended hours trading sessions when returning intraday candles. Daily resolutions never return extended hours candles. The default is false"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "Use to specify the country of the exchange (not the country of the company) in conjunction with the symbol argument. This argument is useful when you know the ticker symbol and the country of the exchange, but not the exchange code. Use the two digit ISO 3166 country code. If no country is specified, US exchanges will be assumed."
      },
      {
        "name": "adjustsplits",
        "schema": "boolean",
        "description": "Adjust historical data for for historical splits and reverse splits. Market Data uses the CRSP methodology for adjustment.\n                                                                                    Daily candles default: true.\n                                                                                    Intraday candles default: false."
      },
      {
        "name": "adjustdividends",
        "schema": "boolean",
        "description": "Adjust candles for dividends. Market Data uses the CRSP methodology for adjustment.\n                                                                                    Daily candles default: true.\n                                                                                    Intraday candles default: false."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/bulkquotes",
    "method": "stocksBulkquotesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get bulk quote data for stocks. This endpoint returns bulk real time quote data for multiple stocks.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint's default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "symbolLookup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/candles/{resolution}/{symbol}",
    "method": "stocksCandlesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get historical price candles for a stock.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": true,
        "description": "The duration of each candle.\n                                                                                        Minutely Resolutions: (1, 3, 5, 15, 30, 45, ...)\n                                                                                        Hourly Resolutions: (H, 1H, 2H, ...)\n                                                                                        Daily Resolutions: (D, 1D, 2D, ...)\n                                                                                        Weekly Resolutions: (W, 1W, 2W, ...)\n                                                                                        Monthly Resolutions: (M, 1M, 2M, ...)\n                                                                                        Yearly Resolutions:(Y, 1Y, 2Y, ...)')",
        "example": "RESOLUTION"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Use to lookup historical candles from a specific trading day. Accepted date inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The leftmost candle on a chart (https://api.marketdata.app/. If you use countback, to is not required. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The rightmost candle on a chart (not inclusive). Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a number of candles before (to the left of) to If you use from, countback is not required."
      },
      {
        "name": "exchange",
        "schema": "string",
        "description": "Use to specify the exchange of the ticker. This is useful when you need to specify stock that quotes on several exchanges with the same symbol. You may specify the exchange using the EXCHANGE ACRONYM, MIC CODE, or two digit YAHOO FINANCE EXCHANGE CODE. If no exchange is specified symbols will be matched to US exchanges first."
      },
      {
        "name": "extended",
        "schema": "boolean",
        "description": "Include extended hours trading sessions when returning intraday candles. Daily resolutions never return extended hours candles. The default is false"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "Use to specify the country of the exchange (not the country of the company) in conjunction with the symbol argument. This argument is useful when you know the ticker symbol and the country of the exchange, but not the exchange code. Use the two digit ISO 3166 country code. If no country is specified, US exchanges will be assumed."
      },
      {
        "name": "adjustsplits",
        "schema": "boolean",
        "description": "Adjust historical data for for historical splits and reverse splits. Market Data uses the CRSP methodology for adjustment.\n                                                                                    Daily candles default: true.\n                                                                                    Intraday candles default: false."
      },
      {
        "name": "adjustdividends",
        "schema": "boolean",
        "description": "Adjust candles for dividends. Market Data uses the CRSP methodology for adjustment.\n                                                                                    Daily candles default: true.\n                                                                                    Intraday candles default: false."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint’s default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/earnings/{symbol}",
    "method": "stocksEarningsSymbolGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get historical earnings per share data or a future earnings calendar for a stock.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Retrieve a specific earnings report by date. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The earliest earnings report to include in the output.If you use countback, from is not required. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The latest earnings report to include in the output. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a specific number of earnings reports before to. If you use from, countback is not required."
      },
      {
        "name": "report",
        "schema": "string",
        "description": "Retrieve a specific earnings report by date and quarter. Example: 2023-Q4. This allows you to retrieve a 4th qurater value without knowing the company's specific fiscal year."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint's default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/news/{symbol}",
    "method": "stocksNewsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get news for a stock.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Retrieve a specific earnings report by date. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The earliest earnings report to include in the output.If you use countback, from is not required. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The latest earnings report to include in the output. Accepted timestamp inputs: ISO 8601, unix, spreadsheet."
      },
      {
        "name": "countback",
        "schema": "integer",
        "description": "Countback will fetch a specific number of earnings reports before to. If you use from, countback is not required."
      },
      {
        "name": "report",
        "schema": "string",
        "description": "Retrieve a specific earnings report by date and quarter. Example: 2023-Q4. This allows you to retrieve a 4th qurater value without knowing the company's specific fiscal year."
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint's default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/v1/stocks/quotes/{symbol}",
    "method": "stocksLastQuoteGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Get last quote for a stock.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "The format parameter is used to specify the format for your data. We support JSON and CSV formats. The default format is JSON."
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "The company's ticker symbol. If no exchange is specified, by default a US exchange will be assumed. You may embed the exchange in the ticker symbol using the Yahoo Finance or TradingView formats.\n                                                                                    Ticker Formats: (TICKER, TICKER.EX, EXCHANGE:TICKER)\n                                                                                    ",
        "example": "SYMBOL"
      },
      {
        "name": "dateformat",
        "schema": "string",
        "description": "The dateformat parameter allows you specify the format you wish to receive date and time information in."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit parameter allows you to limit the number of results for a particular API call or override an endpoint's default limits to get more data."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset parameter is used together with limit to allow you to implement pagination in your application. Offset will allow you to return values starting at a certain value."
      },
      {
        "name": "headers",
        "schema": "boolean",
        "description": "The headers parameter is used to turn off headers when using CSV output."
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "The columns parameter is used to limit the results and only request the columns you need. The most common use of this feature is to embed a single numeric result from one of the end points in a spreadsheet cell."
      },
      {
        "name": "symbolLookup",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "human",
        "schema": "boolean",
        "description": "Use human-readable attribute names in the JSON or CSV output instead of the standard camelCase attribute names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Market Data API"
      apiBaseUrl="https://api.marketdata.app/"
      apiVersion="1.0.0"
      endpoints={14}
      sdkMethods={14}
      schemas={0}
      parameters={177}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/marketdata/openapi.yaml"
      developerDocumentation="api.marketdata.app/"
    />
  );
}
  