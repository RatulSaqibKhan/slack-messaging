import { App } from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.client.chat.postMessage({
  channel: process.env.SLACK_CHANNEL_ID,
  text: "Hello form bot"
});
