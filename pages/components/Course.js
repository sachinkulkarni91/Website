import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from './Base';
import Courses from './Courses';


export class Course extends Component {
    constructor(props) {
        super(props)


        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };


    }
    componentDidMount() {

        fetch("http://localhost:8000/api/v1/certificate/courses", { mode: 'no-cors' })
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({

                        items: result
                    }); console.log(typeof (result))
                },

                (error) => {
                    this.setState({

                        error
                    });
                }
            )
    }

    render() {
        return (
            <React.Fragment >

                <h1>{console.log(this.state.items)}</h1>
                <div class="row my-2 ml-5">
                    <h1>Courses : </h1>
                </div>
                <div class="row">


                    <a className="col col-md-3 text-dark p-0 ml-3" href="">

                        {this.state.items.map((item, index) => <div key={index} className="card m-1 p-5 bg-light " ><Courses className="card m-1 p-5 bg-light " itemObj={item}></Courses></div>)}


                    </a>

                </div>

            </React.Fragment>
        )
    }
}

export default Course
