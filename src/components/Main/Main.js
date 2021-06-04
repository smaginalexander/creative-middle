import React from 'react';
import Card from '../Card/Card';
import SavedCard from '../SavedCard/SavedCard';
import './Main.css';

function Main(props) {
    console.log(props.savedCards);
    return (
        <>
            <main className="elements">
                {/* вывод всех квартир и избранных в зависимости от роута */}
                {props.location.pathname === '/' ?
                    props.response.response.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            handleAddCard={props.handleAddCard}
                        />
                    )) :
                    props.savedCards.map((card) => (
                        <SavedCard
                            key={card._id}
                            card={card}
                            handleDeleteCard={props.handleDeleteCard}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default Main;