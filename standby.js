const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const pkt_output = `
CONTROL * HTTP/1.1
command:REST_MODE
`;

const message = Buffer.from(pkt_output);
const SERVER_PORT = 9302;
const BROADCAST_IP = "192.168.1.255";

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

  client.send(message, SERVER_PORT, BROADCAST_IP, (error) => {
    if (error) {
      console.log("Error sending message:", error);
      client.close();
    } else {
      console.log("Message sent to broadcast address!");
    }
  });
});
