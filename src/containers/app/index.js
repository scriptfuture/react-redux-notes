import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Notes from '../notes'
import Note from '../note'
import Tag from '../tag'

const App = () => (
  <div>
    <header>
      <Link to="/">Главная</Link>
      <Link to="/about-us">О проекте</Link>
	  <Link to="/newnote">Новая заметка</Link>
	  <Link to="/notes">Заметки</Link>
	  <Link to="/tags">Теги</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about-us" component={About} /> 
	  
	  <Route exact path="/newnote" component={Notes} />
	  <Route exact path="/notes/:page" component={Notes} />
	  <Route exact path="/notes" component={Notes} />
	  
	  <Route exact path="/note/:id" component={Note} />
	  
	  <Route exact path="/tags" component={Notes} />
      <Route exact path="/tag/:id" component={Tag} />
    </main>
  </div>
)

export default App
