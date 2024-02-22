import React, { useState } from "react";
import ControlledOpenSpeedDial from "./SpeedDial";
import { Container } from "@mui/material";
import Style from "./CreateBlog.module.css";
import PublishBlog from "./PublishBlog";

const CreateBlog = () => {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [itemType, setItemType] = useState("");
  const [publish,setPublish] = useState(true);
  const [mainTitle,setMainTitle] = useState('');

  const handleFileChange = (e) => {
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImagePreview(reader.result); // Set the preview URL once the file is read
    //   };
    //   reader.readAsDataURL(file); // Read the file as a data URL
    // }
    handleSubmit(e)
  };

  const handleInputChange = (e) => {
    setItemInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newItem = { type: itemInput };
    if (itemType === "img") {
      setItems([...items, { type: itemType, img: e.target.files[0] }]);
    }
    if (itemType === "code") {
      setItems([...items, { type: itemType, code: itemInput }]);
    }
    if (itemType === "embed") {
      setItems([...items, { type: itemType, embed: itemInput }]);
    }
    if (itemType === "title") {
      setItems([...items, { type: itemType, title: itemInput }]);
    }
    if (itemType === "description") {
      setItems([...items, { type: itemType, description: itemInput }]);
    }
    if (itemType === "video") {
      const linkId = itemInput.split("=");
      const videoId = linkId[1];
      const embedUrl = "https://www.youtube.com/embed/" + videoId;
      setItems([...items, { type: itemType, video: embedUrl }]);
    }
    setItemInput("");
    setItemType('')
  };


  const handleOpen = () => {

    setPublish(false)
    console.log(items)
  }
  const handleTitle = (e) => {
    setMainTitle(e.target.value);
    // setItems([items.mainTitle,mainTitle])
    // console.log(items)
  }

  return (
    <div>
      <Container>
      {publish ? <>  <button className={Style.publish} onClick={handleOpen} disabled={items.length<2}>Publish</button>
        <div>
      <input type="text" placeholder="main title" value={mainTitle} onChange={(e)=>handleTitle(e)} />
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "title" && <h1>{item.title}</h1>}
              {item.type === "img" && (
                <img className={Style.upload_img}   src={URL.createObjectURL(item.img)} alt="cover" />
              )}
              {item.type === "video" && (
                <iframe
                  width="560"
                  height="315"
                  src={item.video}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
              {item.type === "description" && <p>{item.description}</p>}
              {item.type === "embed" && <a href={item.embed}>{item.embed}</a>}
              {item.type === "code" && (
                <div className={Style.codeblock}>{item.code}</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
      { itemType && <>{itemType==='img'?
        <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />: 
      <>
        <input
            type="text"
            placeholder={"enter " + itemType}
            value={itemInput}
            onChange={handleInputChange}
          />
          <button type="submit" onSubmit={() => setItems(itemInput)}>
            Add
          </button></>}</>}
        </form>
        <ControlledOpenSpeedDial setItemType={setItemType} /></>:
       <PublishBlog setPublish={setPublish} items={items} mainTitle={mainTitle}/>}
      </Container>
    </div>
  );
};

export default CreateBlog;

