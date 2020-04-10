import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    // aplicando o conceito de imutabilidade
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Luiz Azevedo',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    //fragment impedir a criação de um elemento, porque o react não permite dois componentes react sozinhos
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt="BackgroundImage" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

/**
 * useState retorna um array com 2 posições
 * 1. Variável com o seu valor inicial
 * 2. Função para atualizar esse valor
 */

/**
 * useEffect utilizar para disparar funções, recebe dois parametros
 * - Sempre que tiver alguma informação alterada
 * - Disparar alguma função sempre que um componente for exibido em tela
 * 1. Qual função quer disparar.
 * 2. Quando quer disparar essa função. (é conhecido como array de dependencias )
 */
