// context/index.tsx
import React, { ReactNode } from "react";

export default function AppContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

