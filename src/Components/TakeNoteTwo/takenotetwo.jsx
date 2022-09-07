import React from 'react'
import './takenotetwo.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import ColorPopper from '../ColorPopper/ColorPopper'
import { addNote } from '../../Services/DataService'


function TakeNoteTwo() {
    const[noteObj, setNoteObj] = React.useState({Title:" ", Description:" ", Color:" ", Archive: false, pin: false})

    const takeTitle = (event) =>{
        setNoteObj((prevState) => ({ ...prevState, Title: event.target.value}));
    }

    const takeDescription = (event) =>{
        setNoteObj((prevState) => ({ ...prevState, Description: event.target.value}));
    }

    const takeArchive = () =>{
        setNoteObj((prevState) => ({ ...prevState, Archive: true}));
    }

    const takePin = () =>{
        setNoteObj((prevState) => ({ ...prevState, Pin: true}));
    }

    const listenToColorPopper = (data) =>{
        setNoteObj((prevState) => ({ ...prevState, color: data}));
    }

    const onClose =  () =>{
        let response =  addNote(noteObj);
        console.log(response);
    }

  return (
    <div>
        <div class="takeNoteTwoParent" style={{backgroundColor:noteObj.color}}>
            <div class="columnOne">
                <div class='title'><input type="text" class="textfield" 
                placeholder="Title" onChange={takeTitle}  style={{backgroundColor:noteObj.color}}></input></div>
                <PushPinOutlinedIcon color="action" onClick={takePin}/>
            </div>

            <div class="columnTwo">
                <input type="text" class="textfield" placeholder='Take a note...' onChange={takeDescription}  
                 style={{backgroundColor:noteObj.color}}/>
            </div>

            <div class="columnThree">
                <div class="icons">
                    <AddAlertOutlinedIcon />
                    <PersonAddAltOutlinedIcon />
                    {/* <ColorLensOutlinedIcon color="action" /> */}
                    <ColorPopper action="create" listenToColorPopper={listenToColorPopper}/>
                    <PhotoOutlinedIcon />
                    <ArchiveOutlinedIcon  onClick={takeArchive}/>
                    <MoreVertOutlinedIcon />
                    <UndoIcon />
                    <RedoIcon />
                </div>
                <div class="close">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TakeNoteTwo