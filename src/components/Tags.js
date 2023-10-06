// import React, { useEffect, useState } from "react";

// function Tags() {
//   const [tagData, setTagData] = useState([]);
//   const [tag , setTag] = useState('');
//   const [link , setLink] = useState('')


//   const handleTagInput = (e)=>{
//     setTag(e.target.value)
//   }
//   const handleAddLink = (e) =>{
//     setLink(e.target.value)
//   };

//   useEffect(() => {
//     const tagObject = localStorage.getItem("tagObject");
//     if (tagObject) {
//       setTagData(tagObject);
//     }
//   }, []);

//   const handleFormEvent = () => {
//     if()
//   };

//   return (
//     <>
//       <form>
//         <input className="Tag Input" placeholder="Enter The tag name" />
//         <input
//           className="Add link"
//           placeholder="Enter the link you want to save"
//         />
//         <button type="submit" onClick={handleFormEvent}>
//           Enter
//         </button>
//       </form>
//       {/* View Tags component */}
//     </>
//   );
// }

// export default Tags;

// //
// // var tagData = [
// //   {
// //     name: "cancel",
// //     links: [{ id: 1, link: link1 }],
// //   },
// // ];
