import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};