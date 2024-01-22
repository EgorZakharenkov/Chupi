"use client";
import React, { FormEvent, useState } from "react";
import styles from "../../SideBar.module.scss";
import { useAppDispatch } from "@/redux/hooks";
import { BiSearchAlt } from "react-icons/bi";
import { SearchTrack } from "@/redux/slices/musicSlice";

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const changeSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SearchTrack(search));
    setSearch("");
  };
  return (
    <div className={styles.searchBox}>
      <form onSubmit={(e) => changeSearch(e)}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </form>
      <i>
        <BiSearchAlt />
      </i>
    </div>
  );
};

export default SearchBox;
