import React from 'react'
import google from '../../Assets/google.png'
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signIn } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';

const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    
  const navigate = useNavigate()
  const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
  const [regexObj, setRegexObj] = React.useState({
    emailBorder: false,
    passwordBorder: false,
    emailHelper: "",
    passwordHelper: "",
  });

  const takeEmail = (event) => {
    setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSigninObj((abc) => ({ ...abc, password: event.target.value }));
  };

  const submit = async () => {
    const emailTest = emailRegex.test(signinObj.email);
    const passwordTest = passwordRegex.test(signinObj.password);
    console.log(emailTest, passwordTest);

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter correct email",
      }));
    } else if (emailTest === true) {
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
      if(emailTest === true && passwordTest === true)
      {
        let response = await signIn(signinObj);
        navigate('/Dashboard')
        localStorage.setItem("Token",response?.data?.data)
      }
};

    return (
        <div>
            <div class="signinbox">
                <div class="parentbox1">
                    <div > <img src={google} style={{ width: "80px",height: "30px", flexDirection: "column" }} /> </div>
                    <div > Sign in </div>
                    <div > Use your Google Account </div>
                </div>
                <div class="parentbox2">
                    <div class="email">
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" 
                        placeholder="Email"  onChange={takeEmail}
                        error={regexObj.emailBorder}
                        helperText={regexObj.emailHelper}/>
                        <a>forgot Email?</a>    
                    </div>

                    <div class="email">
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small"
                    onChange={takePassword}
                    error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}/>
                    </div>

                    <div class="msg">
                        Not your computer? Use a private browsing window to sign in. <br />
                        <a href=" " >Learn more</a>
                    </div>
                    
                    <div class="createandnext">
                        <div class="create"> Create account</div>
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin