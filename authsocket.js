const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const cred = "-1960968355";

// Using template literals to construct the formatted string
const pkt_output = `
LAUNCH * HTTP/1.1
client-type:a
auth-type:C
user-credential:${cred}
`;

const message = Buffer.from(pkt_output);
const SERVER_PORT = 9302;
const SERVER_HOST = "192.168.1.105";

client.on("message", (responseMessage, remote) => {
  console.log(
    `Received response from ${remote.address}:${
      remote.port
    } - ${responseMessage.toString()}`
  );
  client.close();
});

client.bind(() => {
  client.setBroadcast(true);

  client.send(message, SERVER_PORT, SERVER_HOST, (error) => {
    if (error) {
      console.log("Error sending message:", error);
      client.close();
    } else {
      console.log("Message sent to broadcast address!");
    }
  });
});
