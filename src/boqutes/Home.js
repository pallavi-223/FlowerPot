import React from 'react'
import Homepage from './Homepage'
import Login from './Login'
import Contents from './Ocassions';
import Plants from './Plants'
import Signup from './Signup'
import ItemDetails from './ItemDetails'
import Bcart from './Bcart'
import Menu from './Menu'
import Aboutus from './Aboutus'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function Home() {
    return (
        <>
            <Router>
                <div className="container-fluid">
                    <header className="pt-2 mx-auto">
                        <nav className="navbar navbar-expand  font serif text-black navbar-light bg-light">
                            <img height="70px" width="70px" className="ml-0" src="https://i.ytimg.com/vi/lPLQHwnc9Do/maxresdefault.jpg" />
                            <h4 style={{ fontSize: "35px" }} className="  navbar-brand  text-primary">
                                THE FLOWER POT</h4>


                            <ul className="navbar-nav pt-3 c" style={{ fontSize: '17px' }} >

                                <li className="nav-item  pt-3 pr-4" >
                                    <Link to="/Homepage"><a className="nav-link  text-dark  text-primary" href="#">Home</a>
                                    </Link></li>




                                <li className="pr-4 nav-item pr-4  pt-3">
                                    <Link to="/Signup"> <a className=" nav-link text-dark   text-primary" href="# "><img height="20px" width="20px" src="https://t3.ftcdn.net/jpg/02/59/39/46/240_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg " />Sign up</a>

                                    </Link> </li>

                                <li className="nav-item pt-3 pr-4">
                                    <Link to="/Aboutus"><a className=" nav-link text-dark  text-primary" href="#">Aboutus</a>
                                    </Link></li>

                                <li className=" nav-item pt-3 ">
                                    <Link to="Bcart">  <img src="https://tse4.mm.bing.net/th?id=OIP.fYPFuy5ypGwIotPEJMp_BAHaHa&pid=Api&P=0&w=20&h=20" />
                                    </Link> </li>
                            </ul>
                        </nav>
                        <hr class="a"></hr>


                        <div class="bg-light" >
                            <Link to='/Menu'>
                                <button className=" s  btn-lg border mb-3" >Shop All</button></Link>

                            <Plants></Plants>    <Contents></Contents>

                        </div>


                    </header>








                    <Route path="/Homepage" exact component={Homepage}></Route>
                    <Route path="/Login" exact component={Login}></Route>
                    <Route path="/Signup" exact component={Signup}></Route>
                    <Route path="/Bcart" exact component={Bcart}></Route>
                    <Route path="/Menu" exact component={Menu}></Route>
                    <Route path="/Aboutus" exact component={Aboutus}></Route>
                    <Route path="/ItemDetails" exact strict component={ItemDetails}></Route>







                </div>
            </Router>








            <div class="row bg-primary " >
                <div class="row mx-auto" >
                    <div class="col-2 text-white p-5 mt-2 ">

                        <a href="#" class="text-white">Shop All</a><br />
                        <a href="#" class="text-white">Blog</a><br />
                        <a href="#" class="text-white">About Flowes</a><br />
                        <a href="#" class="text-white">Careers</a><br />

                    </div>
                    <div class="col-3 text-white p-5 mt-2" >

                        <a href="#" class="text-white">The Spring</a><br />
                        <a href="#" class="text-white">Collection</a><br />
                        <a href="#" class="text-white">Mothers Day</a><br />
                        <a href="#" class="text-white" >Valentains Day</a><br />
                        <a href="#" class="text-white">NewYork</a><br />
                        <a href="#" class="text-white">Chocago</a><br />
                        <a href="#" class="text-white">Washinton ,DC</a><br />

                    </div>
                    <div class="col-4 text-white p-5 mt-1">

                        <a href="#" class="text-white">Subscription</a><br />
                        <a href="#" class="text-white">Cooperation Gifting</a><br />
                        <a href="#" class="text-white">Realtor Gifting</a><br />
                        <a href="#" class="text-white">About</a><br />
                        <a href="#" class="text-white">Help& FAQ</a><br />
                        <a href="#" class="text-white">Terms</a><br />

                    </div>
                    <div class="col-3 text-white p-5 mt-2">
                        <h6>Get $15 through invite</h6>

                        <button type="button" class="btn btn-warning pl-5 pr-5 pt-3 pd-3">INVITE</button>
                    </div>



                </div>



            </div>


        </>
    )
}
export default Home