import React from 'react'
import './takenotethree.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ColorPopper from '../ColorPopper/ColorPopper'
import { deleteNotes, updateArchiveNotes } from '../../Services/DataService'



function TakeNoteThree(props) {

    const updateArchive = () =>{
        let data = {id: props.note.noteID}
        updateArchiveNotes(data).then((response) =>{console.log(response)})
        .catch((error) =>{console.log(error)})
    }
    const trashNote = () =>{
        let data = {id: props.note.noteID}
        deleteNotes(data).then((response) =>{console.log(response)})
        .catch((error) =>{console.log(error)})
    }

    return (
        <div>
            <div class="takeNoteThreeParent" style={{backgroundColor: props.note.color}}>

                <div class="firstLine" >
                    <div>{props.note.title}</div>
                    <PushPinOutlinedIcon style={{width: "20px", height: "20px"}} />
                </div>

                <div class="description">
                    {props.note.description}
                </div>
                <div class="thirdLine">
                    <AddAlertOutlinedIcon  />
                    <PersonAddAltOutlinedIcon  />
                    {/* <ColorLensOutlinedIcon color="action" /> */}
                    <ColorPopper action="update" id={props.note.noteID}/>
                    {/* <SimplePopper action="update"/> */}
                    <PhotoOutlinedIcon  />
                    <ArchiveOutlinedIcon onClick={updateArchive}/>
                    <DeleteOutlineIcon onClick={trashNote}/>
                    <MoreVertOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default TakeNoteThree