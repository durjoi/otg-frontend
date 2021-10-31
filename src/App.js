import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path="/booking">
              <Booking></Booking>
          </PrivateRoute>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
