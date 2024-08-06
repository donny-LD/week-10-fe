import { useState } from "react";
import { signup } from "../..utils/fetch";
import styled from "styled-components";

const Signup = ({}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("submit Handler");

    const data = await signup(username, email, password);
    console.log("data in signup: ", data);

    setLogSign.setIsLoggedIn(true);
    setLogSign.setUserLogged({ username });
  };

  return (
    <FormContainer>
      <h2>Signup</h2>
      <Form onSubmit={submitHandler}>
        <Label>
          Username:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </FormContainer>
  );
};
export default Signup;

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
