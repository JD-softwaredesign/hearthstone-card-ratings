import React from 'react';
// this is for header and footer
// <Header />
// {children}
// <Footer />

const App = ({children}) => (
  <div id="splash">
    {children}
  </div>
);

export default App;
