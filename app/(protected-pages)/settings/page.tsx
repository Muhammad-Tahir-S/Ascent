import React from "react";
import { db } from "../../../db";
import SettingsPage from "./settings";

export default async function Settings() {
  const data = await db.audioSettings.toArray();

  return <SettingsPage data={data} />;
}
