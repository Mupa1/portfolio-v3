"use client";

import React, { createContext, useContext, useState } from "react";

interface SocialIconsVisibilityContextType {
  isFooterInView: boolean;
  setIsFooterInView: (inView: boolean) => void;
}

const SocialIconsVisibilityContext = createContext<
  SocialIconsVisibilityContextType | undefined
>(undefined);

export const useSocialIconsVisibility = () => {
  const context = useContext(SocialIconsVisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useSocialIconsVisibility must be used within a SocialIconsVisibilityProvider"
    );
  }
  return context;
};

export const SocialIconsVisibilityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <SocialIconsVisibilityContext.Provider
      value={{ isFooterInView, setIsFooterInView }}
    >
      {children}
    </SocialIconsVisibilityContext.Provider>
  );
};
