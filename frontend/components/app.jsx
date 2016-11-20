import React from 'react';
import HeaderContainer from '../components/header/header_container.js';
// this is for header and footer
// <Header />
// {children}
// <Footer />

const App = ({children}) => (
  <div>
    <HeaderContainer />
    {children}
  </div>
);

export default App;
