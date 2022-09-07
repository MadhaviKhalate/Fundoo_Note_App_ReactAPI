import React from 'react'
import './takenoteone.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'

function TakeNoteOne(props) {
    return (
        <div >
            <div >
            <div class="takenoteoneparent" onClick={() => props.listenToTakeNoteOne()}>
                <input type="text" class="textfield" value="Take a note.."></input>
                <div class="btn ">
                    <div>
                        <CheckBoxOutlinedIcon color="action" />
                    </div>
                    <div>
                        <BrushOutlinedIcon color="action" />
                    </div>
                    <div>
                        <InsertPhotoOutlinedIcon color="action" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TakeNoteOne