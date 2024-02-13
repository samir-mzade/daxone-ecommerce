import LinkRouter from './router/LinkRouter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/solid.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css"
import './assets/scss/main.scss'
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
     {/* <LinkRouter/> */}
     <Layout/>
    </div>
  );
}

export default App;
