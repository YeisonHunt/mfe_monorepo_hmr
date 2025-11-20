import { useState } from 'react';
import './Table.css';

const Table = () => {
  const [data] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'QA Engineer' }
  ]);

  return (
    <div className="table-container">
      <h2>Shared Table Component 22</h2>
      <p className="table-description">This table is from the shared @repo/ui package with HMR!</p>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
