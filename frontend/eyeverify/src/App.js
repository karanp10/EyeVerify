import './App.css';
// import logo from './synchrony.png'
import eye from './eye.png'

function showPassword() {

  var x = document.getElementById('confirmPassword');

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function fillValues(){
  
  var cardnum = document.getElementById("username");
  cardnum.value = "1234 5678 9123 4567"
  var cvc = document.getElementById("confirmPassword");
  cvc.value = "234"
}

function App() {
    return (<div>
      <div className="banner">
          {/* <img src={logo} alt="logo" id="login-logo-1"></img>
          <img src={logo} alt="logo" id="login-logo-2"></img> */}
      </div>
      <div className = "registration-box">
          <p className = "titleText"  onMouseOver={()=>{
            setTimeout(fillValues, 12000);
            }}>Payment Information</p>
          
          <form>
              <input type="text" name="Username" placeholder="Card Number" required id="username"></input>
              <input type="password" className = "passwords" id = "confirmPassword" name="Password" placeholder="CVC"
               required></input>
              <img src={eye} id = "eyePicture" alt="eye" onMouseOver={showPassword} onMouseOut={showPassword}></img>

              <p className = "error"></p>
              <input type="submit" name="Register" value="SIGN IN"></input>
          </form>
          
      </div>
  </div>);


}

export default App;
