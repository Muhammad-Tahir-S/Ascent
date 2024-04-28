import useSound from "use-sound";
import { HookOptions } from "../../generated-types/types";
import { useAudioSettingsStore } from "../stores/audio-settings-store";

export function usePlaySound<T>({
  src,
  options,
}: {
  src: string;
  options: Omit<HookOptions<T>, "soundEnabled">;
}) {
  const { isMuted, systemVolume } = useAudioSettingsStore();

  return useSound(src, {
    ...options,
    soundEnabled: !isMuted,
    volume: (options?.volume || 1) * (systemVolume / 100),
  });
}
