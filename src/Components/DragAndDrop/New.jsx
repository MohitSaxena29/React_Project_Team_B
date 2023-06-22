// import "./New.css";
// import { useState } from "react";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";

// import {
//   GridContextProvider,
//   GridDropZone,
//   GridItem,
//   swap,
// } from "react-grid-dnd";

// import cars from "../api/mock.car.json";

// export default function New() {
//   const [items, setItems] = useState(cars);

//   function onChange(sourceId, sourceIndex, targetIndex) {
//     const nextState = swap(items, sourceIndex, targetIndex);
//     setItems(nextState);
//   }

//   return (
//     <Box className="App">
//       <GridContextProvider onChange={onChange}>
//         <GridDropZone
//           id="items"
//           boxesPerRow={4}
//           rowHeight={280}
//           style={{ height: 280 * Math.ceil(items.length / 4) }}
//         >
//           {items.map((item) => (
//             <GridItem key={item.id}>
//               <Card
//                 sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={item.image}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {item.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </GridItem>
//           ))}
//         </GridDropZone>
//       </GridContextProvider>

//       <button type="button" onClick={() => console.log("state", items)}>
//         State
//       </button>
//     </Box>
//   );
// }




















// import "./New.css";
// import { useState, useEffect, useLayoutEffect } from "react";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";

// import {
//   GridContextProvider,
//   GridDropZone,
//   GridItem,
//   swap,
// } from "react-grid-dnd";

// export default function New() {
//   const [allEntry, setAllEntry] = useState([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("users"));
//     if (items) {
//       setAllEntry(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(allEntry));
//   }, [allEntry]);

//   useLayoutEffect(() => {
//     let resizeTimer;

//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         const gridHeight = 280 * Math.ceil(allEntry.length / 4);
//         document.documentElement.style.setProperty(
//           "--grid-height",
//           `${gridHeight}px`
//         );
//       }, 100); // Debounce the resize event handling with a 100ms delay
//     };

//     handleResize(); // Initial resize

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [allEntry]);

//   function onChange(sourceId, sourceIndex, targetIndex) {
//     const nextState = swap(allEntry, sourceIndex, targetIndex);
//     setAllEntry(nextState);
//   }

//   const removeEle = (id) => {
//     const newArr = allEntry.filter((ele) => ele.id !== id);
//     setAllEntry(newArr);
//   };


//   return (
//     <Box className="App">
//       <GridContextProvider onChange={onChange}>
//         <GridDropZone
//           id="items"
//           boxesPerRow={4}
//           rowHeight={280}
//           style={{ height: "var(--grid-height)" }}
//         >
//           {allEntry.map((item) => (
//             <GridItem key={item.id}>
//               <Card
//                 sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
//               >
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={item.image}
//                     alt={item.title}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h6" component="div">
//                      <span>{item.titles}</span> 
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                     <span>{item.description}</span> 
//                     </Typography>
//                     <button
//                             className="btn"
//                             onClick={() => removeEle(item.id)}
//                           >
//                             Delete
//                           </button>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </GridItem>
//           ))}
//         </GridDropZone>
//       </GridContextProvider>

//       <button type="button" onClick={() => console.log("state", allEntry)}>
//         State
//       </button>
//     </Box>
//   );
// }









// import "./New.css";
// import { useState, useEffect, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";

// import {
//   GridContextProvider,
//   GridDropZone,
//   GridItem,
//   swap,
// } from "react-grid-dnd";

// export default function New() {
//   const [allEntry, setAllEntry] = useState([]);
//   const navigate=useNavigate();
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("users"));
//     if (items) {
//       setAllEntry(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(allEntry));
//   }, [allEntry]);

//   useLayoutEffect(() => {
//     let resizeTimer;

//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         const gridHeight = 280 * Math.ceil(allEntry.length / getBoxesPerRow());
//         document.documentElement.style.setProperty(
//           "--grid-height",
//           `${gridHeight}px`
//         );
//       }, 100); // Debounce the resize event handling with a 100ms delay
//     };

//     handleResize(); // Initial resize

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [allEntry]);

//   const getBoxesPerRow = () => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 600) {
//       return 2; // For small mobile screens, display 2 boxes per row
//     }
//     return 4; // For other screen sizes, display 4 boxes per row
//   };

