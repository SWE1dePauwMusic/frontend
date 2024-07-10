import "./App.css";
//import PlaylistCard from "./components/Card/PlaylistCard/PlaylistCard";
//import Like from "./components/Like/Like";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Playlist from "./pages/Playlist /Playlist";
//import { CurrentSong } from "./pages/CurrentSong/CurrentSong";

;

function App() {
  return (
    <div className="App" id="app">
      
        <Navbar />
        <Sidebar />
        <Playlist />
        
    </div>
  );
}

export default App;
