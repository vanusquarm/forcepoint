import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'; // Enabling localStorage persistence

export const defaultSettings = {
  preferred_username: "",
  email: "",
  merchant_id: 3,
  group_id: null,
  role: "user",
};

// Original atom.
export const settingsAtom = atomWithStorage("SETTINGS", defaultSettings);
export const clearSettingsAtom = atom(null, (_get, set, _data) => {
  return set(settingsAtom, defaultSettings);
});

export const merchantIdAtom = atom(
  (get) => get(settingsAtom).merchant_id,
  (get, set, data: number) => {
    const prev = get(settingsAtom);
    return set(settingsAtom, { ...prev, merchant_id: data });
  }
);