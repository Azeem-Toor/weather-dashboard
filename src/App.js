
import './App.scss';
import SideBar from './Components/SideBar/SideBar.jsx';
import TopBar from './Components/TopBar/TopBar.jsx';
function App() {
  return (
    <div className='Main__container'>
        <SideBar/>
        <TopBar/>
        <div className='Main__container-Content'>
            <h1> data comes here</h1>
        </div>
    </div>
  );
}

export default App;
