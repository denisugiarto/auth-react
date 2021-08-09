import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout, emailVerification, deleteAccount } = useAuth();
  const history = useHistory();

  function handleResend() {
    return emailVerification();
  }

  function handleDelete() {
    return deleteAccount();
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }
  console.log(currentUser);
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Email: </strong> {currentUser.email}
          </p>
          <p>
            <strong>Verification: </strong>{" "}
            {currentUser.emailVerified.toString()}
          </p>
          {!currentUser.emailVerified && (
            <Button onClick={handleResend} variant="info">
              Resend Verification
            </Button>
          )}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Button onClick={handleDelete} variant="danger" className="w-100 mt-3">Delete Account</Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}
