import React from 'react';
// this is for header and footer
// <Header />
// {children}
// <Footer />

const App = ({children}) => (
  <div>
    <h1>Welcome!</h1>
    {children}
  </div>
);

export default App;
