import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <Container>
            <h1>Social Media Analytics Dashboard</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Bio</th>
                        <th>Contact Options</th>
                        <th>Action Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.category}</td>
                            <td>{user.bio}</td>
                            <td>{user.contactOptions}</td>
                            <td>{user.actionButtons}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Dashboard;
