import "tailwindcss/tailwind.css"


import Sidebar from "./components/layout/Sidebar"
import Main from './components/layout/Main'

function App() {
  return (
    <div className="App">
      <div className="flex flex-1">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
