import React from "react";
import styles from "./InputFile.module.scss";

type Props = {
  setImageSrc: (result: string) => void;
  setSelectedFile: (selected: File) => void;
};
const InputFile: React.FC<Props> = ({ setImageSrc, setSelectedFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedFile(selected);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selected);
    }
  };

  return (
    <div className={styles.fileInputContainer}>
      <label htmlFor="fileInput" className={styles.fileLabel}>
        <span>Выберите файл</span>
      </label>
      <input
        onChange={handleFileChange}
        type="file"
        id="fileInput"
        className={styles.fileInput}
      />
    </div>
  );
};

export default InputFile;
