import React from "react";
import styles from "./UserCard.module.scss";
import { IUser } from "@/types/user-list.interface";

const UserCard: React.FC<IUser> = (data: IUser) => {
  const { name, id, email, gender, phone, nat, location, login } =
    data;
  return (
    <div key={id.value} className={styles.userCard}>
      <div className={styles.leftColumn}>
        <img
          src={data.picture.medium}
          alt={name.first}
          style={{ objectFit: "cover" }}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h3 className={styles.name}>{`${name.first} ${name.last}`}</h3>
          <div>
            <span className={styles.username}>{login.username}</span> /
            <span className={styles.gender}> {gender}</span>
          </div>
        </div>
      </div>

      <div className={styles.centerColumn}>
        <p className={styles.info}>{phone}</p>
        <p className={styles.info}>{email}</p>
        <p className={styles.info}>{location.city + location.country}</p>
      </div>

      <div className={styles.rightColumn}>
        <img
          src={`https://flagcdn.com/${nat.toLowerCase() || ""}.svg`}
          alt="Country Flag"
          style={{ objectFit: "cover" }}
          className={styles.flag}
        />
      </div>
    </div>
  );
};

export default UserCard;
