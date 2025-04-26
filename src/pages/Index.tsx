
import React, { useState } from 'react';
import { Gift, PartyPopper, Cake, MessageSquare, WhatsApp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AirdropClaim from '@/components/AirdropClaim';

const Index = () => {
  const [showAirdrop, setShowAirdrop] = useState(true);
  const [claimed, setClaimed] = useState(false);

  const handleAirdropComplete = () => {
    setClaimed(true);
    setShowAirdrop(false);
  };

  if (claimed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-indigo-50 p-4">
        <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
          <PartyPopper className="w-16 h-16 mx-auto text-yellow-500 animate-bounce" />
          <h1 className="text-4xl font-bold text-purple-700">
            🎉 Happy Birthday B.O.B! 🎉
          </h1>
          <p className="text-xl text-gray-700">
            Congratulations on claiming your special birthday airdrop! 🚀
          </p>
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Need USDT/NAIRA Exchange? 💱
            </h2>
            <p className="text-gray-600 mb-4">
              Contact B.O.B for professional crypto services
            </p>
            <a
              href="https://wa.me/2348109392892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <WhatsApp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <footer className="fixed bottom-4 text-center w-full text-gray-600">
          Powered by GRIDVEM
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-indigo-50 p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="flex justify-center items-center gap-3">
          <Gift className="w-12 h-12 text-purple-600" />
          <Cake className="w-12 h-12 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-purple-700">
          Hey B.O.B! 🎂
        </h1>
        <p className="text-xl text-gray-700">
          A special birthday airdrop awaits you! 🎁
        </p>
        {showAirdrop && (
          <AirdropClaim onComplete={handleAirdropComplete} />
        )}
      </div>
      <footer className="fixed bottom-4 text-center w-full text-gray-600">
        Powered by GRIDVEM
      </footer>
    </div>
  );
};

export default Index;
