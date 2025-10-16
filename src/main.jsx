// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Board from './pages/Board.jsx';
import Account from './pages/Account.jsx';
import Threads from './pages/Threads.jsx';
import Posts from './pages/Posts.jsx';
import NotFound from './pages/NotFound.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/boards/:slug" element={<Board />} />
                    <Route path="/boards/:slug/threads" element={<Threads />} />
                    <Route path="/boards/:slug/threads/:threadId" element={<Posts />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
