import {Get,Post,Put,Del,Pages,Header} from './components'
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
