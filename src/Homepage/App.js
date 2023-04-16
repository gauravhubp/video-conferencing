
import ReactDOM from "react-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import logo from './images/meet.png';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import video from './images/v.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import carousel from "react-bootstrap";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import TvIcon from '@mui/icons-material/Tv';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";
import Lobby from "../lobby";

function clickLobby()
{
  console.log("clicked");
  ReactDOM.render(
  <Lobby />,
    document.getElementById("root")
  );
}

function App() {
  
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    return (
      <div className="Home-app">
        
        <div>
        <header className="Home">
        <h1 class="head"><GroupsIcon /> Meety
        {
            isAuthenticated ? (<button type="button" class="buttonlogout btn-outline-blue" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <LogoutIcon /> Log Out
           </button>
            ) : null
        }
        </h1>
        </header> 
        </div>
        
        <div class="row">
           <div class="row1 col-lg-6 col-md-12">
              <h2 class="rh">Fast,reliable and secure conferencing.</h2>
              <p class="row1note" >Hold incredible events,share knowledge,build and grow your community,create opportunity.</p>
              
              {!isAuthenticated ? (<button class="button button5" onClick={() => loginWithRedirect()}><OndemandVideoIcon/> Let's Get Started</button>) :
                 <button class="button button5" onClick={clickLobby}><OndemandVideoIcon/> Enter The Lobby</button>
              }
              
           </div>
           <div class="row2 col-lg-6 col-md-12">
           <img class="logo" src={logo} alt="react logo" />
           </div>
        </div>


        <div class="row">
        <div class="row21 col-lg-6 col-md-12">
            <p class="row2note">Conference Online specialises in Event Technology and services such as Event Management, Virtual Event Management, Event Print and Design, Namebadges, etc. We put a strong focus on the needs of your event to provide solutions</p>
           </div>
           <div class="row22 col-lg-6 col-md-12">
              <h5 class="rs">Ready to setup your next conference</h5>
           </div>
        </div>


        <div class="row">
        <div class="row31 col-lg-6 col-md-12">
        <video class="video" autoplay="true" controls="controls" src={video} /> 
        </div>
        
        <div class="row32 col-lg-6 col-md-12">
              
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="50">
           <div class="carousel-inner">
             <div class="carousel-item active">
             <img class="p" src={p1} alt="img" />
             </div>
             <div class="carousel-item">
             <img class="p" src={p2} alt="img" />
             </div>
             <div class="carousel-item">
             <img class="p" src={p3} alt="img" />
             </div>
             <div class="carousel-item">
             <img class="p" src={p4} alt="img" />
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
          </div>

          </div>
        </div>


        <div class="js-pill" id="pills-tab" role="tablist">


    <button class="nav-link-js btn btn-outline-purple active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Events</button>

    <button class="nav-link-js btn btn-outline-purple" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Spaces</button>


    <button class="nav-link-js btn btn-outline-purple" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Developers</button>

</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
    <p class="para-tab"><EmojiEventsIcon /> Online webinars</p>
    <p class="para-tab"><SmartDisplayIcon /> Community Events</p>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <p class="para-tab"><TvIcon/> Connected Rooms</p>
    <p class="para-tab"><WorkspacesIcon /> Workspaces</p>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"> 
    <p class="para-tab"><AppSettingsAltIcon /> Market Place</p>
    <p class="para-tab"><StorefrontIcon /> Apps</p></div>
 </div>


         {/* Second last div */}
         <div id="second-last" class="carousel slide" data-bs-ride="carousel" data-interval="100">
           <div class="carousel-inner">
             <div class="carousel-item active">
             <div class="talk">
            <h2 class="talkhead">Powerfull Virtual Conference Platform</h2>
            <p class="talkpara">We approach online conference,virtual and hybrid events differently.</p>
          </div>
             </div>
             <div class="carousel-item">
             <div class="talk">
            <h2 class="talkhead">Top rated Conference Platform</h2>
            <p class="talkpara">We provide the smooth,secure and responsive platform</p>
          </div>
             </div>
             <div class="carousel-item">
             <div class="talk">
            <h2 class="talkhead">Connect and share ideas with people</h2>
            <p class="talkpara">Share opinions,have discussions and debates.</p>
          </div>
             </div>
           </div>
          
          </div>

          
<footer id="footer">
  <div class="foot">
    <div class="container-fluid">
    <i class="social-icon fab fa-facebook-f"></i>
    <i class="social-icon fab fa-twitter"></i>
    <i class="social-icon fab fa-instagram"></i>
  </div>
    <p class="footpara">© Copyright Meety</p>
  </div>
  </footer>
        
      </div>
    );
  }
  
  export default App;
  