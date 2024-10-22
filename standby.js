const dgram = require("dgram");
const client = dgram.createSocket("udp4");

// Assuming these are your variables
const _DDP_CLIENTTYPE = "vr";
const _DDP_AUTHTYPE = "R";
const _DDP_MODEL = "w";
const _DDP_APPTYPE = "r";
const _DDP_VERSION = "00030010";
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
