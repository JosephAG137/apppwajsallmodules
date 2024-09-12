import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import MyFunctions from "./fuctions/MyFunctions.jsx";
// import MyPromises from './fuctions/MyPromises.jsx';
// import MyPromisesAll from './fuctions/MyPromisesAll.jsx';
// import MyPromisesRace from './fuctions/MyPromisesRace.jsx';
// import MyFetchAPIs from './fuctions/MyFetchAPIs.jsx';
// import MyFetchPost from './functions/MyFetchPost.jsx';
// import MyFetchPut from './functions/MyFetchPut';
import MyFetchBlob from './functions/MyFetchBlob';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyPromisesRace /> */}
    {/* <MyFetchAPIs/> */}
    {/* <MyFetchPost/> */}
    {/* <MyFetchPut/> */}
    <MyFetchBlob/>
  </StrictMode>
);