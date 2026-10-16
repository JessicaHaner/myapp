import './Greeting.css';

function Greetings({ nome, mensagem = 'Seja bem-vindo(a)!' }) {
  return (
    <div className="greeting">
      <span className="greeting__eyebrow">React - Primeiros Passos</span>
      <h1>{nome}, {mensagem}!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

export default Greetings;
