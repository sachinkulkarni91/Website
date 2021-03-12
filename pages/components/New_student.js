import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from './Base';
export function New_student() {
    
        return (
            <React.Fragment>
                <div>
        <Base></Base>
      </div>
                <div class="col-md-4 col card mx-auto">
                    <div class="card-header text-center text-primary">
                        <strong>
                            
              UPDATE STUDENT
     
              ADD NEW STUDENT
          
                        </strong>
                    </div>
                    <div className="card-body p-3">
                       
        <form action="" method="post" className="p-3">
                            
          <form action="" method="post" className="p-3">
                              
                                <label for="student">Student</label>
                                <input type="text" className="form-control mb-3" name="student" id="student" value="" required />
                                    <label for="reg">Reg. No</label>
                                    <input type="text" className="form-control mb-3" name="reg" id="reg" value="" required readonly />
                                        <label for="course_code">Course Code</label>
                                        <input type="text" className="form-control mb-3" name="course_code" id="course_code" value="" required readonly />
                                            <label for="batch_code">Batch Code</label>
                                            <input type="text" className="form-control mb-3" name="batch_code" id="batch_code" value="" required readonly />
                                                
            <button type="submit" class="btn btn-primary">Update</button>
                                             <br></br>
                                             <br></br>
              <button type="submit" class="btn btn-primary">Submit</button>
                                                
        </form>
        </form>
    </div>
</div>
                
            </React.Fragment>
        )
    }


export default New_student
