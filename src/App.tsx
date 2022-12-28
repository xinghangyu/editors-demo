import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import EmailEditorDemo from './components/emailEditor/EmailEditorDemo';
import Home from './components/home';
import Layout from './components/Layout';
import Quill from './components/quill2/Quill';
import SlateDemo from './components/slate/SlateDemo';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="slate" element={<SlateDemo />} />
          <Route path="email-editor" element={<EmailEditorDemo />} />
          <Route path="quill2" element={<Quill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
