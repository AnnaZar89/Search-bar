import React, { FC } from "react";

interface SearchInputProps {
  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default SearchInput;
