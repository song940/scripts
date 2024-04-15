export * from "./react.js";
export * from "./components/index.js";

import { useState, useEffect } from "./react.js";

export function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(defaultValue);
  const storedValue = localStorage.getItem(key);
  useEffect(() => {
    setState(storedValue !== null ? JSON.parse(storedValue) : defaultValue);
  }, []);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
