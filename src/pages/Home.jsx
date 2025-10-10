import { Link } from 'react-router-dom';

const boards = [
    { title: 'Общий', slug: 'general' },
    { title: 'Новости', slug: 'news' },
    { title: 'Вопросы', slug: 'qa' },
    { title: 'Фидбек', slug: 'feedback' },
];

export default function Home() {
    return (
        <section className="home">
            <div className="boards-wrap">
                <h1 className="home-title">Доски</h1>
                <div className="boards-grid">
                    {boards.map(b => (
                        <Link key={b.slug} to={`/boards/${b.slug}`} className="board-card">
                            <span className="board-title">{b.title}</span>
                            <span className="board-slug">/{b.slug}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
