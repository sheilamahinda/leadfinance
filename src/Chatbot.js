// Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput(''); // Clear input field

    try {
      // Send user input to Gemini API and get response
      const response = await fetch('https://api.gemini.com/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer AiZaSyDJfXDqn3o1FCLgbXkf-TzMxGQ52Gt4oUg`,
        },
        body: JSON.stringify({ question: input }),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Log the response to check its structure

      const botResponse = {
        text: data.answer ? data.answer : "I'm not sure how to help with that. Could you provide more details or ask something else?",
        sender: "bot",
      };

      // Update messages with the bot's response
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm having trouble understanding that. Could you rephrase?", sender: "bot" }
      ]);
    }
  };

  return (
    <div className="chatbot">
      <h3>Chat with Us</h3>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
