import './index.css';
import Todo from './Todo';
import Modal from './Modal';
import Backdrop from './Backdrop';

function App() {
  return (
    <div>
        <h1>My Todos</h1>
        <Todo text="Junior"/>
        <Todo text="Midle"/>
        <Todo text="Senior"/>
        <Modal />
        <Backdrop />
     </div>
  );
}
export default App;