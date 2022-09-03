import { IContacts } from "../hooks/useLocalStorage";

export const isContactInList = (contacts: IContacts, newName: string) => {
  return contacts.some(
    ({ name }) => name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  );
};
