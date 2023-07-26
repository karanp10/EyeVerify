import './App.css';
import logo from './synchrony.png'
import eye from './eye.png'

function showPassword() {
  var passwordList = document.getElementById('confirmPassword');
  // for(let i = 0;i<2;i++){
      var x = passwordList;
      if (x.type === "password") {
          x.type = "text";
      } else {
          x.type = "password";
      }
  // }
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
          <img src={logo} alt="logo" id="login-logo-1"></img>
          <img src={logo} alt="logo" id="login-logo-2"></img>
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

    // <div className="App">
    //   <div className="container">
    //     <h1>Payment Information</h1>
    //     <form>
    //       <label for="Card Number" >Card Number: </label>
    //       <input type="text" id="card-number" name="Card Number"></input>
    //       <br></br>
    //       <label for="cvc">CVC: </label>
    //       <input type="text" id="cvc" name="cvc"></input>
    //       <br></br>
    //       <button>Submit</button>
    //     </form>
    //   </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

}

export default App;
