import './Body.css';
import React from 'react';
import Dado from './Dado';
import Historico from './Historico';
import ControleJogo from './ControleJogo';
import Acessibilidade from './Acessibilidade';

const Body = ({ dados, historico, rolarTodos }) => {
  return (
    <div className="body">
      <h1>Bem-vindo ao jogo de dados!</h1>
      <div className="mesa">
        {dados.map((emoji, index) => (
          <Dado key={index} emoji={emoji} />
        ))}
      </div>
      <ControleJogo onRolar={rolarTodos} />
      <Historico historico={historico} />
      <Acessibilidade dados={dados} />
    </div>
  );
};

export default Body;
