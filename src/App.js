import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import ViewUser from "../src/pages/Post/View";
import AddEditPost from "../src/pages/Post/AddEditPost";
import HomePage from "../src/pages/Home/HomePage";
import UserPage from "../src/pages/User/Index";
import PostPage from "..//src/pages/Post/Index";
import ViewPost from "../src/pages/Post/View";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import Facebook from "./pages/Home/Facebook";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (response) => {
      console.log('Logged in Successfully', response);
  }

  function handleLoginFailure(error) {
    console.log('Logged Failed', error);
  }

  const responseFacebook = (response) => {
    console.log(response)
  }



  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
   <div>
    {isLoggedIn ? (
      <>
      <Header/>
      <Footer/>
      </>
    ) : (
      <Login onLogin={handleLogin}/>
      
    )
    
  }
  
  <div className="other-signin-options">
  <GoogleLogin
         
         clientId="vijayakrishnan.h@youngsoft.in"
         buttonText="Login with Google"
         onSuccess={handleLoginSuccess}  
         onFailure={handleLoginFailure}
         cookiePolicy={"single_host_origin"}
      />
       <Facebook/>
      </div>
   </div>
  )
}


function Login({onLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [blogUsers, setblogUsers] = useState([
    {
       id: 1,
      name: "Leanne Graham",
      username: "Bret",
      password: "vijay@123",
      adminUser: "Yes",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suit: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      adminUser: "No",
      password: "vijay@123",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suit: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      password: "vijay@123",
      adminUser: "No",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suit: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      password: "vijay@123",
      adminUser: "No",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suit: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
      }
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      password: "vijay@123",
      adminUser: "No",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suit: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      }
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      password: "vijay@123",
      adminUser: "No",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suit: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478"
        }
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
      }
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      password: "vijay@123",
      adminUser: "Yes",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suit: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984"
        }
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers"
      }
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      password: "vijay@123",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suit: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677"
        }
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers"
      }
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      password: "vijay@123",
      adminUser: "Yes",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suit: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889"
        }
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies"
      }
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      password: "vijay@123",
      adminUser: "No",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suit: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232"
        }
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      }
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = username;
    console.log(searchTerm);
    const filteredUsers = blogUsers.map((user) => user.username);
    if(filteredUsers.includes(searchTerm)) {
      localStorage.setItem('username',username);
      onLogin();
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In to My User Blog</h3>
          <div className="form-group mt-3">
            <label>Enter Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
