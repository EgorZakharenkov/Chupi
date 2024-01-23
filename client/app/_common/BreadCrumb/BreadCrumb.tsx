import React from "react";
import styles from "@/app/_common/MainContainer/components/Banner/Banner.module.scss";
import { FaEllipsisH } from "react-icons/fa";

const BreadCrumb: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.breadCrump}>
      <p>
        {name} <span>/{category}</span>
      </p>

      <i>
        <FaEllipsisH />
      </i>
    </div>
  );
};

export default BreadCrumb;
