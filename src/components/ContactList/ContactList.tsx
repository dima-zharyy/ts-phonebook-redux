import { ContactListItem } from "components";
import { getFilter, getItems } from "redux/contacts/contactsSlice";
import { useAppSelector } from "redux/hooks/hooks";

export const ContactList: React.FC = () => {
  const contacts = useAppSelector(getItems);
  const filter = useAppSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const elements = filteredContacts.map(({ id, name, number }) => {
    return <ContactListItem key={id} name={name} number={number} id={id} />;
  });

  return contacts.length > 0 ? (
    <ul>{elements}</ul>
  ) : (
    <p>Your contact book is empty</p>
  );
};
