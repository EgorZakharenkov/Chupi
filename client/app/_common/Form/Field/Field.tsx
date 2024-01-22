import React from "react";
import { useField } from "formik";
import styles from "./Field.module.scss";
import classNames from "classnames";
type Props = {
  label: string;
  name: string;
  type: string;
};
export const Field: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={styles.customField}>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={classNames(styles.input, {
          [styles.inputErrors]: meta.touched && meta.error,
        })}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
