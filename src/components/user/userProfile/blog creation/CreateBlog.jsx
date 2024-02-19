import React, { useState } from "react";
import ControlledOpenSpeedDial from "./SpeedDial";
import { Container } from "@mui/material";
import Style from "./CreateBlog.module.css";

const CreateBlog = () => {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState({});
  const [itemType, setItemType] = useState("");
  // console.log(itemInput);
  // console.log("itemType", itemType);
  // console.log(items);

  const handleInputChange = (e) => {
    setItemInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newItem = { type: itemInput };
    if (itemType === "img") {
      setItems([...items, { type: itemType, img: itemInput }]);
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
  };

  const setItem = (itemInput, type) => {
    console.log(itemInput, type);
  };

  return (
    <div>
      <Container>
        <div>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "title" && <h1>{item.title}</h1>}
              {item.type === "img" && (
                <img className={Style.upload_img} src={item.img} alt="cover" />
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
          <input
            type="text"
            placeholder={"enter " + itemType}
            value={itemInput}
            onChange={handleInputChange}
          />
          <button type="submit" onSubmit={() => setItem(itemInput)}>
            Add
          </button>
        </form>
        <ControlledOpenSpeedDial setItemType={setItemType} />
      </Container>
    </div>
  );
};

export default CreateBlog;

//   <input type="text" id="youtubeLink" placeholder="Enter YouTube Video Link">
//   <button onclick="embedVideo()">Embed Video</button>
//   <div id="videoContainer"></div>
//   <script>
//       function embedVideo() {
//           var inputLink = document.getElementById('youtubeLink').value;
//           var videoId = getYouTubeVideoId(inputLink);
//           var embedUrl = 'https://www.youtube.com/embed/' + videoId;
//           var iframe = '<iframe width="560" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>';
//           document.getElementById('videoContainer').innerHTML = iframe;
//       }

//       function getYouTubeVideoId(url) {
//           var videoId = '';
//           if (url.includes('youtube.com')) {
//               var urlParams = new URLSearchParams(new URL(url).search);
//               videoId = urlParams.get('v');
//               if (!videoId) {
//                   // If video ID is not found in URL parameters, try to extract it from the path
//                   var pathSegments = new URL(url).pathname.split('/');
//                   videoId = pathSegments[pathSegments.length - 1];
//               }
//           }
//           return videoId;
//       }
//   </script>
