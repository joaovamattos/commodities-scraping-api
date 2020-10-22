export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description:
      "This is a simple api to return a today value of commodities.  You can find out more about at [https://github.com/joaovamattos/commodities-scraping-api](https://github.com/joaovamattos/commodities-scraping-api)",
    version: "1.0.0",
    title: "Commodities Scraping Api",
    license: {
      name: "MIT",
      url:
        "https://github.com/joaovamattos/commodities-scraping-api/blob/main/LICENSE",
    },
  },
  host: "commodities-scraping-api.herokuapp.com",
  tags: [
    {
      name: "commodity",
    },
  ],
  schemes: ["https"],
  paths: {
    "/{commodity}": {
      get: {
        tags: ["commodity"],
        summary: "Get today value by commodity name",
        description: "",
        operationId: "getValue",
        produces: ["application/json"],
        parameters: [
          {
            name: "commodity",
            in: "path",
            description:
              "The name that needs to be fetched. Use soja for testing. ",
            required: true,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "successful operation",
            schema: {
              $ref: "#/definitions/ApiResponse",
            },
          },
          "400": {
            description: "Invalid commodity name supplied",
          },
          "404": {
            description: "Commodity not found",
          },
        },
      },
    },
  },
  definitions: {
    ApiResponse: {
      type: "object",
      properties: {
        value: {
          type: "string",
        },
      },
    },
  },
};
