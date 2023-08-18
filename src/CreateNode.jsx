import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { PropaneSharp } from "@mui/icons-material";


const CreateNode = (props) => {

    const [note, setNote] = useState({
        title: '',
        desc: ''
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setNote((prevDate) => {
            return {
                ...prevDate,
                [name]: value
            }

        });
        console.log(note);
    }

    const addNotes = () => {
        props.passNote(note);
        setNote({
            title: '',
            desc: ''
        })
    }

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder=" Title" className="heading" autoComplete="off" />
                    <hr />
                    <textarea rows='7' column='12' name="desc" value={note.desc} onChange={inputEvent} placeholder="Write  a note"></textarea>
                    <Button onClick={addNotes} variant="text" className="button"> <AddIcon /></Button>

                </form>
            </div>
        </>
    )
};

export default CreateNode;