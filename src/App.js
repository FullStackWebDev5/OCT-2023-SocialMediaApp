import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent'
import Users from './components/Users'
import NewUser from './components/NewUser'

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avatar: ''
  })

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = () => {
    axios
      .get('http://localhost:4000/users')
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error))
  }

  const createUser = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:4000/users', newUser)
      .then((res) => fetchUsers())
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <Row>
          {users.length ? users.map((user, index) =>
            <Col md={4} key={index}>
              <Users user={user} />
            </Col>
          ) : <div style={{ textAlign: 'center', marginTop: '2em' }}><Spinner animation="border" role="status" /></div>
        }
        </Row>
        <NewUser newUser={newUser} setNewUser={setNewUser} createUser={createUser} />
      </Container>
    </div>
  );
}

export default App;
