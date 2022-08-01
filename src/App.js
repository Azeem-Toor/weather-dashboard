import './App.scss';
import SideBar from './Components/SideBar/SideBar.jsx';
import TopBar from './Components/TopBar/TopBar.jsx';
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
            <h1> data comes here</h1>
        </div>
       
        </div>
        
       
    </div>
    
    </>
    
  );
}

export default App;
