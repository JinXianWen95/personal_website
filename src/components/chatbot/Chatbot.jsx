import React, { useState } from 'react';
import './chatbot.css'; // Make sure this path matches where you save the CSS file

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h4>Career Assistant</h4>
                    </div>
                    <iframe
                        src="https://xwjin-career-conversation.hf.space?__theme=dark"
                        title="Career Conversation Chatbot"
                        allow="microphone"
                        className="chatbot-iframe"
                    ></iframe>
                </div>
            )}
            
            <button 
                className="chatbot-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
};

export default Chatbot;