import './App.scss';
import SideBar from './Components/SideBar/SideBar.jsx';
import TopBar from './Components/TopBar/TopBar.jsx';
import WeatherReports from './Container/WeatherReports/WeatherReports';

function App() {
  return (
    <>
    <div className='Main__container'>
      <div className='SideBar__container'>
        <SideBar/>
      
        </div>
        <div className='TopBar__container'>
        <TopBar/>
        <div className='App__content'>
        <WeatherReports/>
        </div>
       
        </div>
        
       
    </div>
    
    </>
    
  );
}

export default App;
