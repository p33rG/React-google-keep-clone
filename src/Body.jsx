import React, { useState } from "react";
import CreateNode from "./CreateNode";
import Note from "./note";

const Body = () => {

    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((prevDate) => {
            return [
                ...prevDate,
                note
            ]

        });
    }
    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((curData, indx) => {
                return indx !== id;
            });
        });
    }

    return (
        <>
            <div className="body">
                <CreateNode passNote={addNote} />

                <div className="notes">
                    {addItem.map((val, index) => {
                        return <Note key={index}
                            id={index}
                            title={val.title}
                            desc={val.desc}
                            deleteItem={onDelete}

                        />
                    })}
                </div>




            </div>
        </>
    )
};


export default Body;