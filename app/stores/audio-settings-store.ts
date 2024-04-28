import { create } from "zustand";


export type AudioSettingsStore = {
  isMuted: boolean;
  onMuteToggle: ()=> void;
  systemVolume: number;
  setSystemVolume:(systemVolume:number)=> void
};

export const useAudioSettingsStore = create<AudioSettingsStore>((set) => ({
  isMuted: false,
  onMuteToggle: () => set(({isMuted}) =>({isMuted: !isMuted})),
  systemVolume:100,
  setSystemVolume:(systemVolume)=> set(()=> ({systemVolume}))
}));
