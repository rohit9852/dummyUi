import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import InstructorSlot from './components/instrucctorSlot';

function App() {
  return (
    <div>
<Router>
      <Header />
      <Switch>
        <Route exact path="/" component={InstructorSlot} />
        <Route path="/instructor" component={InstructorSlot} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
