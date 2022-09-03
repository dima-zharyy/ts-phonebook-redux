import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from "./ContactListItem.styled";

import { deleteItem } from "redux/contacts/contactsSlice";
import { useAppDispatch } from "redux/hooks/hooks";
import { TItem } from "../../redux/contacts/contactsSlice";

interface IProps extends TItem {}

export const ContactListItem: React.FC<IProps> = ({ name, number, id }) => {
  const dispatch = useAppDispatch();

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteItem(id));
  };

  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{number}</span>
      </ContactTextWrapper>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactItem>
  );
};
