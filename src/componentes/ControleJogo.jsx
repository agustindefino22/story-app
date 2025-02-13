import React, { useState } from 'react';
import './ Controlejogo.css'

const ControleJogo = ({ onRolar }) => {
  const [quantidade, setQuantidade] = useState(3);

  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  };

  return (
    <div className="controle">
      <button onClick={onRolar}>Rolar Dados</button>
      <input
        type="number"
        value={quantidade}
        onChange={handleQuantidadeChange}
        min={1}
        max={10}
      />
    </div>
  );
};

export default ControleJogo;