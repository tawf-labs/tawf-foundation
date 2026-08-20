import { useState, FormEvent } from 'react';
import { Calculator, Loader2, AlertCircle } from 'lucide-react';
import { tawfAI, isAIConfigured } from '../../lib/ai';
import { ZAKAT_CALCULATOR_PROMPT } from '../../lib/ai-prompts';

interface Fields {
  cash: string;
  gold: string;
  silver: string;
  investments: string;
  inventory: string;
  debts: string;
}

const EMPTY: Fields = { cash: '', gold: '', silver: '', investments: '', inventory: '', debts: '' };

const FIELD_DEFS: { key: keyof Fields; label: string; hint: string }[] = [
  { key: 'cash', label: 'Cash and savings', hint: 'Rupiah in bank and on hand' },
  { key: 'gold', label: 'Gold', hint: 'Grams held for one year' },
  { key: 'silver', label: 'Silver', hint: 'Grams held for one year' },
  { key: 'investments', label: 'Investments', hint: 'Halal investments in Rupiah' },
  { key: 'inventory', label: 'Business inventory', hint: 'Stock held for trade in Rupiah' },
  { key: 'debts', label: 'Short-term debts', hint: 'Due within one year' },
];

export default function ZakatCalculator() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function setField(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');

    const lines = FIELD_DEFS.map((f) => `${f.label}: ${fields[f.key] || '0'}`);
    const message = lines.join('\n');

    const res = await tawfAI(ZAKAT_CALCULATOR_PROMPT, message);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setResult(res.text);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <form onSubmit={onSubmit} className="space-y-4">
        {FIELD_DEFS.map((f) => (
          <div key={f.key}>
            <label className="block text-sm font-semibold text-tawf-green mb-1">{f.label}</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={fields[f.key]}
              onChange={(e) => setField(f.key, e.target.value)}
              placeholder={f.hint}
              className="w-full px-4 py-3 rounded-xl border border-tawf-green/20 bg-white text-tawf-ink focus:outline-none focus:border-tawf-green focus:ring-1 focus:ring-tawf-green"
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-tawf-green text-tawf-sand px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-tawf-green-light transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Calculator className="w-4 h-4" />}
          {loading ? 'Calculating' : 'Calculate Zakat'}
        </button>
        {!isAIConfigured() && (
          <p className="text-xs text-tawf-muted flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-tawf-gold shrink-0" />
            Tawf AI is not configured. Set GEMINI_API_KEY to enable live calculation.
          </p>
        )}
      </form>

      <div className="bg-tawf-sand/50 rounded-2xl border border-tawf-green/10 p-8 min-h-[200px]">
        {error && (
          <div className="flex items-start gap-3 text-sm text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
        {result && (
          <div className="whitespace-pre-wrap text-tawf-ink leading-relaxed">{result}</div>
        )}
        {!result && !error && (
          <p className="text-tawf-muted text-sm leading-relaxed">
            Enter your assets and Tawf AI will estimate your zakat using the Shafi&apos;i approach and
            the nisab of 85 grams of gold. The final ruling rests with the AI Sharia Review.
          </p>
        )}
      </div>
    </div>
  );
}