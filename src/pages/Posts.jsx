import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const initialPosts = {
    t1: [
        { id: 'p1', author: 'Admin', body: 'Добро пожаловать на форум!', at: '2025-10-10T12:00:00Z' },
        { id: 'p2', author: 'User11', body: 'Всем привет 👋', at: '2025-10-10T12:05:00Z' },
    ],
    t2: [
        { id: 'p3', author: 'Mod', body: 'Пожалуйста, соблюдайте правила.', at: '2025-10-12T09:35:00Z' },
    ],
    t3: [],
};

export default function Posts() {
    const { slug, threadId } = useParams();
    const [postsByThread, setPostsByThread] = useState(initialPosts);
    const [text, setText] = useState('');
    const endRef = useRef(null);

    const posts = postsByThread[threadId] || [];

    const addPost = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newPost = {
            id: `p${Date.now()}`,
            author: 'You',
            body: text.trim(),
            at: new Date().toISOString(),
        };
        setPostsByThread(prev => ({
            ...prev,
            [threadId]: [...(prev[threadId] || []), newPost],
        }));
        setText('');
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [posts.length]);

    return (
        <section className="board-page">
            <div className="board-inner">
                <h2 className="board-heading">Тред: {threadId} в /{slug}</h2>
                <p className="board-sub">Сообщения и быстрый ответ.</p>

                <div className="posts-list" style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
                    {posts.map(p => (
                        <article key={p.id} className="board-card">
                            <header className="post-head" style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                                <span className="board-title">{p.author}</span>
                                <time className="board-slug" dateTime={p.at}>{new Date(p.at).toLocaleString()}</time>
                            </header>
                            <p style={{ margin: '8px 0 0 0' }}>{p.body}</p>
                        </article>
                    ))}
                    {posts.length === 0 && <p className="board-sub">Пока нет сообщений — станьте первым!</p>}
                    <div ref={endRef} />
                </div>

                <form className="post-form" onSubmit={addPost} style={{ display: 'grid', gap: 8 }}>
          <textarea
              rows={4}
              placeholder="Напишите сообщение…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ resize: 'vertical', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)' }}
          />
                    <button type="submit" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--accent)', color: '#06101a' }}>
                        Отправить
                    </button>
                </form>

                <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <Link to={`/boards/${slug}/threads`} className="back-link">← К списку тредов</Link>
                    <Link to={`/boards/${slug}`} className="back-link">← К доске</Link>
                </div>
            </div>
        </section>
    );
}
