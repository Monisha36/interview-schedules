import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import './read.css';

function Read() {
    const [records, setRecords] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setRecords([res.data]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const firstRecord = records.length > 0 ? records[0] : null;

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light mx-auto">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded details-container">
                <h3 className="mt-3">Details</h3>
                {firstRecord && (
                    <>
                        <div className="mb-2">
                            <span className="detail-label">Name:</span>
                            <span className="detail-value">{firstRecord.name}</span>
                        </div>
                        <div className="mb-2">
                            <span className="detail-label">Email:</span>
                            <span className="detail-value">{firstRecord.email}</span>
                        </div>
                        <div className="mb-2">
                            <span className="detail-label">Company:</span>
                            <span className="detail-value">{firstRecord.company.name}</span>
                        </div>
                        <div className="mb-2">
                            <span className="detail-label">Phone:</span>
                            <span className="detail-value">{firstRecord.phone}</span>
                        </div>
                    </>
                )}

                <div className="container-fluid text-center mt-4">
                    <h4>Waiting List Section</h4>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button className="btn btn-sm btn-info w-75 text-wrap">Action 1</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center mt-4">
                    <h4>Second Round Section</h4>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button className="btn btn-sm btn-info w-75 text-wrap">Action 2</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center mt-4">
                    <div className="row">
                        <div className="col-6 mb-2">
                            <button className="btn btn-sm btn-info w-75 text-wrap">View Resume</button>
                        </div>
                        <div className="col-6">
                            <Link to="/" className="btn btn-sm btn-info w-75 text-wrap">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;
