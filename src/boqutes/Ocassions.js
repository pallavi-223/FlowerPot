import React, { useContext } from 'react'
import './Occassions.css'


import Anniversary from './Anniversary';
import Birthday from './Birthday';
import Congrats from './Congrats';
import Sympathy from './Sympathy';
import Love from './Love';
import Thankyou from './Thankyou';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Occassions = () => {
  return (

    <>
      <div class="dropdown ">
        <span class="font serif">Occassions</span>
        <div class="dropdown-content  font serif">
          < Link to="/Anniversary">< a >Anniversary</a></Link><br></br>
          < Link to="/Birthday">< a >Birthday</a></Link><br></br>
          < Link to="/Congrats">< a >Congrats</a></Link><br></br>
          < Link to="/Sympathy">< a >Sympathy</a></Link><br></br>
          < Link to="/Love">< a >Love</a></Link><br></br>
          < Link to="/Thankyou"> < a >Thankyou</a> </Link>
        </div>
      </div>

      <Route path="/Anniversary" exact component={Anniversary}></Route>
      <Route path="/Birthday" exact component={Birthday}></Route>
      <Route path="/Congrats" exact component={Congrats}></Route>
      <Route path="/Sympathy" exact component={Sympathy}></Route>
      <Route path="/Love" exact component={Love}></Route>
      <Route path="/Thankyou" exact component={Thankyou}></Route>


    </>
  )
}
export default Occassions