//   function onChange(sourceId, sourceIndex, targetIndex) {
//     const nextState = swap(allEntry, sourceIndex, targetIndex);
//     setAllEntry(nextState);
//   }

//   const changeRoute = () => {
//     navigate('/view');
//   };

//   return (
//     <Box className="App">
//       <GridContextProvider onChange={onChange}>
//         <GridDropZone
//           id="items"
//           boxesPerRow={getBoxesPerRow()}
//           rowHeight={280}
//           style={{ height: "var(--grid-height)" }}
//         >
//           {allEntry.map((item) => (
//             <GridItem key={item.id}>
//               <Card
//                 sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
//               >
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={item.image}
//                     alt={item.title}
//                   />
//                   <CardContent>
//                     <Typography
//                       gutterBottom
//                       variant="h6"
//                       component="div"
//                       sx={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 1,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                       }}
//                     >
//                       {item.titles}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                       }}
//                     >
//                       {item.description}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </GridItem>
//           ))}
//         </GridDropZone>
//       </GridContextProvider>

//       <button type="button" onClick={changeRoute}>
//         State
//       </button>
//     </Box>
//   );
// }





// import "./New.css";
// import { useState, useEffect, useLayoutEffect } from "react";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   ThemeProvider,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { createTheme } from "@mui/material/styles";

// import {
//   GridContextProvider,
//   GridDropZone,
//   GridItem,
//   swap,
// } from "react-grid-dnd";

// const theme = createTheme();

// const TitleTypography = styled(Typography)(({ theme }) => ({
//   overflow: "hidden",
//   textOverflow: "ellipsis",
//   display: "-webkit-box",
//   "-webkit-line-clamp": 2,
//   "-webkit-box-orient": "vertical",
//   maxHeight: "3.6em",
//   lineHeight: theme.typography.h6.lineHeight,
// }));

// const DescriptionTypography = styled(Typography)(({ theme }) => ({
//   overflow: "hidden",
//   textOverflow: "ellipsis",
//   display: "-webkit-box",
//   "-webkit-line-clamp": 3,
//   "-webkit-box-orient": "vertical",
//   maxHeight: "5.4em",
//   lineHeight: theme.typography.body2.lineHeight,
// }));

// export default function New() {
//   const [allEntry, setAllEntry] = useState([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("users"));
//     if (items) {
//       setAllEntry(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(allEntry));
//   }, [allEntry]);

//   useLayoutEffect(() => {
//     let resizeTimer;

//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         const gridHeight = 280 * Math.ceil(allEntry.length / getBoxesPerRow());
//         document.documentElement.style.setProperty(
//           "--grid-height",
//           `${gridHeight}px`
//         );
//       }, 100); // Debounce the resize event handling with a 100ms delay
//     };

//     handleResize(); // Initial resize

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [allEntry]);

//   const getBoxesPerRow = () => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 600) {
//       return 2; // For small mobile screens, display 2 boxes per row
//     } else if (screenWidth < 960) {
//       return 3; // For medium-sized screens, display 3 boxes per row
//     }
//     return 4; // For larger screens, display 4 boxes per row
//   };

//   function onChange(sourceId, sourceIndex, targetIndex) {
//     const nextState = swap(allEntry, sourceIndex, targetIndex);
//     setAllEntry(nextState);
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Box className="App">
//         <GridContextProvider onChange={onChange}>
//           <GridDropZone
//             id="items"
//             boxesPerRow={getBoxesPerRow()}
//             rowHeight={280}
//             style={{ height: "var(--grid-height)" }}
//           >
//             {allEntry.map((item) => (
//               <GridItem key={item.id}>
//                 <Card
//                   sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={item.image}
//                       alt={item.title}
//                     />
//                     <CardContent>
//                       <TitleTypography variant="h6" component="div">
//                         {item.title}
//                       </TitleTypography>
//                       <DescriptionTypography
//                         variant="body2"
//                         color="text.secondary"
//                       >
//                         {item.description}
//                       </DescriptionTypography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </GridItem>
//             ))}
//           </GridDropZone>
//         </GridContextProvider>

