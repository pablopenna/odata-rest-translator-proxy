# odata-rest-translator-proxy
Proxy to acts as a middle man between a REST client and an OData server

[![](https://img.plantuml.biz/plantuml/svg/TP313SCm24NlJC42MQ27AXiawWQevc2fiQaXKhDzZMjLIQEUWF_WoVAeHiNMvG5IQxn7eMHuOpKanL8hSB9e6yublpOFnPl3-XJ8o57s1W3y3eVhP_LIDS_LJMtSvHH8x4oRfLCENzxYWrKb9-M_sb_ihzfhEuUHKwW_y0O0)](https://editor.plantuml.com/uml/TP313SCm24NlJC42MQ27AXiawWQevc2fiQaXKhDzZMjLIQEUWF_WoVAeHiNMvG5IQxn7eMHuOpKanL8hSB9e6yublpOFnPl3-XJ8o57s1W3y3eVhP_LIDS_LJMtSvHH8x4oRfLCENzxYWrKb9-M_sb_ihzfhEuUHKwW_y0O0)

## Running locally

* Build

```sh
npm run build
```

* Run

```sh
npm run start
```

* Test

```sh
curl --request POST --url http://localhost:8000/ --header 'content-type: application/json' --data '{"foo":"bar", "test": 0, "nest":{"one":1,"two":2}}'

```

## Notes

### Sample Event and Context content from lambda-local

```json
Event: {
  "version": "2.0",
  "routeKey": "$default",
  "rawPath": "/northwind/$metadata",
  "rawQueryString": "?format=json",
  "cookies": {},
  "headers": {
    "host": "localhost:8000",
    "user-agent": "curl/8.5.0",
    "accept": "*/*",
    "content-type": "application/json",
    "content-length": "50"
  },
  "queryStringParameters": {
    "format": "json"
  },
  "requestContext": {
    "accountId": "123456789012",
    "apiId": "api-id",
    "authentication": {},
    "authorizer": {},
    "http": {
      "method": "POST",
      "path": "/northwind/$metadata",
      "protocol": "HTTP/1.1",
      "sourceIp": "::1",
      "userAgent": "curl/8.5.0"
    },
    "requestId": "id",
    "routeKey": "$default",
    "stage": "$default",
    "time": "2026-03-13T07:26:14.077Z",
    "timeEpoch": 1773386774077
  },
  "body": {
    "foo": "bar",
    "test": 0,
    "nest": {
      "one": 1,
      "two": 2
    }
  },
  "isBase64Encoded": false
}
Context: {
  "callbackWaitsForEmptyEventLoop": false,
  "functionName": "handler",
  "functionVersion": "1.0",
  "invokedFunctionArn": "arn:aws:lambda:us-east-1:498737498820:function:handler:1.0",
  "memoryLimitInMB": "18388",
  "awsRequestId": "f37cfe66-6a6d-e4ec-952c-587e49e920b9",
  "logGroupName": "Group name",
  "logStreamName": "Stream name",
  "identity": null,
  "clientContext": null,
  "_stopped": false,
  "__lambdaLocal": {}
}

```