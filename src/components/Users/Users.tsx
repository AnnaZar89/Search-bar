import { FC, useEffect, useState } from "react";
import { UsersT } from "../../store/usersReducer";
import { useAppDispatch, useAppSelector } from "../../store";
import { getUsers } from "../../store/usersReducer";
import { addPage } from "../../store/usersReducer";
import UserBox from "../UserBox/UserBox";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./Users.module.scss";

interface IUsers {
  users: UsersT;
}

const Users: FC<IUsers> = ({ users }) => {
  const dispatch = useAppDispatch();
  const { page, resultNumber, seed } = useAppSelector((state) => state.users);

  const morePosts = () => {
    dispatch(addPage());
    dispatch(getUsers({ page, resultNumber, seed }));
  };

  return (
    <>
      <InfiniteScroll
        dataLength={users.results.length}
        next={morePosts}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {/* {users && <UserBox userBox={users} />} */}
        <div className={styles.wrapper}>
          {users.results.map((data, index) => (
            <UserBox
              key={`${data.id.value}${index}`}
              data={data}
              index={index}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Users;
