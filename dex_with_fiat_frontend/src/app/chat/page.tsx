'use client';
export const dynamic = 'force-dynamic';
import StellarChatInterface from '@/components/StellarChatInterface';
export default function ChatPage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <StellarChatInterface />
    </main>
  );
}
