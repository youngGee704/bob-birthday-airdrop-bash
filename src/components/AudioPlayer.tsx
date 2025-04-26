
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Create background music element when component mounts
    const bgMusic = document.getElementById('bgMusic') as HTMLAudioElement;
    if (!bgMusic) {
      const music = document.createElement('audio');
      music.id = 'bgMusic';
      music.src = 'https://open.spotify.com/track/5GyaXqMfcIGHfmTUITFacS?si=e81c6e150d6940ac';
      music.loop = true;
      document.body.appendChild(music);
      
      // Auto-play with user interaction (first click)
      const handleFirstInteraction = () => {
        music.play().catch(e => console.log('Audio play failed:', e));
        document.removeEventListener('click', handleFirstInteraction);
      };
      document.addEventListener('click', handleFirstInteraction);
    }

    // Add click sound effect element
    const clickSound = document.getElementById('clickSound') as HTMLAudioElement;
    if (!clickSound) {
      const sound = document.createElement('audio');
      sound.id = 'clickSound';
      sound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3';
      document.body.appendChild(sound);
    }

    // Add success sound effect element
    const successSound = document.getElementById('successSound') as HTMLAudioElement;
    if (!successSound) {
      const sound = document.createElement('audio');
      sound.id = 'successSound';
      sound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3';
      document.body.appendChild(sound);
    }

    // Cleanup function
    return () => {
      // Audio elements attached to the body will persist between renders
    };
  }, []);

  const toggleMute = () => {
    const bgMusic = document.getElementById('bgMusic') as HTMLAudioElement;
    if (bgMusic) {
      bgMusic.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => {
          toggleMute();
          (document.getElementById('clickSound') as HTMLAudioElement)?.play();
        }}
        className="bg-white/80 backdrop-blur-sm rounded-full"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
