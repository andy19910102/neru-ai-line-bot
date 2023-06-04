# Neru AI LINE Bot Application

![](https://i.imgur.com/IZw3ISF.png)

The Neru AI LINE Bot Application is a AI chatbot, designed specifically for the LINE platform. Developed using the [Neru Monorepo server framework](https://github.com/ghostdevv/neru), this bot seamlessly interacts with users in real-time, thanks to its integration with the advanced machine learning and natural language processing capabilities of the OpenAI API.

## Requirements

- A LINE Developers account
- An OpenAI account
- ngrok
- Node.js

## Setup Instructions

1. Go to [LINE Developers](https://developers.line.biz/en/) and create a new channel.
2. Obtain your `CHANNEL_SECRET` and `CHANNEL_ACCESS_TOKEN`.
3. In the root directory of your project, create a `.env` file and include your `CHANNEL_SECRET` and `CHANNEL_ACCESS_TOKEN` as shown below:
```
LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET
```
4. Go to [OpenAI's official website](https://openai.com/) and get your `OPENAI_ORGANIZATION_ID` and `OPENAI_API_KEY`.
5. Add your `OPENAI_ORGANIZATION_ID` and `OPENAI_API_KEY` to your `.env` file as shown below:
```
LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET
OPENAI_ORGANIZATION_ID=YOUR_OPENAI_ORGANIZATION_ID
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```
6. Download ngrok from the [official website](https://ngrok.com/).
7. Run the command `./ngrok config add-authtoken YOUR_AUTHTOKEN` to add your ngrok authtoken to the configuration.
8. Install the project dependencies with `yarn install` or `npm install`.
9. Start the project using `yarn dev` or `npm run dev`. By default, the project will run on `http://127.0.0.1:4000`.
10. To make your local server accessible externally, run `./ngrok http 4000`. This will generate a HTTPS URL.
11. Copy the HTTPS URL and go back to your LINE channel backend. Paste this URL into the webhook URL field. Make sure to enable the webhook setting.

That's it! You have successfully set up your NERU AI LINE Bot Application. If you encounter any problems, please refer to the official LINE Bot, OpenAI, and ngrok documentation for further guidance.

![](https://i.imgur.com/nqwwBtf.jpg)

## Author
Huang An Sheng

## Contribute
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
The code in this project is licensed under the MIT license.