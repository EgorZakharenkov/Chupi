import React, { useState } from "react";
import styles from "./AudioList.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducers";
import { CurrentItem, MusicItems } from "@/redux/slices/musicSlice";
import { FaHeadphones, FaRegClock } from "react-icons/fa";
import classNames from "classnames";
const AudioList = () => {
  const [active, setActive] = useState<number>();
  const dispatch = useAppDispatch();
  const items = useAppSelector(
    (state: RootState) => state.MusicSlice.musics.items,
  );
  const category = useAppSelector(
    (state: RootState) => state.MusicSlice.musics.category,
  );
  const changeCurrentItem = (item: MusicItems, index: number) => {
    dispatch(CurrentItem(item));
    setActive(index);
  };
  return (
    <>
      {items && (
        <div className={styles.audioList}>
          <h2 className={styles.title}>
            The {category} <span>{items.length} songs</span>
          </h2>
          <div className={styles.songsContainer}>
            {Array.isArray(items) &&
              items.map((item, index) => (
                <div className={styles.songs}>
                  <div className={styles.count}>#{index + 1}</div>
                  <div
                    onClick={() => changeCurrentItem(item, index)}
                    className={classNames(styles.song, {
                      [styles.songActive]: active === index,
                    })}
                  >
                    <div className={styles.imgBox}>
                      <img src={item.imgSong} alt="" />
                    </div>
                    <div className={styles.section}>
                      <p className={styles.songName}>
                        {item.songName} <span>{item.artist}</span>
                      </p>
                      <div className={styles.hits}>
                        <p className="hit">
                          <i>
                            <FaHeadphones />
                          </i>
                          {item.viewSong}
                        </p>
                        <p className="duration">
                          <i>
                            <FaRegClock />
                          </i>
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AudioList;
