const prompt = require("prompt-sync")();

const CLIENT_ID = "ba495a24-818c-472b-b12d-ff231c1b5745";
const CLIENT_SECRET = "mvaiZkRsAsI1IBkY";

const REDIRECT_URI =
  "https://remoteplay.dl.playstation.net/remoteplay/redirect";
const TOKEN_URL =
  "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/token";

const exchangeCodeForAccess = async (code) => {
  const { access_token: accessToken } = await fetch(TOKEN_URL, {
    method: "POST",
    body: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
      form: {
        code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
      },
    },
  }).then((res) => res.json());

  if (!accessToken) {
    throw new Error("Did not receive OAuth access_token");
  }

  return accessToken;
};

const extractAccountId = (accountInfo) => {
  const asNumber = BigInt(accountInfo.user_id);
  const buffer = Buffer.alloc(8, "binary");
  buffer.writeBigUInt64LE(asNumber);
  return buffer.toString("base64");
};

const main = async () => {
  let url = prompt("URL > ");

  if (!url) {
    return console.log(":3");
  }

  url = new URL(url);
  const code = url.searchParams.get("code");

  if (!code) {
    return console.log("code :3");
  }

  const accessToken = await exchangeCodeForAccess(code);

  const accountInfo = await fetch(`${TOKEN_URL}/${accessToken}`, {
    username: CLIENT_ID,
    password: CLIENT_SECRET,
  }).then((res) => res.json());

  console.log("extractAccountId(accountInfo)", extractAccountId(accountInfo));
};

main();
