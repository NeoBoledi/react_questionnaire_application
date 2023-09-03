import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Create from './components/Create';
import Questionnaires from './components/Questionnaires';
// import { AddForm } from './components/AddForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddForm from './components/AddForm';


function App() {
  return (

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/questionnaires' element={<Questionnaires />} />
          <Route path='/addForm' element={<AddForm />} />
        </Routes>
      </Router>
    </div>

    // <div style={{ display: 'flex', flexDirection: 'row' }}>
    //   <Sidebar />
    //   <Dashboard />
    //   <Create />
    //   <Questionnaires />
    //   <AddForm />
    // </div>

  );
}

export default App;
