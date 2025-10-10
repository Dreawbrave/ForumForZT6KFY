import { useParams, Link } from 'react-router-dom';

export default function Posts() {
    const { slug } = useParams();
    return (
        <section className="board-page">
            <div className="board-inner">
                <h2 className="board-heading">Доска: /{slug}</h2>
                <p className="board-sub">Здесь будет контент выбранной доски.</p>
                <Link to="/" className="back-link">← На главную</Link>
            </div>
        </section>
    );
}
