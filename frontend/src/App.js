import React from 'react';

import Header from './components/Header';

function App() {
  const projects = ['Desenvolvimento de app', 'Front-end web'];

  return (
    //fragment impedir a criação de um elemento, porque o react não permite dois componentes react sozinhos
    <>
      <Header tittle="Projects">
        <ul>
          {projects.map(project => (
            <li>{project}</li>
          ))}
        </ul>
      </Header>
    </>
  );
}

export default App;
