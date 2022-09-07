import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import { setColor } from '../../Services/DataService';


export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const takeColor =  (color) =>{
    if(props.action === "create"){
        props.listenToColorPopper(color)
    }
    else if(props.action === "update"){
        //setColor(color, props.id)
        let data = {id: props.id, color: color}
        setColor(data).then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const colors = ["blue","red","green","yellow","purple","orange","brown","maroon","magenta","olive","cyan","rust","burgundy"]

  return (
    <div>
      
      <ColorLensOutlinedIcon color="action" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex" }}>
         {
            colors.map((color) => (
                <div style={{width:35, height:35, borderRadius:50, backgroundColor:color, marginRight:20}} onClick={() => takeColor(color)}>
                    
                </div>
            ))
         }
        </Box>
      </Popper>
    </div>
  );
}
