import React from "react";
import TextPlaceholder from "../TextPlaceholder/TextPlaceholder";
import styles from "./UserCard.module.scss";

const UserCardPlaceholder: React.FC = () => {
  return (
    <div className={styles.userCardPlaceholder}>
      <div className={styles.leftColumn}>
        <TextPlaceholder width="64px" height="64px" rounded color="#e0e0e0" />
        <div className={styles.userInfo}>
          <TextPlaceholder width="80px" height="16px" color="#d0d0d0" />
          <TextPlaceholder width="60px" height="16px" color="#c0c0c0" />
        </div>
      </div>

      <div className={styles.centerColumn}>
        <TextPlaceholder width="100px" height="13px" color="#e0e0e0" />
        <TextPlaceholder width="100px" height="13px" color="#d0d0d0" />
        <TextPlaceholder width="100px" height="13px" color="#c0c0c0" />
      </div>

      <div className={styles.rightColumn}>
        <TextPlaceholder width="32px" height="32px" color="#e0e0e0" />
      </div>
    </div>
  );
};

export default UserCardPlaceholder;
