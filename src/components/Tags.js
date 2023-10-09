import React, { useState } from "react";
import ViewTags from "./ViewTags";

function Tags(props) {
  const { tagData, updateTagData } = props;
  const [tag, setTag] = useState("");
  const [link, setLink] = useState("");

  const handleTagInput = (e) => {
    setTag(e.target.value.toUpperCase());
  };
  const handleAddLink = (e) => {
    setLink(e.target.value);
  };
  const handleDeleteLink = (tagIndex, linkIndex) => {
    const updatedData = [...tagData];
    updatedData[tagIndex].links.splice(linkIndex, 1);

    // Update ID here
    updatedData[tagIndex].links.forEach((link, index) => {
      link.id = index;
    });
    if (updatedData[tagIndex].links.length === 0) {
      handleDeleteTag(tagIndex);
    } else {
      updateTagData(updatedData);
    }
  };

  const handleDeleteTag = (tagIndex) => {
    const updatedData = [...tagData];
    updatedData.splice(tagIndex, 1);
    updateTagData(updatedData);
    console.log(tagData);
  };
  const handleFormEvent = (e) => {
    e.preventDefault();
    let id = 0;

    if (link && tag) {
      console.log(tagData);
      const respectiveTag = tagData.filter((a) => a.name === tag);
      if (respectiveTag.length !== 0) {
        const lastElementIndex = respectiveTag[0].links.length - 1;
        if (respectiveTag[0].links[lastElementIndex]) {
          id = lastElementIndex;
        }
        console.log(id);
        respectiveTag[0].links.push({ id: id + 1, link: link });
      } else {
        const toAddTagData = { name: tag, links: [{ id: id, link: link }] };
        tagData.push(toAddTagData);
      }
    }
    updateTagData([...tagData]);
    setTag("");
    setLink("")
    
  };

  return (
    <>
      <form>
        <input
          className="Tag Input"
          placeholder="Enter The tag name"
          onChange={handleTagInput}
          value = {tag}
        />
        <input
          className="Add link"
          placeholder="Enter the link you want to save"
          onChange={handleAddLink}
          value={link}
        />
        <button type="submit" onClick={handleFormEvent}>
          Enter
        </button>
      </form>
      <div>
        {tagData &&
          tagData.map((a, index) => (
            <ViewTags
              tag={a}
              key={index}
              onDeleteLink={(linkIndex) => handleDeleteLink(index, linkIndex)}
              onDeleteTag={() => handleDeleteTag(index)}
            />
          ))}
      </div>
    </>
  );
}

export default Tags;

// var tagData = [
//   {
//     name: "cancel",
//     links: [{ id: 1, link: link1 }],
//   },
//   {
//     name: "delete",
//     links: [{ id: 1, link: link1 }],
//   },
// ];
