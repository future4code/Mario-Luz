import React from 'react';
import './App.css';
import {Post} from './components/Post/Post.js'

function App() {
  return (
    <section className="App">
      <Post nome="MarioLuz" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
      <Post nome="MarioLuz" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
      <Post nome="MarioLuz" avatar="http://picsum.photos/60/60" postImage="http://picsum.photos/500/500?a=1"/>
    </section>
  );
}

export default App;
