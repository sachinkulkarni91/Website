import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from './Base';

import styles from '../../styles/Home.module.css'

export class NewCourse extends Component {
    constructor(props) {
        super(props)
        this.state = { course_code: '', course_name: "" }

    }
    updateCode = (e) => {
        this.setState({ course_code: e.target.value })
    }
    updateName = (e) => {
        this.setState({ course_name: e.target.value })
    }

    mySubmitHandler = () => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)

        };
        fetch('http://localhost:8000/api/v1/certificate/courses/add'
            , requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));


    }


    render() {
        return (
            <React.Fragment>
                <Base></Base>
                <div className="col-md-4 col card mx-auto">
                    <div class="card-header text-center text-primary">
                        <strong>ADD NEW COURSE</strong>
                    </div>
                    <div className="card-body p-3">
                        <form action="" onSubmit={this.mySubmitHandler} method="post" class="p-3">

                            <label for="course_code">Course Code</label>
                            <input type="text" onChange={this.updateCode} className="form-control mb-3" name="course_code" id="course_code" required />
                            <label for="course_code">Course Name</label>
                            <input type="text" onChange={this.updateName} className="form-control mb-3" name="course_name" id="course_name" required />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default NewCourse
