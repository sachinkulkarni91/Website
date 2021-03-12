import React, { Component } from 'react'

export class students extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="batch/add" class="btn btn-primary mx-1" style="float: right">Add Students</a>
                <a href="add" class="btn btn-primary mx-1" style="float: right">Add Student</a>
                <h1>Students:</h1>
                <div class="row">
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">S. No</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Certificate ID</th>
                                <th scope="col">Certificate</th>
                                <th scope="col">LOR</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>

                                    <a href="">Certificate</a>

                                    <span class="text-muted">Not Available</span>

                                </td>
                                <td>

                                    <a href="">LOR</a>
                                    <span class="text-muted">Not Available</span>

                                </td>
                                <td><a href="{% url 'edit-student' course=course batch=batch.batch_code reg=student.id %}">Edit</a></td>
                                <td><a type="button" data-toggle="modal" data-target="#deleteModal{{forloop.counter}}">Delete</a>
                                </td>
                            </tr>
                            <div class="modal fade" id="deleteModal{{forloop.counter}}" tabindex="-1" role="dialog"
                                aria-labelledby="deleteModal{{forloop.counter}}Title" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Delete Student</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Are you sure your want to delete the Student <strong></strong> ?</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger"><a href="" class="text-white">Delete</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default students
