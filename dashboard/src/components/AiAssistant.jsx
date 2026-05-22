import { useState } from "react";
import axios from "axios";
import "./AiAssistant.css";

const AiAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!prompt) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/ai",
        { prompt }
      );

      setReply(res.data.reply);

    } catch (err) {
      console.log(err);
      setReply("Error getting AI response");
    }

    setLoading(false);
  };

  return (
    <div className="ai-container">

      <h2 className="ai-title">InvestIQ AI Assistant</h2>

      <div className="ai-input-box">
        <input
          type="text"
          placeholder="Ask anything about investing..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askAI()}
        />

        <button onClick={askAI}>
          Ask AI
        </button>
      </div>

      <div className="chat-box">

        {prompt && (
          <div className="user-message">
            <p>{prompt}</p>
          </div>
        )}

        {loading ? (
          <div className="ai-message">
            <p>Thinking...</p>
          </div>
        ) : (
          reply && (
            <div className="ai-message">
              <p>{reply}</p>
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default AiAssistant;