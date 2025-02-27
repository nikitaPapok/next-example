"use client";
import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ name }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef();
  function hanldePickerClick() {
    inputRef.current.click();
  }

  function selectImage(event) {
    const currentFile = event.target.files[0];

    if (!currentFile) {
      selectedFile(null);
      return;
    }
    const fileReader = new FileReader();

    //run when we convert file to url
    fileReader.onload = () => {
      setSelectedFile(fileReader.result);
    };

    //convert file to url to diplay it
    fileReader.readAsDataURL(currentFile);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedFile && <p>No Image Picked Yet!</p>}
          {selectedFile && <Image fill src={selectedFile} alt="preview" />}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          required
          accept="image/png image/jpeg"
          ref={inputRef}
          onChange={selectImage}
        />
        <button
          type="button"
          className={classes.button}
          onClick={hanldePickerClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
