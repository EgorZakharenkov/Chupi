"use client";
import BreadCrumb from "@/app/_common/BreadCrumb/BreadCrumb";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ProfileInfo from "@/app/(mainSite)/profile/components/ProfileInfo/ProfileInfo";
import EditForm from "@/app/(mainSite)/profile/components/EditForm/EditForm";
export default function Page() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <div className={styles.profile}>
      <BreadCrumb name={"Profile"} />
      <ProfileInfo />
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Close" : "Edit"}
      </button>
      {isEdit && <EditForm />}
    </div>
  );
}
