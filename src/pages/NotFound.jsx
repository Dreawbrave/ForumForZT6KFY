import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="board-page">
            <div className="board-inner">
                <h2 className="board-heading">Страница не найдена</h2>
                <p className="board-sub">Похоже, такого маршрута нет.</p>
                <Link to="/" className="back-link">← На главную</Link>
            </div>
        </section>
    );
}
