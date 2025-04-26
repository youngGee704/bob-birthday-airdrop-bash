
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Star } from 'lucide-react';

interface AirdropClaimProps {
  onComplete: () => void;
}

const AirdropClaim: React.FC<AirdropClaimProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90); // 1.5 minutes in seconds

  useEffect(() => {
    if (step === 3 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setProgress((90 - newTime) * (100 / 90));
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  const steps = [
    {
      title: "Connect Wallet 🔗",
      description: "First, connect your wallet to claim the airdrop",
    },
    {
      title: "Verify Identity ✅",
      description: "Confirm you're the birthday celebrant",
    },
    {
      title: "Claim Airdrop 🎁",
      description: "Wait while we prepare your special gift",
    }
  ];

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
      <div className="space-y-4">
        {steps.map((s, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
              step > index + 1 ? 'bg-green-100' : 
              step === index + 1 ? 'bg-purple-100' : 
              'bg-gray-50'
            }`}
          >
            <div className={`rounded-full p-2 ${
              step > index + 1 ? 'bg-green-500 text-white' :
              step === index + 1 ? 'bg-purple-500 text-white' :
              'bg-gray-200'
            }`}>
              {step > index + 1 ? (
                <BadgeCheck className="w-6 h-6" />
              ) : (
                <Star className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {step < 3 ? (
        <Button
          onClick={() => setStep(step + 1)}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {step === 1 ? "Connect Wallet" : "Verify Identity"}
        </Button>
      ) : (
        <div className="space-y-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-600">
            Claiming in: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  );
};

export default AirdropClaim;
