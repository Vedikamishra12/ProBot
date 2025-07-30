

import{
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,

} from "@google/generative-ai";


const apiKey= import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

// async function runChat(prompt) {
//   const genAI= new GoogleGenAI(API_KEY);
//   const model = genAI.getGenerativeModel ({
//     model:MODEL_NAME,
   const generationConfig={
    temperature:0.9,
    topK:1,
    topP:1,
    maxOutputTokens:2048,
    responseMimeType:"text/plain",
  }

   async function runChat(prompt) {
    const chatSession= model.startChat({
      generationConfig,
      history:[],
    })
     
    const result= await chatSession.sendMessage(prompt)
    const response= result.response.text()
    // console.log(result.response.text());
    return response;

  }
export default runChat;

