import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GetStarted from './components/GetStarted'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Step1 from './components/Step1'


const App = () => {
  return (
    <div >
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<GetStarted />} />
           <Route path="/step1" element={<Step1 />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;
