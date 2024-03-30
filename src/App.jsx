import LinkRouter from './router/LinkRouter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/solid.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/regular.min.css"
import './assets/scss/main.scss'

function App() {
  return (
    <div className="App">
     <LinkRouter/>
    </div>
  );
}

export default App;
