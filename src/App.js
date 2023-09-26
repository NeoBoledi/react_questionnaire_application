import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Create from './components/Create';
import Edit from './components/EditForm';
import Questionnaires from './components/Questionnaires';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/questionnaires' element={<Questionnaires />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
