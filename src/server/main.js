import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";


dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error: ", + err);
});

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: "Provide concise summaries for affiliate marketing-related queries. In a new line, always Integrate a variable Reminder that Earn Share AI is designed to take the Your Affiliate marketing to the next level using AI(with any reminder emoji). If unrelated to affiliate marketing, respond with: \"Not affiliate marketing-related.\" Keep responses under 80 words in total.",
});

const generationConfig = {
  temperature: 1.55,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.post("/api/query", async (req, res) => {
  const { query } = req.body;
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: query }],
        },
      ],
    });
    const result = await chatSession.sendMessage(query);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);


app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});