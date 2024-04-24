import React, { createContext, useState, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component to manage authentication state
export const AuthProvider = ({ children }) => {
  // Initialize user state with null
  const [user, setUser] = useState(null);

  // Provide the user state and setUser function to children components
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
