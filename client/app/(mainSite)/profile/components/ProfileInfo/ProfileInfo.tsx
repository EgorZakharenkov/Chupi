"use client";

import React from "react";
import styles from "./ProfileInfo.module.scss";
import Image from "next/image";
import profileImage from "@/public/profilewebp.webp";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducers";
const ProfileInfo = () => {
  const user = useAppSelector(
    (state: RootState) => state.UserSlice.user?.userData,
  );
  return (
    <div className={styles.main}>
      <Image
        className={styles.profileImage}
        src={profileImage}
        alt={"profile"}
        width={40}
        height={40}
      />
      <div className={styles.info}>
        <h2>{user?.username}</h2>
        <h3>{user?.email}</h3>
      </div>
    </div>
  );
};

export default ProfileInfo;
