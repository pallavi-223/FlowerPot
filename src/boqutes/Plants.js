
import React from 'react';
import './Occassions.css';
import GreenPlants from './GreenPlants';
import Orchids from './Orchids';
import Succulents from './Succulents';
import Cacti from './Cacti';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Plants = () => {
  return (
    <>
      <div class="dropdown">
        <span class="font serif">Plants</span>
        <div class="dropdown-content  font serif p-2 text-black">
          < Link to="/GreenPlants"> < a >Green Plants</a></Link><br></br>
          < Link to="/Orchids"> < a >Orchids</a></Link><br></br>
          < Link to="/Succulents"> < a >Succulents</a></Link><br></br>
          < Link to="/Cacti"> < a >Cacti</a></Link><br></br>
        </div>
      </div>

      <Route path="/GreenPlants" exact component={GreenPlants}></Route>
      <Route path="/Orchids" exact component={Orchids}></Route>
      <Route path="/Succulents" exact component={Succulents}></Route>
      <Route path="/Cacti" exact component={Cacti}></Route>
    </>
  )
}
export default Plants