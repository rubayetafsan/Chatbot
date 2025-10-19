
## Chatbot

A simple and interactive chatbot assistant built with Node.js, Expressjs, and MongoDB. This chatbot responds to predefined questions, tells jokes, provides conversational help, and demonstrates basic AI interaction capabilities.

---

## Features

- Predefined conversational responses to common questions
- User and bot messages persisted via MongoDB with Mongoose
- REST API backend architecture using Express.js
- JSON request/response format for easy frontend integration
- Lightweight, extensible structure

---

## Screenshots


---

## Getting Started

### Clone the Repository

```
git clone https://github.com/rubayetafsan/Chatbot.git
cd Chatbot
```

### Install Dependencies

```
npm install
```

### Environment Variables

Create a `.env` file in the root directory with these contents:

```
PORT=4002
MONGO_URI=<your_mongodb_connection_string>
```

Replace `<your_mongodb_connection_string>` with your actual MongoDB Atlas URI.

### Start the Server

```
npm start
```

The server will run on `http://localhost:4002/chatbot/v1/`

---

## Usage

Send a POST request to `/chatbot/v1/message` with a JSON body:

```
{
  "text": "<your message here>"
}
```

Example response:

```
{
  "userMessage": "Who made you?",
  "botMessage": "I was created by Rubayet to help answer your questions and make conversations better."
}
```

---

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.
