import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

// Não possuem valor semântico (signicado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"
// Não tem herança

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Luiz Azevedo',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#7159c1" />
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* <View style={styles.container}>
        {projects.map((project) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
