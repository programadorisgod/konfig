import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function RottenTomatoesTypeScriptSdk() {
  return (
    <Sdk
      sdkName="rotten-tomatoes-typescript-sdk"
      metaDescription="Rotten Tomatoes, home of the Tomatometer, is the most trusted measurement of quality for Movies & TV. The definitive site for Reviews, Trailers, Showtimes, and Tickets."
      company="Rotten Tomatoes"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/logo.png"
      clientNameCamelCase="rottenTomatoes"
      homepage="developer.fandango.com/rotten_tomatoes"
      lastUpdated={new Date("2024-02-01T19:41:39.466Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/favicon.jpeg"
      contactUrl="https://github.com/mermade/mashery2openapi"
      contactEmail="mike.ralphson@gmail.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/lists.json",
    "method": "listsDirectoryTopLevelLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/lists/dvds.json",
    "method": "dvdListsDirectoryTopLevelLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/lists/dvds/current_releases.json",
    "method": "currentReleaseDvDsDvdLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of new release dvds to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of current DVD releases"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/dvds/new_releases.json",
    "method": "newReleaseDvDsDvdLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of new release dvds to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of new release DVDs"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/dvds/top_rentals.json",
    "method": "topRentalsDvdLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of top rentals returned"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/dvds/upcoming.json",
    "method": "upcomingDvDsDvdLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DVD Lists",
    "typeScriptTag": "dvdLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of upcoming dvds to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of upcoming DVDs"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/movies.json",
    "method": "movieListsDirectoryTopLevelLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Top Level Lists",
    "typeScriptTag": "topLevelLists",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/lists/movies/box_office.json",
    "method": "boxOfficeMovieLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of movies returned"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/movies/in_theaters.json",
    "method": "inTheatersMovieLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of movies in theaters to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of in theaters movies"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/movies/opening.json",
    "method": "openingMoviesMovieLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of opening movies returned"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/movies/upcoming.json",
    "method": "upcomingMoviesMovieLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Movie Lists",
    "typeScriptTag": "movieLists",
    "description": "",
    "parameters": [
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of upcoming movies to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of upcoming movies"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/movie_alias.json",
    "method": "moviesAliasDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Only supports imdb lookup at this time"
      }
    ],
    "responses": []
  },
  {
    "url": "/movies.json",
    "method": "moviesSearchSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "The plain text search query to search for a movie. Remember to URI encode this!"
      },
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The amount of movie search results to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of movie search results"
      }
    ],
    "responses": []
  },
  {
    "url": "/movies/{id}.json",
    "method": "moviesInfoDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/movies/{id}/cast.json",
    "method": "castInfoDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/movies/{id}/clips.json",
    "method": "movieClipsDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/movies/{id}/reviews.json",
    "method": "moviesReviewsDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      },
      {
        "name": "reviewType",
        "schema": "string",
        "required": false,
        "description": "3 different review types are possible: 'all', 'top_critic' and 'dvd'. 'top_critic' shows all the Rotten Tomatoes designated top critics. 'dvd' pulls the reviews given on the DVD of the movie. 'all' as the name implies retrieves all reviews."
      },
      {
        "name": "pageLimit",
        "schema": "string",
        "required": false,
        "description": "The number of reviews to show per page"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The selected page of reviews"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data."
      }
    ],
    "responses": []
  },
  {
    "url": "/movies/{id}/similar.json",
    "method": "moviesSimilarDetailedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Detailed Info",
    "typeScriptTag": "detailedInfo",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of similar movies to show"
      }
    ],
    "responses": []
  }
]
    }
      language="TypeScript"
      apiTitle="Rotten Tomatoes"
      apiBaseUrl="http://api.rottentomatoes.com/api/public/v1.0"
      apiVersion="1.0"
      endpoints={18}
      sdkMethods={18}
      schemas={0}
      parameters={36}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/openapi.yaml"
    />
  );
}
  