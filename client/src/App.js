import { Routes, Route } from 'react-router-dom'
import { Home, NotFound } from './components/landings'


function App() {
  return (
    <Routes>
      <Route index element ={ <Home /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
