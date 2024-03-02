import { Form, Button } from 'react-bootstrap';

function NewUser({ newUser, setNewUser, createUser }) {
    return (
        <Form style={{ width: '30rem', margin: '4em auto' }}>
            <h1>Add New User</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={newUser.firstName} 
                onInput={(e) => setNewUser({
                    ...newUser,
                    firstName: e.target.value
                })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={newUser.lastName}
                onInput={(e) => setNewUser({
                    ...newUser,
                    lastName: e.target.value
                })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={newUser.email}
                onInput={(e) => setNewUser({
                    ...newUser,
                    email: e.target.value
                })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Avatar URL</Form.Label>
                <Form.Control type="text" value={newUser.avatar}
                onInput={(e) => setNewUser({
                    ...newUser,
                    avatar: e.target.value
                })}/>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={(e) => createUser(e)}>Add user</Button>
        </Form>
    );
}

export default NewUser;