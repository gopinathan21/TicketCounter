import React from "react";

function ViewTags(props) {
  const { tag, onDeleteLink, onDeleteTag } = props;
  const { name, links } = tag;

  return (
    <>
      <div className="">
        {tag && (
          <div>
            <div>{name}</div>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  {link.id + 1}, <a href={link.link} target="_blank" rel="noopener noreferrer">
                     {link.link}
                  </a>
                  <button onClick={() => onDeleteLink(index)}>
                    Delete Link
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={onDeleteTag}>Delete Tag</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewTags;
