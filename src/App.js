import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import Event from './Components/Event/Event';
import MyBooking from './Components/MyBooking/MyBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <main>
          <Switch>
            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route exact path='/event'>
              <Event></Event>
            </Route>

            <PrivateRoute path="/event/create">
                <CreateEvent></CreateEvent>
            </PrivateRoute>

            <PrivateRoute exact path="/booking/:user_id">
                <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute exact path="/booking">
                <Booking></Booking>
            </PrivateRoute>

          </Switch>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
