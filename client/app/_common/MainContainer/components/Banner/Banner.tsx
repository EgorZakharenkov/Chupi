import React from "react";
import { FaCheck, FaEllipsisH, FaHeadphones } from "react-icons/fa";
import styles from "./Banner.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/rootReducers";
import imageBaner from "../../../../../public/bg.jpg";
import Image from "next/image";
import { MusicItems } from "@/redux/slices/musicSlice";
const Banner = ({ item }: { item?: MusicItems | null }) => {
  const [follow, setFollow] = React.useState(false);
  const category = useAppSelector(
    (state: RootState) => state.MusicSlice.musics.category,
  );
  return (
    <div className={styles.baner}>
      <Image
        width={1980}
        height={1080}
        className={styles.imgBaner}
        src={imageBaner}
        alt=""
      />
      <div className={styles.content}>
        <div className={styles.breadCrump}>
          <p>
            Home <span>/{category}</span>
          </p>

          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className={styles.artist}>
          <div className={styles.left}>
            <div className={styles.name}>
              <h2>{item?.songName}</h2>
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>{" "}
              {item?.viewSong}
              <span>{item?.artist}</span>
            </p>
          </div>
          <div className={styles.right}>
            <a className={styles.playing} href="#">
              Play
            </a>
            <a
              onClick={() => setFollow(!follow)}
              className={follow ? styles.follow : styles.noFollow}
            >
              <i>{follow ? <FaCheck /> : ""}</i>
              {follow ? "Following" : "Follow"}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomLayer}></div>
    </div>
  );
};

export default Banner;
