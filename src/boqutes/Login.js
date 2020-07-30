import React from 'react'
import "./Homepage.css"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div style={{ textAlign: "center" }} class="log">
            <div class="container " style={{
                width: '800px',
                height: '580px'
            }}>
                <div class="row">
                    <div class="col-md-5 mx-auto py-4 px-0">
                        <div class="card mt-5 p-0">
                            <div class="card-title text-center">
                                <h5 class="mt-5">LOGIN</h5> <small class="para">Login to your Floral account below.</small>
                            </div>
                            <form class="signup">
                                <div class="form-group"><input type="text" class="form-control" placeholder="Username" /></div>
                                <div class="form-group"><input type="password" class="form-control" placeholder="password" /></div> <button type="button" class="btn btn-primary">Login</button>
                                <div class="row">
                                    <div class="col-6 col-sm-6"> <a href="#">
                                        <p class="text-left pt-2 ml-1">Forgot password?</p>
                                    </a> </div>
                                    <div class="col-6 col-sm-6">
                                        <a href="#">
                                            <Link to='/Signup'> <p class="text-right pt-2 mr-1">Sign Up Now</p>
                                            </Link> </a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

