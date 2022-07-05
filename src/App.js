import './App.css';
import Form from './components/Form.js';
import Table from './components/Table';
function App() {
  return (
    <div className="splitScreen">
      <div className="leftPane">
        <Form />
      </div>
      <div className="rightPane">
        <Table />
      </div>
    </div>
  );
}

export default App;
