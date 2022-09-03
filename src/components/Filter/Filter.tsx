import React, { useId } from "react";
import { FilterLabel, FilterInput, FilterWrapper } from "./Filter.styled";
import { changeFilter } from "redux/contacts/contactsSlice";
import { useAppDispatch } from "redux/hooks/hooks";

export const Filter: React.FC = () => {
  const filterId = useId();
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeFilter(event.target.value));

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput type="text" id={filterId} onChange={changeHandler} />
    </FilterWrapper>
  );
};
