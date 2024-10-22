const axios = require("axios");

const config = {
  method: "get",
  url: "http://192.168.1.105:9295/sie/ps5/rp/sess/init",
  headers: {
    "User-Agent": "remoteplay Windows",
    "rp-registkey": 3862316466663564,
    "rp-version": 1.0,
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
