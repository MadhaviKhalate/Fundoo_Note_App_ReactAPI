import React from 'react'
import './signup.css'
import googleAccount from '../../Assets/googleAccount.png'
import google from '../../Assets/google.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUp } from '../../Services/UserService';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/
const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup() {

  const [signupObj, setSignupObj] = React.useState({ fname: "", lname: "", email: "", password: "" });
  const [regexObj, setRegexObj] = React.useState({
    fnameBorder: false,
    lnameBorder: false,
    emailBorder: false,
    passwordBorder: false,
    fnameHelper: "",
    lnameHelper: "",
    emailHelper: "",
    passwordHelper: "",

  });

  const takeFname = (event) => {
    setSignupObj((prevState) => ({ ...prevState, fname: event.target.value }));
  };

  const takeLname = (event) => {
    setSignupObj((abc) => ({ ...abc, lname: event.target.value }));
  };

  const takeEmail = (event) => {
    setSignupObj((prevState1) => ({ ...prevState1, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSignupObj((abc1) => ({ ...abc1, password: event.target.value }));
  };

  const submit = async () => {
    const fnameTest = fnameRegex.test(signupObj.fname);
    const lnameTest = lnameRegex.test(signupObj.lname);
    const emailTest = emailRegex.test(signupObj.email);
    const passwordTest = passwordRegex.test(signupObj.password);
    console.log(fnameTest, lnameTest, emailTest, passwordTest);

    if (fnameTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        fnameBorder: true,
        fnameHelper: "Enter correct first name",
      }));
    } else if (fnameTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        fnameBorder: false,
        fnameHelper: "",
      }));
    }

    if (lnameTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        lnameBorder: true,
        lnameHelper: "Enter correct last name",
      }));
    }
    else if (lnameTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        lnameBorder: false,
        lnameHelper: "",
      }));
    }

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter correct email",
      }));
    }
    else if (emailTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter correct password",
      }));
    } else if (passwordTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    if (fnameTest === true && lnameTest === true && emailTest === true && passwordTest === true) {
      let response = await signUp(signupObj);
      console.log(response);
    }
  };

  return (
    <div>
      <div class="Header">
        <div class="leftdiv">
          <div class="google"> <img src={google} style={{ width: "80px", height: "30px", flexDirection: "flex-start" }} /> </div>
          <div class="googleaccount">
            Create your Google Account
          </div>
          <div class="name">
            <TextField  id="outlined-basic" label="FirstName" variant="outlined"
              size="small" placeholder="FirstName" onChange={takeFname}
              error={regexObj.fnameBorder}
              helperText={regexObj.fnameHelper} />
 
            <TextField id="outlined-basic" label="LastName" variant="outlined"
              size="small" placeholder="LastName" onChange={takeLname}
              error={regexObj.lnameBorder}
              helperText={regexObj.lnameHelper} />
          </div>
          <div class="email">
            <TextField id="outlined-basic" label="Email" variant="outlined"
              size="small" placeholder="EnterEmail" onChange={takeEmail}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper} />
            You'll need to confirm that this email belongs to you.
          </div>
          {/* <div class="newemail">
                        Create a new Gmail address instead
                    </div> */}
          <div class="password">
            <TextField  id="outlined-basic" label="Password" variant="outlined"
              size="small" type="password" placeholder="Password" onChange={takePassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper} />
              
            <TextField  id="outlined-basic" label="ConfirmPassword" variant="outlined"
              size="small" type="password" placeholder="ConfirmPassword" />
          </div>
          <div class="showpass">
            <input type="checkbox" />
            Show password
          </div>
          <div class="signininstead">
            <div class="Sin">Sign in instead </div>
            <Button variant="contained" onClick={submit}>Next</Button>
          </div>
        </div>
        <div class="rightdiv">
          <div class="googleacc"><img src={googleAccount} /></div>
          <div class="msg">One account. All of Google working for you.</div>
        </div>
      </div>
    </div>
  )
}

export default Signup