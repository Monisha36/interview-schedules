import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setRecords(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate Lists</h2>
      <table className="table table-striped table-bordered table-style"
             style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Phone</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.company.name}</td>
              <td>{d.phone}</td>
              <td>
                {d.id && (
                  <Link to={`/Read/${d.id}`} className='btn btn-sm btn-info me-2'>Schedule Interview</Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
