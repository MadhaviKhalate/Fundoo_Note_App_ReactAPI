import React, { useEffect } from 'react'
import MiniDrawer from '../../Components/Drawer/drawer'
import Header from '../../Components/Header/header'
import TakeNoteOne from '../../Components/TakeNoteOne/takenoteone'
import TakeNoteThree from '../../Components/TakeNoteThree/takenotethree'
import TakeNoteTwo from '../../Components/TakeNoteTwo/takenotetwo'
import {getNotes} from '../../Services/DataService'
import './Dashboard.css'

function Dashboard() {

    const[view,setView] = React.useState(true)
    const[notes,setNotes] = React.useState([])
    const[drawer,setDrawer] = React.useState(false)
    const[currentNote,setCurrentNote] = React.useState("notes")

    const notesArray = notes.map(note => (<TakeNoteThree note={note}/>))


    useEffect( () => {
        getNotes().then((response) => {console.log(response);
            let filter = response.data.data.filter((note)=>{
                if(currentNote=="notes")
                {
                    if(note.archive==false && note.trash==false)
                    {
                        return note
                    }
                }
                if(currentNote=="archive")
                {
                    if(note.archive==true && note.trash==false)
                    {
                        return note
                    }
                }
                if(currentNote=="trash")
                {
                    if(note.archive==false && note.trash==true)
                    {
                        return note
                    }
                }
            })
            setNotes(filter)}) 
            
    },[currentNote])

    function listenToTakeNoteOne()
    {
        setView(false)
    }
    const listenToHeader = () =>{
        setDrawer(!drawer)
    }
    const handleDrawer = (data) =>{
        console.log(data)
        setCurrentNote(data)
    }
   
  return (
    <div className="dashboardstyle">
        <div className="headerstyle">
        <Header listenToHeader={listenToHeader}/>
        <MiniDrawer drawer={drawer} handleDrawer={handleDrawer}/>
        </div>
        <div>
        {
            view ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}/> : <TakeNoteTwo/>
        }
        </div>
        <div className="takenotethree">{
            notesArray
        }
        </div>
        
    </div>
  )
}

export default Dashboard