const CLIENT_ID = "ba495a24-818c-472b-b12d-ff231c1b5745";
const REDIRECT_URI =
  "https://remoteplay.dl.playstation.net/remoteplay/redirect";
const LOGIN_URL = `https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize?service_entity=urn:service-entity:psn&response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=psn:clientapp&request_locale=en_US&ui=pr&service_logo=ps&layout_type=popup&smcid=remoteplay&prompt=always&PlatformPrivacyWs1=minimal&`;

console.log(LOGIN_URL)