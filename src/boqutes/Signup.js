import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const SignUp = () => {

    return (
        <>

            <div >

                <div class="pt-3 " style={{ height: '525px', background: '#e6f9ff', fontfamily: 'Roboto sans-serif' }}>
                    <div class="row  d-flex justify-content-center mt-5">
                        <div class="col-md-6 col-lg-4">
                            <form class="card mb-5" style={{ height: "270px", width: "300px" }}>

                                <h5 class="card-title pt-3 text-center">Register now</h5>
                                <p class="text-center font-size: 25px">Create your account. It's free and only takes a minute.</p>
                                <div class="card-body ">
                                    <div class="form-group"> <input class="form-control" type="text" placeholder="Email" /> </div>
                                    <div class="form-group"> <input class="form-control" type="password" placeholder="Password" /> </div>
                                    <div class="form-group"> <input class="form-control" type="password" placeholder="Confirm Password" /> </div> <button class="btn btn-block btn-bold btn-primary">Sign Up</button>
                                </div>
                                <p class="small text-center">By clicking the Sign Up button, you agree to our <br></br><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.</p>
                                <Link to='/Login'><div class=" text-center text-dark">Already have an account?
                     <a href="#" class="text-danger ">Login here</a>.</div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SignUp
