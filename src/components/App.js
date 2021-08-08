import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
    >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />  
                <Route path="/login" component={Login} />  
                <Route path="/forget-password" component={ForgetPassword} />  
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
