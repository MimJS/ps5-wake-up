const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const CLIENT_ID = "ba495a24-818c-472b-b12d-ff231c1b5745";
const CLIENT_SECRET = "mvaiZkRsAsI1IBkY";
const REDIRECT_URI =
  "https://remoteplay.dl.playstation.net/remoteplay/redirect";
const LOGIN_URL = `https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize?service_entity=urn:service-entity:psn&response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=psn:clientapp&request_locale=en_US&ui=pr&service_logo=ps&layout_type=popup&smcid=remoteplay&prompt=always&PlatformPrivacyWs1=minimal&`;
const TOKEN_URL =
  "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/token";

const auth = {
  client_id: "ba495a24-818c-472b-b12d-ff231c1b5745",
  community_domain: "b4",
  country_code: "RU",
  dcim_id: "ce2fe82d-2c9e-4b58-9cbf-c59fc3a86e45",
  expiration: "2024-10-22T15:51:09.990Z",
  grant_type: "authorization_code",
  is_sub_account: False,
  language_code: "ru",
  online_id: "daizygod",
  scopes: "psn:clientapp",
  user_id: "511835044004402192",
  user_uuid: "74948b68-fc64-4c86-81da-ee378c7d8fab",
};

// Assuming these are your variables
const _DDP_CLIENTTYPE = "vr";
const _DDP_AUTHTYPE = "R";
const _DDP_MODEL = "w";
const _DDP_APPTYPE = "r";
const _DDP_VERSION = "00030010";
const ACCOUNT_ID = "EJR6vUJnGgc=";
const cred = "-1960968355";

// Using template literals to construct the formatted string
const pkt_output = `
CONTROL * HTTP/1.1
command: REST_MODE
client-type:${_DDP_CLIENTTYPE}
auth-type:${_DDP_AUTHTYPE}
model:${_DDP_MODEL}
app-type:${_DDP_APPTYPE}
user-credential:${cred}
device-discovery-protocol-version:${_DDP_VERSION}
`;

const message = Buffer.from(pkt_output);
const SERVER_PORT = 9302;
const SERVER_HOST = "192.168.1.105";

client.send(message, SERVER_PORT, SERVER_HOST, (error) => {
  if (error) {
    console.log("Error sending message:", error);
    client.close();
  } else {
    console.log("Message sent!");
  }

  client.close();
});
