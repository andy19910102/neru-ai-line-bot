import { route } from '@nerujs/express';
import * as line from '@line/bot-sdk';
import 'dotenv/config'
import config from '../config.js';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = route((req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

const client = new line.Client(config);
async function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: event.message.text }],
    });

    const aiMessage = completion.data.choices[0].message.content;

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: aiMessage
    });
}
