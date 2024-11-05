const {OpenAI} = require('openai');
require('dotenv').config();
const PDF = require("../models/pdfsModel");

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,  // Use apiKey directly from environment variables
});
exports.uploadPDF = async (req, res) => {
    try {
        const { filename, content } = req.body;
        const pdf = new PDF({ filename, content });
        await pdf.save();
        res.status(201).json(pdf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.LLMexpand = async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-4o-mini'
        });
        const content = response.choices[0].message.content;

        res.status(200).json({ message: content});
    } catch (error) {
        res.status(400).send({message: "Error", error: error.message});
    }
};

