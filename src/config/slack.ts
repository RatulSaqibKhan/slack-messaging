import dotenv from "dotenv";

dotenv.config();

const SLACK_SIGNING_SECRET: string = process.env.SLACK_SIGNING_SECRET || "";
const SLACK_BOT_TOKEN: string = process.env.SLACK_BOT_TOKEN || "";
const SLACK_CHANNEL_ID: string = process.env.SLACK_CHANNEL_ID || "";
const FILE_NAME: string = process.env.FILE_NAME || "";

export { SLACK_SIGNING_SECRET, SLACK_BOT_TOKEN, SLACK_CHANNEL_ID, FILE_NAME };
