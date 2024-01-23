import React, { useState } from "react";
import { Form, Formik } from "formik";
import Image from "next/image";
import styles from "./EditForm.module.scss";
import profileImage from "@/public/profilewebp.webp";
import { FaTrash } from "react-icons/fa";
import InputFile from "@/app/_common/InputFile/InputFile";
import Button from "@/app/_common/Button/Button";
const EditForm = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [, setSelectedFile] = useState<File | null>(null);

  const handleClear = () => {
    setImageSrc(null);
    setSelectedFile(null);
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => console.log(1)}
      validationSchema={{}}
    >
      <Form>
        <Image
          className={styles.profileImage}
          src={imageSrc ? imageSrc : profileImage}
          alt={"profile"}
          width={40}
          height={40}
        />{" "}
        <InputFile
          setSelectedFile={setSelectedFile}
          setImageSrc={setImageSrc}
        />
        {imageSrc && (
          <div onClick={handleClear}>
            <Button children={"Удалить"} />
            <FaTrash />
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default EditForm;
