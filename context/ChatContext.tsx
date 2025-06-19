'use client';

import { createContext, useContext } from 'react';

export type SendMessageFn = (text: string, isPlaceholder?: boolean, isUser?: boolean) => void;

export const ChatContext = createContext<SendMessageFn | null>(null);

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used inside ChatProvider');
  return ctx;
}

