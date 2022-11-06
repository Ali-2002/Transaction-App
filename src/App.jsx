import Header from './components/Header';
import Pages from './components/Pages';
import Get from './components/Get';
import Post from './components/Post';
import Del from './components/Del';
import Put from './components/Put'
import { Route, Routes } from "react-router-dom";
const App= () => {

  return (
    <div className=' w-full h-full bg-gray-50'>

      <Header/>
      <Pages/>

      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/postTransaction" element={<Post/>} />
        <Route path="/updateTransaction" element={<Put/>} />
        <Route path="/deleteTransaction" element={<Del/>} />
      </Routes>

    </div>
  )
}

export default App
