import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from './Base';

export class New_Batch extends Component {
    render() {
        return (
            <React.Fragment>
                <Base></Base>

                <div class="col-md-4 col card mx-auto">
                    <div class="card-header text-center text-primary">
                        <strong>ADD NEW BATCH</strong>
                    </div>
                    <div class="card-body p-3">
                        <form action="" method="post" class="p-3">

                            <label for="course_code">Course Code</label>
                            <select type="text" class="form-control mb-3" name="course_code" id="course_code" required>

                                <option value=""></option>

                            </select>
                            <label for="batch_code">Batch Code</label>
                            <input type="text" class="form-control mb-3" name="batch_code" id="batch_code" required />
                            <label for="batch_code">Batch Name</label>
                            <input type="text" class="form-control mb-3" name="batch_name" id="batch_name" required />
                            <label for="start_date">Start Date</label>
                            <input type="date" class="form-control mb-3" name="start_date" id="start_date" required />
                            <label for="end_date">End Date</label>
                            <input type="date" class="form-control mb-3" name="end_date" id="end_date" required />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default New_Batch
