import React from 'react'
import './header.css'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux';


function Header(props) {
  const handleDrawer = () =>{
    props.listenToHeader()
  }
  return (


    <div>
      <div class='header'>
        <div class='icon part-one'>
            <DehazeOutlinedIcon onClick={handleDrawer}/>
            <div class='keep'>{props.title}</div>
        </div>
        <div class='icon1 part-two'>
            <input placeholder="Search" class='searchBar' ></input>
            <div class='search-icon'><SearchIcon /></div>
        </div>
        <div class='icon part-three'>
          <RefreshIcon/>
          <SplitscreenIcon/>
          <SettingsOutlinedIcon/>
        </div>
        <div class='icon part-four'>
          <AppsRoundedIcon/>
          <AccountCircleIcon/>
        </div>
      </div>
    </div>  
  )
}

const mapStateToProps = (state) => {
  console.log(state)
return {
  title: state.drawerReducer.title,
};
};


//export default Header;
export default connect(mapStateToProps)(Header);

