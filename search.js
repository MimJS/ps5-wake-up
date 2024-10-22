const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const _DDP_VERSION = "00030010";

// Using template literals to construct the formatted string
const pkt_output = `
SRCH * HTTP/1.1
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
});

client.on("message", (responseMessage, remote) => {
  console.log(
    `Received response from ${remote.address}:${
      remote.port
    } - ${responseMessage.toString()}`
  );
  client.close();
});
