// pages/PrivacyPage.js
import React from "react";
import English from "./English";
import Polish from "./Polish";

const Cookies = () => {
  const lang = localStorage.getItem("lang") || "en";
  return lang == "en" ? <English /> : <Polish />;
};

export default Cookies;
