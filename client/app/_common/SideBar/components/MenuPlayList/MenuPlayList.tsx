import React from "react";
import styles from "./MenuPlayList.module.scss";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducers";
import {
  deletePlayList,
  FetchRemovePlayList,
  PlayListProp,
} from "@/redux/slices/playListSlice";

const MenuPlayList = () => {
  const dispatch = useAppDispatch();
  const playList = useAppSelector(
    (state: RootState) => state.PlayListSlice.playLists,
  );
  const ChangeDelete = (item: PlayListProp) => {
    if (window.confirm("Вы уверены?")) {
      dispatch(FetchRemovePlayList(item._id));
      dispatch(deletePlayList(item));
    }
  };
  return (
    <div className={styles.playList}>
      <div className={styles.namePlayList}>
        <p>PlayLists</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className={styles.scrollPlayList}>
        {playList &&
          playList.map((item, index: number) => (
            <div key={item._id} className={styles.item}>
              <div className={styles.wrapper}>
                <i>
                  <BsMusicNoteList />
                </i>
                <span>{item.name}</span>
              </div>
              <i onClick={() => ChangeDelete(item)}>
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuPlayList;
