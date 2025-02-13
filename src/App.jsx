import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

const App = () => {
  const [dados, setDados] = useState(['emoji1', 'emoji2', 'emoji3']);
  const [historico, setHistorico] = useState([]);

  const rolarTodos = () => {
    const novosDados = dados.map(() => 'emojiAleatorio'); // Substitua 'emojiAleatorio' pelo emoji real
    setDados(novosDados);
    setHistorico([...historico, ...novosDados]);
  };

  return (
    <div className="app">
      <Header />
      <Body dados={dados} historico={historico} rolarTodos={rolarTodos} />
    </div>
  );
};

export default App;