//         <button type="button" onClick={() => console.log("state", allEntry)}>
//           State
//         </button>
//       </Box>
//     </ThemeProvider>
//   );
// }







// import "./New.css";
// import { useState, useEffect, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   ThemeProvider,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { createTheme } from "@mui/material/styles";

// import {
//   GridContextProvider,
//   GridDropZone,
//   GridItem,
//   swap,
// } from "react-grid-dnd";

// const theme = createTheme();

// const TitleTypography = styled(Typography)(({ theme }) => ({
//   overflow: "hidden",
//   textOverflow: "ellipsis",
//   display: "-webkit-box",
//   "-webkit-line-clamp": 2,
//   "-webkit-box-orient": "vertical",
//   maxHeight: "3.6em",
//   lineHeight: theme.typography.h6.lineHeight,
// }));

// const DescriptionTypography = styled(Typography)(({ theme }) => ({
//   overflow: "hidden",
//   textOverflow: "ellipsis",
//   display: "-webkit-box",
//   "-webkit-line-clamp": 3,
//   "-webkit-box-orient": "vertical",
//   maxHeight: "5.4em",
//   lineHeight: theme.typography.body2.lineHeight,
// }));

// export default function New() {
//   const [allEntry, setAllEntry] = useState([]);
//   const navigate=useNavigate();
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("users"));
//     if (items) {
//       setAllEntry(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(allEntry));
//   }, [allEntry]);

//   useLayoutEffect(() => {
//     let resizeTimer;

//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         const gridHeight = 280 * Math.ceil(allEntry.length / getBoxesPerRow());
//         document.documentElement.style.setProperty(
//           "--grid-height",
//           `${gridHeight}px`
//         );
//       }, 100); // Debounce the resize event handling with a 100ms delay
//     };

//     handleResize(); // Initial resize

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [allEntry]);

//   const getBoxesPerRow = () => {
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 600) {
//       return 2; // For small mobile screens, display 2 boxes per row
//     } else if (screenWidth < 960) {
//       return 3; // For medium-sized screens, display 3 boxes per row
//     }
//     return 4; // For larger screens, display 4 boxes per row
//   };

//   function onChange(sourceId, sourceIndex, targetIndex) {
//     const nextState = swap(allEntry, sourceIndex, targetIndex);
//     setAllEntry(nextState);
//   }

//   const changeRoute = () => {
//     navigate('/view');
//   };


//   const removeEle = (id) => {
//     const newArr = allEntry.filter((ele) => ele.id !== id);
//     setAllEntry(newArr);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box className="App">
//         <GridContextProvider onChange={onChange}>
//           <GridDropZone
//             id="items"
//             boxesPerRow={getBoxesPerRow()}
//             rowHeight={280}
//             style={{ height: "var(--grid-height)" }}
//           >
//             {allEntry.map((item) => (
//               <GridItem key={item.id}>
//                 <Card
//                   sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="100"
//                       // image={item.image}
//                       // alt={item.title}
//                       className="back"
//                     />
//                     <CardContent>
//                       <TitleTypography variant="h6" component="div">
//                         <span>{`Title : ${item.titles}`}</span>
//                       </TitleTypography>
//                       <DescriptionTypography
//                         variant="body2"
//                         color="text.secondary"
//                       >
//                         <span>{`Description : ${item.description}`}</span>
//                       </DescriptionTypography>
//                     </CardContent>
//                     <button
//                             className="btn"
//                             onClick={() => removeEle(item.id)}
//                           >
//                             Delete
//                           </button>
//                   </CardActionArea>
//                 </Card>
//               </GridItem>
//             ))}
//           </GridDropZone>
//         </GridContextProvider>

//         <button type="button" onClick={changeRoute}>
//           State
//         </button>
//       </Box>
//     </ThemeProvider>
//   );
// }




import "./New.css";
import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  ThemeProvider,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

const theme = createTheme();

const TitleTypography = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  // display: "-webkit-box",
  // "-webkit-line-clamp": 2,
  // "-webkit-box-orient": "vertical",
  maxHeight: "3.6em",
  lineHeight: theme.typography.h6.lineHeight,
}));

