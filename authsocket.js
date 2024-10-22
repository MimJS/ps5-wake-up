const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const _DDP_VERSION = "00030010";
const cred = "9ba0c0f4df1edc0678f72961bab4a504c1a407bf45271a6bceae8d5241ad9b96";

// Using template literals to construct the formatted string
const pkt_output = `
LAUNCH * HTTP/1.1
client-type:a
auth-type:C
user-credential:${cred}
device-discovery-protocol-version:${_DDP_VERSION}
`;

const message = Buffer.from(pkt_output);
const SERVER_PORT = 9302;
const SECOND_SERVER_PORT = 9303;
const SERVER_HOST = "192.168.1.255";

client.on("message", (responseMessage, remote) => {
  console.log(
    `Received response from ${remote.address}:${
      remote.port
    } - ${responseMessage.toString()}`
  );
  client.close();
});

client.send(message, SERVER_PORT, SERVER_HOST, (error) => {
  if (error) {
    console.log("Error sending message:", error);
    client.close();
  } else {
    console.log("Message sent to broadcast address!");
  }
});

client.send(message, SECOND_SERVER_PORT, SERVER_HOST, (error) => {
  if (error) {
    console.log("Error sending message:", error);
    client.close();
  } else {
    console.log("Message sent to broadcast address!");
  }
});
