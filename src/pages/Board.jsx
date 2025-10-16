import { useParams, Link } from 'react-router-dom';

export default function Board() {
    const { slug } = useParams();

    // Здесь можно подставить реальный id треда с бэкенда.
    // Пока используем демонстрационный id.
    const sampleThreadId = 'welcome';

    return (
        <section className="board-page">
            <div className="board-inner">
                <h2 className="board-heading">Доска: /{slug}</h2>
                <p className="board-sub">Здесь будет контент выбранной доски.</p>

                {/* Кнопки навигации */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '8px 0 16px' }}>
                    <Link to={`/boards/${slug}/threads`} className="back-link">
                        → К списку тредов
                    </Link>
                    <Link to={`/boards/${slug}/threads/${sampleThreadId}`} className="back-link">
                        → Перейти в тред
                    </Link>
                </div>

                <Link to="/" className="back-link">← На главную</Link>
            </div>
        </section>
    );
}
