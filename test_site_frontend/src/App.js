import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/navigation/navbar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