// const DescriptionTypography = styled(Typography)(({ theme }) => ({
//   overflow: "hidden",
//   textOverflow: "ellipsis",
//   display: "-webkit-box",
//   "-webkit-line-clamp": 3,
//   "-webkit-box-orient": "vertical",
//   maxHeight: "5.4em",
//   lineHeight: theme.typography.body2.lineHeight,
// }));

export default function New() {
  const [allEntry, setAllEntry] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedAsignee, setUpdatedAsignee] = useState("");
  const [updatedDueDate, setUpdatedDueDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("users"));
    if (items) {
      setAllEntry(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allEntry));
  }, [allEntry]);

  // useLayoutEffect(() => {
  //   let resizeTimer;

  //   const handleResize = () => {
  //     clearTimeout(resizeTimer);
  //     resizeTimer = setTimeout(() => {
  //       const gridHeight = 280 * Math.ceil(allEntry.length / getBoxesPerRow());
  //       document.documentElement.style.setProperty(
  //         "--grid-height",
  //         `${gridHeight}px`
  //       );
  //     }, 100); // Debounce the resize event handling with a 100ms delay
  //   };

  //   handleResize(); // Initial resize

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [allEntry]);

  // const getBoxesPerRow = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth < 600) {
  //     return 2; // For small mobile screens, display 2 boxes per row
  //   } else if (screenWidth < 960) {
  //     return 3; // For medium-sized screens, display 3 boxes per row
  //   }
  //   return 4; // For larger screens, display 4 boxes per row
  // };

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(allEntry, sourceIndex, targetIndex);
    setAllEntry(nextState);
  }

  const changeRoute = () => {
    navigate("/view");
  };

  const removeEle = (id) => {
    const newArr = allEntry.filter((ele) => ele.id !== id);
    setAllEntry(newArr);
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setUpdatedTitle(card.titles);
    setUpdatedDescription(card.description);
    setUpdatedAsignee(card.asignee);
    setUpdatedDueDate(card.duedate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateCard = () => {
    const updatedCard = {
      ...selectedCard,
      titles: updatedTitle,
      description: updatedDescription,
      asignee: updatedAsignee,
      duedate: updatedDueDate
    };

    const updatedEntries = allEntry.map((entry) =>
      entry.id === selectedCard.id ? updatedCard : entry
    );

    setAllEntry(updatedEntries);
    setModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <GridContextProvider onChange={onChange}>
          <GridDropZone
            id="items"
            // boxesPerRow={getBoxesPerRow()}
            boxesPerRow={3}
            rowHeight={280}
            style={{ height: "var(--grid-height)" }}
          >
            {allEntry.map((item) => (
              <GridItem key={item.id}>
                <Card
                  sx={{
                    marginRight: 2,
                    marginBottom: 2,
                    cursor: "-webkit-grab",
                  }}
                >
                  <CardActionArea>
                    <CardContent  
                      className="back">Title   
                    </CardContent>
                    <CardContent>
                      <TitleTypography variant="h6" component="div">
                         {item.titles}
                      </TitleTypography>
                      {/* <DescriptionTypography
                        variant="body2"
                        color="text.secondary"
                      >
                        <span>{`Description: ${item.description}`}</span>
                      </DescriptionTypography> */}
                    </CardContent>
                  </CardActionArea>
                  <button className="btn delete" onClick={() => removeEle(item.id)}>
                    Delete
                  </button>
                  <button className="btn update" onClick={() => openModal(item)}>Update</button>
                </Card>
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
        <div>
        <button type="button" className="btn" onClick={changeRoute}>
          State
        </button>
        </div>



        <Modal open={modalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 360,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <label>Title</label>
            <TextField
              className="updateData"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              fullWidth
            />
            <label>Description</label>
            <TextField
              className="updateData"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
            <label>Asignee</label>
            <TextField
              className="updateData"
              value={updatedAsignee}
              onChange={(e) => setUpdatedAsignee(e.target.value)}
              fullWidth
              multiline
              rows={1}
            />
            <label>DueDate</label>
            <p>
              
            <input
              type="date"
              className="updateData"
              label="DueDate"
              value={updatedDueDate}
              onChange={(e) => setUpdatedDueDate(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
            </p>

            <Button variant="contained" onClick={updateCard}>
              Update
            </Button>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}








