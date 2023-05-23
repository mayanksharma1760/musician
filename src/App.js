import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Musicartist from './components/home/musicartist/Musicartist.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from './components/about/Aboutpage';
import Musicband from './components/home/musicband/Musicband';
import Albumview from './components/listen/album view/Albumview';
import Albumsingle from './components/listen/album single/Albumsingle';
import Eventsclean from './components/events/eventsclean/Eventsclean';
import Eventssingleclean from './components/events/eventssinglclean/Eventssingleclean';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Bandstore from './components/home/bandstore/Bandstore';
import Musicblog from './components/home/musicblog/Musicblog';
// import { Path } from 'react-router-dom';
function App(props) {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Musicartist />} />
          <Route exact path="/musicband" element={<Musicband/>}/>
          <Route exact path="/musicblog" element={<Musicblog/>}/>
          <Route exact path="/bandstore" element={<Bandstore/>}/>
          <Route exact path="/aboutpage" element={<Aboutpage/>}/>
          <Route exact path="/albumview" element={<Albumview/>}/>
          <Route exact path="/albumsingle" element={<Albumsingle/>}/>
          <Route exact path="/eventsclean" element={<Eventsclean/>}/>
          <Route exact path="/eventssingleclean" element={<Eventssingleclean/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    


    </div>
  );
}

export default App;
