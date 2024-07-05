import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { CurrentSong } from "./pages/CurrentSong/CurrentSong";

;

function App() {
  return (
    <div className="App" id="app">
      
        <Navbar />
        <Sidebar />
        <CurrentSong />
    </div>
  );
}

export default App;
