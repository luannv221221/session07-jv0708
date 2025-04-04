import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        fullName: ""
    });
    const handleChangeInput = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const { name, value } = e.target;
        // cập nhật sate 
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // fetch("http://localhost:8080/api/v1/auth/sign-up", {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     // ...
        // })
        //     .then(respone => {
        //         if (respone.ok) {
        //             return respone.json();
        //         }
        //         throw new Error("***err");
        //     })
        //     .then(respone => {

        //         Swal.fire({
        //             title: "Good job!",
        //             text: "Đăng ký thành công",
        //             icon: "success",
        //             showConfirmButton: false,
        //             timer: 1000,
        //             timerProgressBar: true,
        //         });
        //         navigate("/product");
        //     }).catch(err => console.log(err))
        // console.log("data", user);
        axios.post('http://localhost:8080/api/v1/auth/sign-up', user)
            .then(function (response) {
                console.log(response);
                Swal.fire({
                    title: "Good job!",
                    text: "Đăng ký thành công",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                });
                navigate("/product");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit} method="POST">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" name="username" value={user.username} onChange={(e) => handleChangeInput(e)} />
                                                    <label className="form-label" >UserName</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" name="email" value={user.email} onChange={(e) => handleChangeInput(e)} />
                                                    <label className="form-label">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" name="password" value={user.password} onChange={(e) => handleChangeInput(e)} />
                                                    <label className="form-label">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" name="confirmPassword" value={user.confirmPassword} onChange={(e) => handleChangeInput(e)} />
                                                    <label className="form-label" >Repeat your password</label>
                                                </div>
                                            </div>



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register