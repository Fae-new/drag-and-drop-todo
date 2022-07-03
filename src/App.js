
import React from 'react';
import './App.css';
import TodoBody from './components/body';
import Header from './components/header';
import {ThemeProvider} from './themecontext'
import {ItemsProvider} from './Itemscontext'




function App() {


  return (
<ThemeProvider>
  <ItemsProvider>
    <div className="App" >
    <Header/>
    <TodoBody/>
    </div>
    </ItemsProvider>
    </ThemeProvider>
  );
}

export default App;
