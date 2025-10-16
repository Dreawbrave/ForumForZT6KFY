import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const seedThreads = [
    { id: 't1', title: 'Добро пожаловать', author: 'Admin', replies: 3, lastAt: '2025-10-10T12:00:00Z' },
    { id: 't2', title: 'Правила форума', author: 'Mod', replies: 0, lastAt: '2025-10-12T09:30:00Z' },
    { id: 't3', title: 'Общий чат', author: 'User42', replies: 14, lastAt: '2025-10-15T18:20:00Z' },
];

export default function Threads() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [threads, setThreads] = useState(seedThreads);
    const [title, setTitle] = useState('');

    const sorted = useMemo(
        () => [...threads].sort((a, b) => new Date(b.lastAt) - new Date(a.lastAt)),
        [threads]
    );

    const createThread = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        const id = `t${Date.now()}`;
        const newThread = {
            id,
            title: title.trim(),
            author: 'You',
            replies: 0,
            lastAt: new Date().toISOString(),
        };
        setThreads([newThread, ...threads]);
        setTitle('');
        navigate(`/boards/${slug}/threads/${id}`);
    };

    return (
        <section className="board-page">
            <div className="board-inner">
                <h2 className="board-heading">Треды: /{slug}</h2>
                <p className="board-sub">Список обсуждений выбранной доски.</p>

                <form className="thread-form" onSubmit={createThread} style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
                    <input
                        className="thread-input"
                        type="text"
                        placeholder="Заголовок нового треда"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)' }}
                    />
                    <button className="thread-button" type="submit" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--accent)', color: '#06101a' }}>
                        Создать тред
                    </button>
                </form>

                <ul className="thread-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                    {sorted.map(t => (
                        <li key={t.id} className="thread-item">
                            <Link to={`/boards/${slug}/threads/${t.id}`} className="board-card">
                                <span className="board-title">{t.title}</span>
                                <span className="board-slug">Автор: {t.author} · Ответов: {t.replies}</span>
                            </Link>
                        </li>
                    ))}
                    {sorted.length === 0 && <li className="board-sub">Пока нет тредов</li>}
                </ul>

                <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <Link to={`/boards/${slug}`} className="back-link">← К доске</Link>
                    <Link to="/" className="back-link">← На главную</Link>
                </div>
            </div>
        </section>
    );
}
