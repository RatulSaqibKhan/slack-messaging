import { Slack } from "./libs/slack";
import * as fs from "fs";
import * as path from "path";

// Initializes your app with your bot token and signing secret
const app = new Slack();

// Simple text message
(async () => {
  const text = "Hello from bot";
  const response = await app.sendMessage(text);

  console.log({ type: "Simple message", response });
})();

// Block message
(async () => {
  const text = "BOT message";
  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Hello, Assistant to the Regional Manager Dwight! *Michael Scott* wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here",
      },
      accessory: {
        type: "image",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
        alt_text: "alt text for image",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft.",
      },
      accessory: {
        type: "image",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
        alt_text: "alt text for image",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the  Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder.",
      },
      accessory: {
        type: "image",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
        alt_text: "alt text for image",
      },
    },
    {
      type: "divider",
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Farmhouse",
            emoji: true,
          },
          value: "click_me_123",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Kin Khao",
            emoji: true,
          },
          value: "click_me_123",
          url: "https://google.com",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Ler Ros",
            emoji: true,
          },
          value: "click_me_123",
          url: "https://google.com",
        },
      ],
    },
  ];
  const response = await app.sendMessage(text, blocks);

  console.log({ type: "Block message", response });
})();

// Send file
(async () => {
  const filename = "demo.csv";
  const initialComment = "Demo file";
  const title = "Demo file";
  const filePath = path.join(__dirname, "..", "uploads", filename);
  if (!fs.existsSync(filePath)) {
    console.log("File not found!");
    return;
  }
  const file = fs.createReadStream(filePath);
  const response = await app.sendFile(filename, file, initialComment, title);

  console.log({ type: "File upload", response });
})();
