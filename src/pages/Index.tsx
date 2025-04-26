import React, { useState } from 'react';
import { Gift, PartyPopper, Cake, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import AirdropClaim from '@/components/AirdropClaim';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  const [showAirdrop, setShowAirdrop] = useState(true);
  const [claimed, setClaimed] = useState(false);
  const [copied, setCopied] = useState(false); // for "copied" text

  const airtimeCode = "SCRATCH WITH YOUR FINGER😂"; // <-- replace with real code
  const airtimeCodeRaw = "*311*94333886226712674#"; // <-- same code without spaces

  const handleAirdropComplete = () => {
    setClaimed(true);
    setShowAirdrop(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(airtimeCodeRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // copied text disappears after 2 seconds
  };

  if (claimed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-indigo-50 p-4">
        <AudioPlayer />
        <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
          <PartyPopper className="w-16 h-16 mx-auto text-yellow-500 animate-bounce" />
          <h1 className="text-4xl font-bold text-purple-700">
            🎉 Happy Birthday B.O.B! 🎉
          </h1>
          <p className="text-xl text-gray-700">
            Congratulations on claiming your special birthday airdrop! 🚀 ||

            🎉🎂
Wishing you a year filled with endless success, unstoppable joy, More USDT , NO DUST and all the blessings your heart desires.
Keep shining, keep inspiring, and keep being the amazing person you are.
🚀 Here's to more wins, more dreams coming true, and many more birthdays to celebrate!

Much love and respect, 💜
— From your GRIDVEM
          </p>

          {/* Airtime Gift Section */}
          <div className="p-6 bg-white rounded-lg shadow-xl space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              🎁 Your Birthday Gift 🎁
            </h2>
            <p className="text-gray-600">
              Here's a ₦500 MTN Mobile Airtime Code just for you:
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={airtimeCode}
                readOnly
                className="border border-gray-300 rounded-md px-4 py-2 w-full text-center font-mono text-lg text-purple-700 bg-gray-100"
              />
              <Button
                onClick={handleCopy}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
              >
                Copy
              </Button>
            </div>
            {copied && (
              <p className="text-green-600 text-sm font-semibold mt-2 animate-fade-in">
                ✅ Copied!
              </p>
            )}
          </div>

          {/* USDT / Naira Service */}
          <div className="p-6 bg-white rounded-lg shadow-xl space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Need USDT/NAIRA Exchange? 💱
            </h2>
            <p className="text-gray-600">
              Contact B.O.B for professional crypto services
            </p>
            <a
              href="https://wa.me/2348109392892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              onClick={() => (document.getElementById('clickSound') as HTMLAudioElement)?.play()}
            >
              <MessageSquare className="w-5 h-5" />
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
      <AudioPlayer />
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
