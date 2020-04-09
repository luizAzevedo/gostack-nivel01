import React from 'react';

import Header from './components/Header';

function App() {
  return (

    //fragment impedir a criação de um elemento, porque o react não permite dois componentes react sozinhos
    
    <>  
      <Header />
      <Header />
    </>
  );
}

export default App;
