// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Corrigé : useEffect ne doit pas dépendre de isAuthenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    console.log('Etat initial :', token ? 'connecté' : 'déconnecté');
  }, []);

  useEffect(() => {
    console.log('🔁 Changement d\'état :', isAuthenticated ? 'connecté' : 'déconnecté');
  }, [isAuthenticated]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    console.log("✅ connecté");
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    console.log("🚪 déconnecté");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
