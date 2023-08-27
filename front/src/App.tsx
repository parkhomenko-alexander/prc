import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import ConfiguratorCoreTonals from './components/ConfiguratorCoreTonals/ConfiguratorCoreTonals';
import Clients from './components/Clients/Clients';
import TonalMatcher from './components/TonalMatcher/TonalMatcher';
import NotFound from './components/NoFound/NotFound';

import './App.module.css'
import s from './App.module.css'

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { setPalette } from './store/action-creators/tonalPhotosActions';
import { useActions } from './hooks/useActions';

const App: React.FC = () => {
    const { setPalette } = useActions()

    useEffect(() => {
        setPalette()
    })

    return (
        <>
            <Router>
                <Header />
                <div className={s.appContainer}>
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/pickup-tonal' />} />
                        <Route path='/configure-tonals' element={<ConfiguratorCoreTonals />} />
                        <Route path='/clients' element={<Clients />} />
                        <Route path='/pickup-tonal' element={<TonalMatcher />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default App;
