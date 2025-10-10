import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to="/" className="logo">WinxClub</Link>
                <nav className="main-nav">
                    <Link to="/account" className="icon-link" aria-label="Личный кабинет">
                        {/* Простая иконка пользователя (SVG) */}
                        <svg
                            className="user-icon"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                            <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
