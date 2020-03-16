import React from 'react';
import logo from './logo.svg';
import './App.css';

      function App() {
           return (
            <div className="conteiner">
                <header>
                    <nav id="menu">
                        <input type="checkbox" id="check"/>
                        <label id="icone" for="check">
                        <img src={require("../src/img/icone.png")}/> </label>
                        <div className="barra">
                            
                            <a href=""><div class="link">Home</div></a>
                            <a href=""><div class="link">Em Alta</div></a>
                            <a href=""><div class="link">Inscrições</div></a>
                            <a href=""><div class="link">Relevante</div></a>
                            <a href=""><div class="link">Originais</div></a>
                            <a href=""><div class="link">Biblioteca</div></a>
                            <a href=""><div class="link">Historico</div></a>

                        </div>
                         <ul>
                         <li><a href="#">Logo</a></li>
                         <input type="search" placeholder="Buscar"/>
                         </ul>
                    </nav>
                 
             
                </header>
         <main>
                 <div id="video1"class="containers"><video controls src="http://soter.ninja/videos/1.mp4">Media1</video></div>
                 <div id="video2"class="containers"><video controls src="http://soter.ninja/videos/2.mp4"></video></div>
                 <div id="video3"class="containers"><video controls src="http://soter.ninja/videos/3.mp4"></video></div>
                 <div id="video4"class="containers"><video controls src="http://soter.ninja/videos/4.mp4"></video></div>
                 <div id="video5"class="containers"><video controls src="http://soter.ninja/videos/5.mp4"></video></div>
                 <div id="video6"class="containers"><video controls src="http://soter.ninja/videos/6.mp4"></video></div>
                 <div id="video7"class="containers"><video controls src="http://soter.ninja/videos/7.mp4"></video></div>
                 <div id="video8"class="containers"><video controls src="http://soter.ninja/videos/8.mp4"></video>
                 </div>
         </main>
         
         <footer>
          <p>EU MORRO NO FOOTER</p>
         </footer>
     </div>

        );
   };
    
        

export default App;
