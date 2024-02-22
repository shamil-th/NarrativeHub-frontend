import React, { useState } from "react";
import Style from "./CreateBlog.module.css";
import CreatedTags from "./CreatedTags";

const PublishBlog = ({ setPublish, items, mainTitle }) => {
  const [previewDescription, setPreviewDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [tags,setTags] = useState([]);
  const [newTag,setNewTag] = useState('')
  const handleClose = () => {
    setPublish(true);
  };
console.log(tags)
  const handleSubmit = () => {
    const arraydata = [
      {
        mainTitle: mainTitle,
        previewDescription: previewDescription,
        preview:preview,
        items: items,
        tags: tags
      },
    ];
    console.log("array", arraydata[0]);
  };
  const setPreviewImage = (e) => {
    setPreview(e.target.files[0]);
  };
  
  const submitNewTag = () => {
    setTags((previousTags) => {
      const newTags = [...previousTags, newTag];
      return newTags;
    });
    setNewTag('');
  };

  const removeTag = (deleteIndex) => {
    setTags((previousTags) => previousTags.filter((_, index) => index !== deleteIndex));
  };
  
  
  return (
    <div>
      <button onClick={handleClose}> close</button>
      <div>
        {preview && (
          <img
            className={Style.previewImg}
            src={URL.createObjectURL(preview)}
            alt=""
          />
        )}
        <input type="file" onChange={setPreviewImage} />
      </div>
      <h1>{mainTitle}</h1>
      <input
        type="text"
        placeholder="set preview description"
        value={previewDescription}
        onChange={(e) => setPreviewDescription(e.target.value)}
      />
      <h3>add tags</h3> <button onClick={submitNewTag}>add</button>
      <input type="text" value={newTag} onChange={((e) => setNewTag(e.target.value))}/>
      {tags?.map((tag,index) => (
        <CreatedTags tag={tag} key={index} index={index} removeTag={removeTag}/>
      ))}
      <button onClick={handleSubmit}>publish now</button>
    </div>
  );
};

export default PublishBlog;
