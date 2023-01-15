import React, { FC, useState } from "react";
import { UsersT } from "../../store/usersReducer";
import { firstLetterUpperCase } from "../../helpers";
import styles from "./UserBox.module.scss";
import { ResultT } from "../../store/usersReducer";

interface IUserBox {
  data: ResultT;
  index: number;
}

const UserBox: FC<IUserBox> = ({ data, index }) => {
  const { gender, name, picture } = data;
  return (
    <div className={styles.element}>
      <img src={picture.large} alt={name.first}></img>
      <div>{firstLetterUpperCase(gender)}</div>
      <div>{name.first}</div>
    </div>
  );
};

export default UserBox;
