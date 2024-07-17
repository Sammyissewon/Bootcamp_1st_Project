import React from 'react';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default App;