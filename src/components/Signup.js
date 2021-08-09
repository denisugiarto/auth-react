import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form, ToggleButton } from "react-bootstrap";
import { useAuth } from "./../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, login } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEmailCanRegis, setIsEmailCanRegis] = useState(false);
  const [isPassOk, setIsPassOk] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");
    setMessage("");

    promises.push(signup(emailRef.current.value, passwordRef.current.value));
    Promise.all(promises)
      .then(() => {
        setMessage("Sign up successfull check your inbox mail");
      })
      .catch((error) => {
        const isRegisted =
          error.code === "auth/wrong-password" ||
          error.code === "auth/email-already-exist";
        const isBusy = error.code === "auth/too-many-requests";
        isRegisted ? setError("Email already use") : setError("Sign up failed");
        isBusy ? setError("too many request") : setError("");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handlePassConfirm() {
    setLoading(true);
    setError("");
    setMessage("");
    const check =
      passwordRef.current.value !== passwordConfirmRef.current.value;
    if (check) {
      setError("Password do not match");
      setMessage("");
      setIsPassOk(false);
    } else {
      setMessage("Password match");
      setError("");
      setIsPassOk(true);
    }
    setLoading(false);
  }

  async function handleUserTest() {
    try {
      setError("");
      setLoading(true);
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (emailRegex.test(emailRef.current.value)) {
        await login(emailRef.current.value, "123456");
      } else {
        setError("Email invalid");
        setMessage("");
      }
    } catch (error) {
      const isRegisted =
        error.code === "auth/wrong-password" ||
        error.code === "auth/email-already-exist";
      const isBusy = error.code === "auth/too-many-requests";
      console.log(error.code);
      console.log("isRegisted = " + isRegisted);
      if (isRegisted) {
        setError("User already exist");
        setMessage("");
      } else if (isBusy) {
        setError("Server busy");
      } else if (error.code === "auth/user-not-found") {
        setMessage("You can use this email");
        setError("");
        setIsEmailCanRegis(true);
        setChecked(true);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required autoComplete="on" name="email"/>
            </Form.Group>
            <Form.Group>
              <ToggleButton
                onClick={handleUserTest}
                className="mt-1 mb-2"
                id="toggle-check btn-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                size="sm"
              >
                Check Email
              </ToggleButton>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handlePassConfirm}
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                onChange={handlePassConfirm}
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading || !isEmailCanRegis || !isPassOk}
              className="w-100 mt-3"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
}
