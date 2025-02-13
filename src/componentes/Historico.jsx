import './Historico.css'

const Historico = ({ historico }) => {
  return (
    <div className="historico">
      <h3>Histórico</h3>
      <ul>
        {historico.map((emoji, index) => (
          <li key={index}>{emoji}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;