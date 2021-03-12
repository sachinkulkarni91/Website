import React, { Component } from 'react'

export class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: this.props.itemObj
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.item.course_name}</h2>
                <hr />
                <h6>{this.state.item.course_code}</h6>

            </React.Fragment>
        )
    }
}

export default Courses
