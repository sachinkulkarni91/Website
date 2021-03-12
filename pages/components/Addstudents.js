import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Addstudents extends Component {
    render() {
        return (
            <React.Fragment>

                <div class="col-6">
                    <input type="file" id="fileUpload" class="form-control" />
                </div>
                <div class="col-2">
                    <input type="button" id="upload" class="form-control" value="Upload" />
                </div>
                <div class="row m-0 label bg-light p-3 text-center">
                    <div class="col-1">S.No</div>
                    <div class="col">Name</div>
                    <div class="col">Reg. ID</div>
                    <div class="col">Certf. ID</div>
                    <div class="col">Start Date</div>
                    <div class="col">End Date</div>
                </div>
                <form action="" method="POST">

                    <div id="records"></div>

                </form>
            </React.Fragment >
        )
    }
}

export default Addstudents
