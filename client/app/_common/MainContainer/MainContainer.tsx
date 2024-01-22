"use client";

import React, { useState } from "react";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Category,
  FetchMusic,
  SetPopularTracks,
} from "@/redux/slices/musicSlice";
import { RootState } from "@/redux/rootReducers";
import Banner from "@/app/_common/MainContainer/components/Banner/Banner";
import AudioList from "@/app/_common/MainContainer/components/AudioList/AudioList";
import { logout } from "@/redux/slices/userSlice";
const MainContainer = () => {
  const menuList = ["Songs", "Popular"];
  const [itemActive, setActive] = useState(0);
  const item = useAppSelector(
    (state: RootState) => state.MusicSlice.musics.item,
  );
  const dispatch = useAppDispatch();
  const ChangeCategory = (index: number) => {
    setActive(index);
    dispatch(Category(menuList[index]));
    if (menuList[index] === "Songs") {
      dispatch(FetchMusic());
    }
    if (menuList[index] === "Popular") {
      dispatch(SetPopularTracks());
    }
  };
  return (
    <div className={styles.mainContainer}>
      <Banner item={item} />
      <div className={styles.menuList}>
        {menuList.map((item, index) => (
          <a
            className={classNames({
              [styles.active]: itemActive === index,
            })}
            onClick={() => ChangeCategory(index)}
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
      <AudioList />
    </div>
  );
};

export default MainContainer;
