import Dexie, { Table, Transaction } from "dexie";
import { indexedDB, IDBKeyRange } from "fake-indexeddb";

interface User {
  id?: number;
  username: string;
  email: string;
}

export interface Leaderboard {
  id: number;
  name: string;
  description: string;
  ranking: User[];
}

export interface AudioSettings {
  id?: number;
  isMuted: boolean;
}

export class MySubClassedDexie extends Dexie {
  leaderboards!: Table<Leaderboard>;
  audioSettings!: Table<AudioSettings>;

  constructor() {
    super("ascentDB", { indexedDB, IDBKeyRange });

    this.version(1).stores({
      leaderboards: "++id, name, description, ranking",
      audioSettings: "++id, isMuted",
    });
  }
}

export const db = new MySubClassedDexie();

db.on("populate", async (tx: Transaction) => {
  // Use provided transaction to populate database with initial data
  const setting = await db.audioSettings.toArray();
  console.log("setting", setting);
  if (!setting || !setting?.length) {
    await tx.table("audioSettings").add({ id: 0, isMuted: false });
  }
});
