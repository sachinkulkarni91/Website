import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import styles from '../../styles/Home.module.css'

import { useState, useEffect } from 'react';
import Link from 'next/link'

function Base() {
    const [Search, setSearch] = useState('')
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <React.Fragment>
            <head>

                <title>Certificates Portal | Skillsafari</title>

            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                    <div className="container-fluid">
                        <img src="https://skillsafaribucket.s3.ap-south-1.amazonaws.com/logo" className="col-3 col-md-1  navbar-brand"
                            alt="skillsafari" />
                        <form className='text-center' action="" method="get">
                            <div class="input-group">
                                <input type="text" onChange={updateSearch} class="form-control " placeholder="Search" aria-label="Search" aria-describedby="button-addon2" name="search" value={Search} />
                                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                            </div>
                        </form>
                        <ul class="navbar-nav ml-auto mr-0">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Logout</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <div class="row text-center my-4">
                        <div class="col-md">
                            <Link href='/components/NewCourse' >
                                <a class="card px-3 py-5 my-2 bg-primary text-white" >
                                    <h3>Add Course</h3>
                                </a>
                            </Link>


                        </div>
                        <div class="col-md">


                            <Link href='/components/New_Batch' >
                                <a class="card px-3 py-5 my-2 bg-primary text-white" >
                                    <h3>Add Batch</h3>
                                </a>
                            </Link>

                        </div>
                        <div class="col-md">
                            <a class="card px-3 py-5 my-2 bg-info text-white" href="">
                                <h3>Add Certificate</h3>
                            </a>
                        </div>
                    </div>

                </div>


            </body>
        </React.Fragment>
    )
}


export default Base
