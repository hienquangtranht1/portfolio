import React, { createContext, useState, useContext, useEffect } from 'react';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('vi');

    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLang') || 'vi';
        setLang(savedLang);
    }, []);

    const toggleLang = (l) => {
        setLang(l);
        localStorage.setItem('preferredLang', l);
    };

    const t = (viText, enText) => lang === 'vi' ? viText : enText;

    return (
        <LangContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LangContext.Provider>
    );
};
