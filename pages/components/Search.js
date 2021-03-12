import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Search() {

    return (
        <React.Fragment>
            <h3>Search Results:</h3>

            <h6>Search results available from Student Table</h6>
            <hr class="mb-0"></hr>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td><a href="">View Details</a></td>
                    </tr>

                    <tr>
                        <td colspan="5" class="text-center">
                            <a class="text-center text-muted p-5"><small>No results found to show</small></a>
                        </td>
                    </tr>

                </tbody>
            </table>
            <br />
            <h6>Search results available from Batch Table</h6>
            <hr class="mb-0" />
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Course Code</th>
                        <th scope="col">Students Count</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="">View Details</a></td>
                    </tr>

                    <tr>
                        <td colspan="5" class="text-center">
                            <a class="text-center text-muted p-5"><small>No results found to show</small></a>
                        </td>
                    </tr>

                </tbody>
            </table>
            <br />
            <h6>Search results available from Course Table</h6>
            <hr class="mb-0" />
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Batches Count</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="">View Details</a></td>
                    </tr>

                    <tr>
                        <td colspan="5" class="text-center">
                            <a class="text-center text-muted p-5"><small>No results found to show</small></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </React.Fragment>
    )
}


export default Search
