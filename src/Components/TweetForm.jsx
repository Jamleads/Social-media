import React from "react";
import { useState, useEffect } from "react";
import test from "/assets/test-img.jpg";
import ProfilePicture from "./ProfilePicture";
import Dropzone from "react-dropzone";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const TweetForm = ({ cancelBtn, cancelBtnClick }) => {
  const [media, setMedia] = useState(null);

  const handleMediaUpload = (acceptedFiles) => {
    // Handle media file upload here.
    const file = acceptedFiles[0];
    setMedia(file);
  };

  const handlePostSubmit = async () => {
    // Make a request to upload media and post content.
    const formData = new FormData();
    formData.append("media", media);
    // ... Add other form data (text content, etc.) to the formData.

    try {
      const response = await axios.post("/api/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success or display an appropriate message.
    } catch (error) {
      // Handle error.
    }

    // try {
    //   await addDoc(collection(db, "userData"), {
    //     ...userDataField,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div className="cancel-btn">
        <button
          className={`mb-3 ml-3 text-2xl ${cancelBtn}`}
          onClick={cancelBtnClick}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="flex">
        <ProfilePicture
          imgContainerStyle="w-[50px] h-[50px] rounded-full"
          userImg={test}
          userImgAlt="post owner image"
          userImgStlye="w-full h-full rounded-full"
        />

        <div className="tweet-details ml-3 mt-1 w-[90%]">
          <div>
            <span className="display-name font-bold display-name">
              Adetunji Jacob
            </span>
          </div>
        </div>
      </div>
      {/* <Dropzone onDrop={handleMediaUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop media here, or click to select files</p>
          </div>
        )}
      </Dropzone> */}
      {/* Add other input fields for text content */}
      {/* <button onClick={handlePostSubmit}>Upload</button> */}
    </div>
  );
};

export default TweetForm;
