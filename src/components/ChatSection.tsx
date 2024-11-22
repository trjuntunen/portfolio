'use client';

import { useState, useEffect } from 'react'; // Add useEffect here

export default function ChatSection() {
  const [chat, setChat] = useState<{ question: string; answer: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Add the initial assistant message when the component mounts
  useEffect(() => {
    setChat([
      {
        question: '',
        answer: 'Hi! I’m here to answer any questions you have about Theodore\'s professional experience and skills.',
      },
    ]);
  }, []); // Empty dependency array ensures it only runs once

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userQuestion = input.trim();
  
    // Add user's question to the chat
    setChat((prev) => [...prev, { question: userQuestion, answer: '' }]);
    setInput(''); // Clear input
    setLoading(true);
  
    try {
      // Fetch OpenAI response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await response.json();
  
      // Detect if response was cut off
      const maxTokens = 100; // Same value you use in the API call
      const generatedAnswer = data.answer || "Sorry, I couldn't generate an answer.";
      const isCutOff = generatedAnswer.length >= maxTokens;
  
      // Append warning if response is cut off
      const finalAnswer = isCutOff
        ? `${generatedAnswer} <cut short due to max tokens>`
        : generatedAnswer;
  
      // Update chat with AI's answer
      setChat((prev) => {
        const updatedChat = [...prev];
        updatedChat[updatedChat.length - 1].answer = finalAnswer;
        return updatedChat;
      });
    } catch (error) {
      console.error('Error fetching AI response:', error);
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <section id="chat" className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Ask Me Anything</h2>
      <p className="text-center text-gray-600 mb-8">
        Curious about my experience or skills? Ask a question below!
      </p>

      {/* Chat History */}
    <div className="max-w-3xl mx-auto mb-8 bg-white shadow-md rounded-lg p-6 space-y-2">
    {chat.length === 0 && (
        <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
    )}
    {chat.map((message, index) => (
        <div className="space-y-2" key={index}>
        {message.question && (
          <div className="bg-gray-200 p-3 rounded-lg">
            <strong>You:</strong> {message.question}
          </div>
        )}
        <div className="bg-gray-300 p-3 rounded-lg m-0">
          <strong>AI:</strong> {message.answer || 'Typing...'}
        </div>
      </div>
    ))}
    </div>

      {/* Input Box */}
      <form
        onSubmit={handleSendMessage}
        className="max-w-3xl mx-auto flex items-center space-x-4"
      >
        <input
          type="text"
          placeholder="Ask me a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </section>
  );
}
