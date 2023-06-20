import React, { useState, useEffect } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useNavigate } from 'react-router-dom';

import '../App.css';





const Configure = () => {

  const [allEntry, setAllEntry] = useState([]);

  const navigate = useNavigate();



  useEffect(() => {

    const items = JSON.parse(localStorage.getItem('users'));

    if (items) {

      setAllEntry(items);

    }

  }, []);



  useEffect(() => {

    localStorage.setItem('users', JSON.stringify(allEntry));

  }, [allEntry]);



  const reorder = (list, startIndex, endIndex) => {

    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;

  };



  const onDragEnd = (result) => {

    if (!result.destination) {

      return;

    }



    const reorderedItems = reorder(

      allEntry,

      result.source.index,

      result.destination.index

    );



    setAllEntry(reorderedItems);

  };



  const getListStyle = (isDraggingOver) => ({

    background: isDraggingOver ? 'lightgreen' : 'white',

    padding: 8,

  });



  const getItemStyle = (isDragging, draggableStyle) => ({

    userSelect: 'none',

    padding: 16,

    ...draggableStyle,

  });



  const removeEle = (id) => {

    const newArr = allEntry.filter((ele) => ele.id !== id);

    setAllEntry(newArr);

  };




  const changeRoute = () => {



    navigate('/view');

  }



  return (

    <>

      <div className="main_content">

        <DragDropContext onDragEnd={onDragEnd}>

          <Droppable droppableId="droppable">

            {(provided, snapshot) => (

              <div

                {...provided.droppableProps}

                ref={provided.innerRef}

                style={getListStyle(snapshot.isDraggingOver)}

              >

                {allEntry.map((item, index) => (

                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>

                    {(provided, snapshot) => (

                      <div

                        className="card attire"

                        ref={provided.innerRef}

                        {...provided.draggableProps}

                        {...provided.dragHandleProps}

                        style={getItemStyle(

                          snapshot.isDragging,

                          provided.draggableProps.style,

                        )}

                      >

                        <div className="card-body cards">

                          <ul class="list-group list-group-flush" style={{ backgroundColor: "#EDEADE " }}>

                            <li class="list-group-item"><h6>Title        :</h6>{item.title}</li>

                            <li class="list-group-item"><h6>Description :</h6>{item.description}</li>

                            <li class="list-group-item"><h6>Asignee     :</h6>{item.asignee}</li>

                            <li class="list-group-item"><h6>DueData     :</h6>{item.duedate}</li>

                          </ul>

                        </div>

                        <button className="btn" onClick={() => removeEle(item.id)}>Delete</button>

                      </div>

                    )}

                  </Draggable>

                ))}

                {provided.placeholder}

              </div>

            )}

          </Droppable>

        </DragDropContext>

      </div>

      <div className="text-center" onClick={changeRoute}>

        <button type="button" className="btn btn-dark">Save Configuration</button>

      </div>

    </>

  );

};



export default Configure;