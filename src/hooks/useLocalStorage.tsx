import { useState, useEffect } from "react";

export type IContacts = {
  id: string;
  name: string;
  number: string;
}[];

export const useLocalStorage = (
  key: string,
  defaultValue: IContacts
): [IContacts, React.Dispatch<React.SetStateAction<IContacts>>] => {
  const [state, setState] = useState<IContacts>(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return typeof savedContacts === "string"
      ? JSON.parse(savedContacts)
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
