import logger from "./utils/logger";
import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.TOKEN;

const CHANNEL_ID = "913668807015407649";

const url = `https://discord.com/api/v8/channels/${CHANNEL_ID}/typing`;

const headers = {
  authorization: `${TOKEN}`,
};

setInterval(() => {
  fetch(url, {
    method: "POST",
    headers,
  })
    .then((res) => {
      logger.info("typing...");
      if (res.status !== 204) {
        logger.error(res.text);
      }
    })
    .catch((err) => logger.error(err));
}, 3000);
