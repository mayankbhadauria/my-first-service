"use strict";
const { tagEvent } = require("./serverless_sdk");

module.exports.myFirstFunction = async event => {
  tagEvent("custom-tag", "hello world", { custom: { tag: "data" } });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        message: "My First services called!"
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.mySecondFunction = async event => {
  tagEvent("custom-tag", "hello world", { custom: { tag: "data" } });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        message: "My Second services called!"
      },
      null,
      2
    )
  };
};