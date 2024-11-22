import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("MODELS");
const models = await openai.models.list();
console.log(models.data.map((model) => model.id));
// Read resume context
const resumePath = path.join(process.cwd(), "public/assets/resumeContext.txt");
const resumeContext = fs.readFileSync(resumePath, "utf-8");

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-4-turbo"
      messages: [
        {
          role: "system",
          content: `You are an assistant helping to answer questions about Theodore's professional experience, skills, and achievements. 
                    Your audience consists of potential employers asking about Theodore. 
                    Always refer to Theodore in the third person and answer professionally as if you are highlighting Theodore's qualifications to them.`,
        },
        { role: "system", content: resumeContext },
        { role: "user", content: question },
      ],
      max_tokens: 120, // Adjust as needed
    });

    const answer = response.choices[0]?.message?.content || "Sorry, I couldn't generate an answer.";

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
