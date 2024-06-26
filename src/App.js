
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App" id="app">
      
        <Navbar />
        <Sidebar />
        <Home />
    </div>
  );
}

export default App;
