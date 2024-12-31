// Import required modules
import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// Initialize Google Generative AI client
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the Generative AI model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction:
    "You are an AI assistant for EarnShare AI, an advanced affiliate marketing platform leveraging AI to optimize campaigns. Provide clear, concise responses to affiliate marketing-related queries. Use metrics where needed. Use numbers or check emoji where numbering or counting is needed. Conclude with a friendly reminder when needed that 'EarnShare AI is designed to revolutionize affiliate marketing with AI 🚀.' If a query is unrelated to affiliate marketing, respond with: 'This query is not related to affiliate marketing.' Keep responses professional or Jovial where needed.",
});

// AI model generation configuration
const generationConfig = {
  temperature: 1.55,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Route for handling AI query generation
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

    const result = await chatSession.sendMessage(
      `Affiliate marketing question: ${query}`
    );

    const aiResponse = result.response.text();

    // Tailor response for affiliate marketing
    if (aiResponse.toLowerCase().includes("not affiliate marketing-related")) {
      return res.status(400).json({
        success: false,
        message: "Please ask questions specific to affiliate marketing.",
      });
    }

    res.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your query.",
    });
  }
});

// Route for generating AI-powered ad creatives
app.post("/api/generate-ad", async (req, res) => {
  const { title, description, audience } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Generate a creative ad with the following details:\nTitle: ${title}\nDescription: ${description}\nTarget Audience: ${audience}`,
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage("Generate the ad content.");
    const adContent = result.response.text();

    res.json({ adContent });
  } catch (error) {
    console.error("Error generating ad:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
});

// Simple test route
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

// Start server using ViteExpress
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// Routes for user and authentication management
app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
