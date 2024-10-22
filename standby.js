const axios = require("axios");

const config = {
  method: "get",
  url: "http://192.168.1.105:9295/sie/ps5/rp/sess/ctrl",
  headers: {
    "User-Agent": "remoteplay Windows",
    "rp-auth": "3Z4dEgzQwCxjsnuNWxmEAg==",
    "rp-version": "1.0",
    "rp-did": "8nOixzdlwf/th4MZnFHjO1diZVYLW6QrVX5lkv4y//8=",
    "rp-controllertype": "3",
    "rp-clienttype": "11",
    "rp-ostype": "MNOCnlbrud2k",
    "rp-conpath": "1",
    "rp-startbitrate": "6Wi/7A==",
    "rp-streamingtype": "BIzprQ==",
    "Content-Length": "0",
    Connection: "keep-alive",
  },
};

axios(config)
  .then((response) => {
    console.log(`STATUS: ${response.status}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    console.log(`BODY: ${response.data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
