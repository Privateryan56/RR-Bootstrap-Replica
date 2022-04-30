import './App.css';
import Background from './Components/Background';
import TopBar from './Components/TopBar';
import StoreListings from './Components/StoreListings';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Background/>
      <StoreListings/>
    </div>
  );
}

export default App;
