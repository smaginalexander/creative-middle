import { Route, useLocation } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

import response from '../../utils/entities';
import './App.css';

function App() {
  //передадим в компоненты, где будем использовать как условие 
  const location = useLocation();
  const [savedCards, setSavedCards] = React.useState([])

  function handleAddCard(url, name, city, street, house, room, first_name, last_name, id) {
    setSavedCards([...savedCards, {
      img: url,
      title: name,
      city: city,
      street: street,
      house: house,
      room: room,
      first_name: first_name,
      last_name: last_name,
      id: id
    }])
  }

  function handleDeleteCard(id) {
    let arr = savedCards.filter((item) => item.id !== id)
    setSavedCards(arr)
  }

  console.log(savedCards);
  return (
    <div className="app">
      <Header location={location} />
      <Route exact path="/">
        <Main
          handleAddCard={handleAddCard}
          response={response}
          location={location}
        />
      </Route>
      <Route path="/saved-cats">
        <Main
          handleDeleteCard={handleDeleteCard}
          savedCards={savedCards}
          location={location}
        />
      </Route>
    </div>
  );
}

export default App;
