"use client";

import { useAudioSettingsStore } from "@/stores/audio-settings-store";
import { VolumeX, Volume2 } from "lucide-react";

export default function MuteToggle() {
  const { isMuted, onMuteToggle } = useAudioSettingsStore();

  const AudioIcon = isMuted ? VolumeX : Volume2;
  return (
    <AudioIcon
      className="w-6 cursor-pointer aspect-square stroke-pink-red select-none"
      onClick={onMuteToggle}
    />
  );
}
