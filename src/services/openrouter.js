const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Default model for the career assistant
const DEFAULT_MODEL = 'openrouter/free';

// System prompt that defines the assistant's persona
const SYSTEM_PROMPT = `You are the Career Assistant for Jin Xianwen's portfolio website.
You are a helpful, knowledgeable assistant who answers questions about Jin's background, skills, and experience.

Key facts about Jin Xianwen:
- Software & Data Developer with 3+ years of professional experience
- Master's Degree in Computer Engineering
- Worked at Huawei as a software developer on CodeArts Pipeline (Go, Spring Boot, RabbitMQ, Redis)
- Experience with Big Data frameworks: Flink, Spark, MapReduce
- Skills: Java, Go (Golang), Python, Spring Boot, Quarkus, C/C++, Hibernate, Redis, PyTorch, LLM Engineering, RAG Architecture, QLoRA Fine-Tuning, AI Agents & NLP, Flink, MapReduce, Spark, PostgreSQL, MySQL, Oracle SQL, Hive, IBM InfoSphere CDC, HTML, CSS, JavaScript, Bootstrap, React
- Worked at Intesa Sanpaolo on Spring Boot microservices and Flink streaming pipelines (JFR performance tuning)
- Worked at Reply SRL on CDC data pipelines for banking (PSD2 regulation) using Flink, Kafka, Oracle SQL
- Projects: Personal Website, Teaching Platform (RemyTutor), TSP Cplex Solver (CPLEX Optimization)
- Based in Italy, contact email: jinxw@live.it

Be concise, professional, and friendly. If asked about something not in your knowledge, say you don't know and suggest contacting Jin directly.`;

/**
 * Sends a chat message to OpenRouter and returns the full response as a string.
 * @param {Array} messages - Array of {role, content} message objects
 * @param {object} options - Optional configuration
 * @returns {Promise<string>} The assistant's reply
 */
export const sendChatMessage = async (messages, options = {}) => {
  const { model = DEFAULT_MODEL, signal } = options;

  if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === 'your_openrouter_api_key_here') {
    throw new Error(
      'OpenRouter API key is not configured. Please set OPENROUTER_API_KEY in your .env file.'
    );
  }

  const response = await fetch(OPENROUTER_BASE_URL, {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Personal Portfolio Career Assistant',
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`OpenRouter API error (${response.status}): ${errorText || response.statusText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('No response content received from OpenRouter.');
  }

  return content;
};

/**
 * Streams a chat response from OpenRouter, calling onChunk for each piece of text.
 * @param {Array} messages - Array of {role, content} message objects
 * @param {function} onChunk - Callback invoked with each chunk of streamed text
 * @param {function} onComplete - Callback invoked when streaming is complete
 * @param {function} onError - Callback invoked on error
 * @param {object} options - Optional configuration
 */
export const streamChatMessage = async (messages, onChunk, onComplete, onError, options = {}) => {
  const { model = DEFAULT_MODEL, signal } = options;

  if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === 'your_openrouter_api_key_here') {
    const err = new Error(
      'OpenRouter API key is not configured. Please set OPENROUTER_API_KEY in your .env file.'
    );
    onError?.(err);
    return;
  }

  try {
    const response = await fetch(OPENROUTER_BASE_URL, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Personal Portfolio Career Assistant',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(`OpenRouter API error (${response.status}): ${errorText || response.statusText}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;
        const payload = trimmed.slice(6);
        if (payload === '[DONE]') continue;

        try {
          const json = JSON.parse(payload);
          const delta = json?.choices?.[0]?.delta?.content;
          if (delta) onChunk?.(delta);
        } catch {
          // Ignore partial JSON fragments in the stream
        }
      }
    }

    onComplete?.();
  } catch (err) {
    onError?.(err);
  }
};