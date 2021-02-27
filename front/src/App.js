import "tailwindcss/tailwind.css"


import Sidebar from "./components/layout/Sidebar"
import Main from './components/layout/Main'

function App() {
  return (
    <div className="App bg-gray-100">
      <div className="font-mont grid gap-1 grid-cols-6">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
