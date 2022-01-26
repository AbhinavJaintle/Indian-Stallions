import './App.css';
import Midpage from './Midpage'
import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
     <Header />
    
      <div>
        <Midpage />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
