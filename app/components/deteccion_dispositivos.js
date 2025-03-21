import { areStrings, getElementById } from "../helpers/utils.js";
const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  try {
    !areStrings(id);
  } catch (err) {
    console.error(err.message);
  }

  const $serviceAgent = getElementById(id);

  if (ua) {
    console.log("div", $serviceAgent, "\n", id);
  }
}
