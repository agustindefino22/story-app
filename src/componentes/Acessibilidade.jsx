import React from 'react';
import './Acessibilidade.css';S

const Acessibilidade = ({ dados }) => {
  return (
    <div className="acessibilidade">
      <p>Dados Sorteados:</p>
      {dados.map((emoji, index) => (
        <p key={index} aria-live="polite">
          {emoji}
        </p>
      ))}
    </div>
  );
};

export default Acessibilidade;
