import { App, Block, KnownBlock } from "@slack/bolt";
import * as slackConfig from "../config/slack";
import Stream from "stream";

export class SlackApp {
  private app: App;

  constructor() {
    if (!this.app) {
      this.app = new App({
        token: slackConfig.SLACK_BOT_TOKEN,
        signingSecret: slackConfig.SLACK_SIGNING_SECRET,
      });
    }
  }

  public getApp(): App {
    return this.app;
  }

  public async sendMessage(text: string, blocks?: (KnownBlock | Block)[]) {
    try {
      return await this.app.client.chat.postMessage({
        channel: slackConfig.SLACK_CHANNEL_ID,
        text,
        blocks,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  public async sendFile(
    filename: string,
    file: Buffer | Stream | string,
    initial_comment: string,
    title: string
  ) {
    try {
      return await this.app.client.files.uploadV2({
        channel_id: slackConfig.SLACK_CHANNEL_ID,
        file,
        filename,
        initial_comment,
        title,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
}
