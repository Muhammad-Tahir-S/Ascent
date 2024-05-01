"use client";

import { useAudioSettingsStore } from "@/stores/audio-settings-store";
import { VolumeX, Volume2 } from "lucide-react";
import { db } from "../../../db";
import { useLiveQuery } from "dexie-react-hooks";

export default function MuteToggle() {
  const { isMuted, onMuteToggle } = useAudioSettingsStore();

  const audioSettings = useLiveQuery(
    async () => await db.audioSettings.toArray()
  );

  const dbIsMuted = audioSettings?.length ? audioSettings?.[0]?.isMuted : false;

  // async function onToggle() {
  //   await db.audioSettings.put({ id: 0, isMuted: !dbIsMuted });
  // }

  console.log({ audioSettings, dbIsMuted });

  const AudioIcon = isMuted ? VolumeX : Volume2;
  return (
    <AudioIcon
      className="w-6 cursor-pointer aspect-square stroke-pink-red select-none"
      onClick={onMuteToggle}
    />
  );
}
