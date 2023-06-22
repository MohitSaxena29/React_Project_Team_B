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
  }, [allEntry])

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
    <>
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
      <button type="button" onClick={changeRoute} className="stateButton  btn">
          Save Configuration
         </button>
      </Box>
      
      
    </ThemeProvider>
    </>
    
  );
}








