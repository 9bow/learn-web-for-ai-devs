import { useEffect, useState } from 'react';

interface QuizItem {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizProps {
  section: string;
}

export default function Quiz({ section }: QuizProps) {
  const [items, setItems] = useState<QuizItem[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    fetch(`${base}/data/quiz/${section}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: QuizItem[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [section]);

  if (loading) return <div style={{ padding: '1rem' }}>퀴즈를 불러오는 중...</div>;
  if (error) return <div style={{ padding: '1rem', color: '#ef4444' }}>퀴즈 로딩 실패: {error}</div>;
  if (items.length === 0) return null;

  const answered = Object.keys(answers).length;
  const correct = items.filter((q) => answers[q.id] === q.answer).length;
  const allRevealed = items.every((q) => revealed[q.id]);

  return (
    <div style={{ border: '1px solid var(--sl-color-gray-5)', borderRadius: '0.5rem', padding: '1.25rem', margin: '1.5rem 0', background: 'var(--sl-color-gray-7)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>섹션 퀴즈 ({items.length}문항)</h3>
        <div style={{ fontSize: '0.9rem', color: 'var(--sl-color-gray-2)' }}>
          진행: {answered}/{items.length}
          {allRevealed && ` · 정답: ${correct}/${items.length}`}
        </div>
      </div>
      {items.map((q, idx) => {
        const picked = answers[q.id];
        const show = revealed[q.id];
        return (
          <div key={q.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--sl-color-gray-6)' }}>
            <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Q{idx + 1}. {q.question}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {q.options.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrect = show && i === q.answer;
                const isWrong = show && isPicked && i !== q.answer;
                let bg = 'transparent';
                if (isCorrect) bg = 'rgba(16, 185, 129, 0.15)';
                else if (isWrong) bg = 'rgba(239, 68, 68, 0.15)';
                else if (isPicked) bg = 'var(--sl-color-gray-6)';
                return (
                  <button
                    key={i}
                    onClick={() => !show && setAnswers({ ...answers, [q.id]: i })}
                    disabled={show}
                    style={{
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.25rem',
                      border: '1px solid var(--sl-color-gray-5)',
                      background: bg,
                      color: 'inherit',
                      cursor: show ? 'default' : 'pointer',
                    }}
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                );
              })}
            </div>
            {!show && picked !== undefined && (
              <button
                onClick={() => setRevealed({ ...revealed, [q.id]: true })}
                style={{ marginTop: '0.5rem', padding: '0.35rem 0.75rem', fontSize: '0.85rem', borderRadius: '0.25rem', border: '1px solid var(--sl-color-accent)', background: 'transparent', color: 'var(--sl-color-accent-high)', cursor: 'pointer' }}
              >
                정답 확인
              </button>
            )}
            {show && (
              <div style={{ marginTop: '0.5rem', padding: '0.5rem 0.75rem', background: 'var(--sl-color-gray-6)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                <strong>{picked === q.answer ? '정답입니다.' : `오답. 정답은 ${String.fromCharCode(65 + q.answer)}.`}</strong>
                {' '}{q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
