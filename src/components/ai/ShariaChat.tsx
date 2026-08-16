import { useState, FormEvent } from 'react';
import { Send, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { tawfAI, isAIConfigured } from '../../lib/ai';
import { SHARIA_QA_PROMPT } from '../../lib/ai-prompts';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function ShariaChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Ask me about zakat, waqf, sadaqah, qurban, or any Islamic finance term. I explain in plain language. I do not issue fatwas.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSend(e: FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    setLoading(true);

    const res = await tawfAI(SHARIA_QA_PROMPT, question);
    setLoading(false);

    setMessages((prev) => [
      ...prev,
      { role: 'assistant', text: res.error || res.text || 'I could not produce an answer.' },
    ]);
  }

  return (
    <div className="bg-white rounded-2xl border border-tawf-green/10 overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-tawf-green/10 bg-tawf-sand/40">
        <Sparkles className="w-5 h-5 text-tawf-gold" />
        <span className="text-sm font-semibold tracking-widest uppercase text-tawf-green">Tawf AI</span>
      </div>

      <div className="flex-1 p-6 space-y-4 max-h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-tawf-green text-tawf-sand rounded-br-none'
                  : 'bg-tawf-sand text-tawf-ink rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl bg-tawf-sand text-tawf-muted flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Thinking
            </div>
          </div>
        )}
      </div>

      <form onSubmit={onSend} className="px-6 py-4 border-t border-tawf-green/10 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question"
          className="flex-1 px-4 py-3 rounded-full border border-tawf-green/20 bg-white text-tawf-ink focus:outline-none focus:border-tawf-green"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-flex items-center justify-center w-12 h-12 bg-tawf-green text-tawf-sand rounded-full hover:bg-tawf-green-light transition-colors disabled:opacity-50"
          aria-label="Send"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </button>
      </form>

      {!isAIConfigured() && (
        <div className="px-6 pb-4">
          <p className="text-xs text-tawf-muted flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-tawf-gold shrink-0" />
            Tawf AI is not configured. Set GEMINI_API_KEY to enable live answers.
          </p>
        </div>
      )}
    </div>
  );
}