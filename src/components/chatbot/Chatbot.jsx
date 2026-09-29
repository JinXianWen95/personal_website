import React, { useState, useRef, useEffect, useCallback } from 'react';
import { streamChatMessage } from '../../services/openrouter';
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Jin's Career Assistant. Ask me about his experience, skills, projects, or anything else you'd like to know!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bootSequence, setBootSequence] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setBootSequence(true);
      const timer = setTimeout(() => setBootSequence(false), 1800);
      return () => clearTimeout(timer);
    }
    setBootSequence(false);
  }, [isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    const assistantId = (Date.now() + 1).toString();
    const assistantMessage = { id: assistantId, role: 'assistant', content: '' };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    try {
      await streamChatMessage(
        [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
        (chunk) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: msg.content + chunk } : msg
            )
          );
        },
        () => {
          setIsLoading(false);
        },
        (err) => {
          setError(err.message);
          setIsLoading(false);
        },
        { signal: abortControllerRef.current.signal }
      );
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setError(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  if (!isOpen) {
    return (
      <button
        className="chatbot-toggle"
        onClick={handleToggle}
        aria-label="Open Career Assistant"
        title="Career Assistant"
      >
        <svg className="chatbot-toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    );
  }

  return (
    <div className="chatbot-container">
      <div className={`chatbot-window ${bootSequence ? 'booting' : ''}`} role="dialog" aria-label="Career Assistant">
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <h4>Career Assistant</h4>
              <span className="chatbot-status">{bootSequence ? 'BOOTING...' : 'READY TO HELP'}</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={handleToggle} aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chatbot-messages" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-message ${msg.role}`}>
              <div className="chatbot-message-bubble">
                <div className="chatbot-message-content">{msg.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chatbot-message assistant loading">
              <div className="chatbot-message-bubble">
                <div className="chatbot-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="chatbot-error" role="alert">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form className="chatbot-input-form" onSubmit={handleSend}>
          <div className="chatbot-input-wrapper">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Jin's experience, skills, projects..."
              rows={1}
              disabled={isLoading}
              aria-label="Message"
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <p className="chatbot-hint">Press Enter to send, Shift+Enter for new line</p>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;