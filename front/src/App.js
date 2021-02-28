import "tailwindcss/tailwind.css"


import Sidebar from "./components/layout/Sidebar"
import Main from './components/layout/Main'

function App() {
  return (
    <div className="App bg-indigo-450">
      <div className="font-mont grid grid-cols-6">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
