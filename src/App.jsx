import './assets/css/style.css';
import Avatar from './assets/components/Avatar';
import Switch from './assets/components/Switch'

function App() {
  return (
    <>
        <Avatar />
        <Switch />

        <div className="interaction">
            <form className="form" action="" method="get">
                <label htmlFor="cpf">Digite um CPF:</label>
                <input type="text" id="cpf" name="cpf" maxLength="14" />
                <button>Vamos ver</button>
            </form>
            
        </div>

        <div id="result"></div>
    </>
  );
}

export default App;
