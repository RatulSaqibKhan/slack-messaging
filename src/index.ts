import { SlackApp } from "./libs/slack";
import * as Actions from "./actions";

// Initializes your app with your bot token and signing secret
const app = new SlackApp();

// Simple text message
Actions.sendSlackSimpleMessage(app);

// Block message
Actions.sendSlackBlockMessage(app);

// Send file
Actions.uploadFileInSlack(app);
