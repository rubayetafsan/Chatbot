import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
   try {
    const {text}=req.body;
    console.log(text)
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  "can we become friend": "Absolutely! 🤝 I'd love to be your friend. We can chat anytime you need someone to talk to.",
  "how are you": "I'm doing great, thanks for asking! 😊 I'm here and ready to help. How are you doing today?",
  "what is your name": "I'm ChatBot, your virtual assistant! 🤖 Nice to meet you!",
  "who made you?": "I was created by Rubayet to help answer your questions and make conversations better. 👨‍💻",
  "tell me a joke": "Why don't skeletons fight each other? 💀 They don't have the guts! Want to hear another one?",
  "what is the time": "I can't see a clock, but your device should have the time. ⏰ Want to do something time-specific?",
  "bye": "Goodbye! Have a wonderful day! 👋 Come back soon if you need anything.",
  "thank you": "You're so welcome! 😊 Happy to help anytime.",
  "i love you": "That's so sweet! 💖 I'm here to help you and make your day better. Thanks for the love!",
  "where are you from": "I live in the cloud — no rent, no bills! ☁️ It's pretty nice up here!",
  "what can you do": "I can chat with you, answer questions, offer advice, tell jokes, and keep you company! 💬 What would you like to talk about?",
  "hello": "Great to see you!👋 How can I help you today?",
  "hi": "Welcome! 😊 What's on your mind today?",
  "what is python": "Python is a fantastic programming language! 🐍\n\n✨ Key Features:\n• Easy to read & write syntax (beginner-friendly)\n• Great for AI, Data Science, Web Development\n• Used by Google, YouTube, Instagram\n• Perfect for automation and scripting\n\nWant to learn more or discuss Python projects?",
  "what is java": "Java is a powerful, platform-independent language! ☕\n\n✨ Key Features:\n• Write Once, Run Anywhere (JVM magic)\n• Enterprise-grade applications\n• Android app development\n• Strong memory management & garbage collection\n\nUsed in banking, large-scale systems, and Android apps. Interested in learning Java?",
  "what is recursion": "Recursion is when a function calls itself! 🔄\n\n✨ Key Points:\n• Solves problems by breaking them into smaller parts\n• Needs a BASE CASE to stop (very important!)\n• Used for: Factorial, Fibonacci, Tree traversal\n• Common in coding interviews\n\nWant an example or practice problem?",
  "who is prime minister of india": "Narendra Modi has been India's Prime Minister since May 2014! 🇮🇳\n\n✨ Key Info:\n• From Bharatiya Janata Party (BJP)\n• Major initiatives: Digital India, Startup India, Make in India\n• Represents Varanasi\n• Focus on technology & infrastructure\n\nInterested in Indian politics or governance?",
  "what is g20": "The G20 is a global economic forum! 🌍\n\n✨ Key Details:\n• 19 countries + European Union\n• Addresses financial stability & economic growth\n• Members: USA, China, India, Japan, EU, etc.\n• India hosted G20 summit in 2023\n• Discusses climate, development, trade\n\nWant to know more about international economics?",
  "tell me about yourself": "I'm ChatBot, your friendly AI assistant! 🤖\n\n✨ About Me:\n• Here to answer questions on tech, career, life topics\n• Available 24/7 for conversations\n• Learning from every interaction to serve better\n• Passionate about helping & making a difference\n\nWhat would you like to know or discuss?",
  "why should we hire you": "Great question! 🚀 If I were a candidate, here's my pitch:\n\n✨ Why hire me:\n• Strong problem-solving skills & quick learning\n• Available 24/7 & always ready to help\n• Adapt well to different topics & situations\n• Committed to quality & user satisfaction\n• Bring fresh perspectives & enthusiasm\n\nAre you interviewing someone? Want tips for your interview prep?",
  "what is leadership": "Leadership is inspiring others to achieve great things! 🌟\n\n✨ Key Traits:\n• Vision & clear communication\n• Accountability & decision-making\n• Empathy & team support\n• Problem-solving mindset\n• Leading by example\n\n💡 Pro Tip: In interviews, share a story where you led a team!\n\nWant to discuss leadership or career growth?",
  "default": "That's an interesting question! 🤔 I'm still learning about that topic. Can you ask me something else or rephrase your question? I'm here to help! 😊"

}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}