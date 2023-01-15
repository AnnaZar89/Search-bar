import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/Form/SearchInput/SearchInput";
import Users from "./components/Users/Users";
import { useAppDispatch, useAppSelector } from "./store";
import { getUsers } from "./store/usersReducer";
import Button from "./components/Button/Button";
import { setSeed } from "./store/usersReducer";

const App = () => {
  const [userValue, setUserValue] = useState("");
  const { users, resultNumber, seed } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const searchSeed = useCallback(
    (searchValue: string) => {
      dispatch(setSeed);
      dispatch(getUsers({ page: 0, resultNumber, seed: searchValue }));
    },
    [dispatch, resultNumber]
  );
  useEffect(() => {
    searchSeed(userValue);
  }, [userValue, searchSeed]);

  useEffect(() => {
    dispatch(getUsers({ page: 0, resultNumber, seed }));
    console.log(seed, "seed");
  }, [dispatch, resultNumber, seed]);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <SearchInput
        value={userValue}
        onChange={(ev) => setUserValue(ev.currentTarget.value)}
        placeholder="Search by seed"
      />
      {/* <Button text="Search" type="submit" color="red" /> */}
      {users && <Users users={users} />}
      {/* {users ? <Users users={users} /> : <></>} */}
    </>
  );
};

export default App;
