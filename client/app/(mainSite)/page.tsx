"use client";

import MainContainer from "@/app/_common/MainContainer/MainContainer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { FetchMusic } from "@/redux/slices/musicSlice";
import { RootState } from "@/redux/rootReducers";
import { useRouter } from "next/navigation";
import { FetchPLayList } from "@/redux/slices/playListSlice";
export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector(
    (state: RootState) => state.UserSlice.user?.userData,
  );
  useEffect(() => {
    dispatch(FetchMusic());
    if (isAuth) {
      dispatch(FetchPLayList(isAuth._id));
    }
  }, []);
  !isAuth && router.push("/login");
  return <MainContainer />;
}
