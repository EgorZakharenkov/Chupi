"use client";

import React from "react";
import styles from "./SideBar.module.scss";
import SearchBox from "@/app/_common/SideBar/components/SearchBox/SearchBox";
import MenuList from "@/app/_common/SideBar/components/MenuList/MenuList";
import { FaEllipsisH } from "react-icons/fa";
import MenuPlayList from "@/app/_common/SideBar/components/MenuPlayList/MenuPlayList";
import TrackList from "@/app/_common/SideBar/components/TrackList/TrackList";
const SideBar = () => {
  return (
    <div className={styles.leftMenu}>
      <div className={styles.logoContainer}>
        <h2>Chupi</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <SearchBox />
      <MenuList />
      <MenuPlayList />
      <TrackList />
    </div>
  );
};

export default SideBar;
