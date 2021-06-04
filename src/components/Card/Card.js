import React from 'react';
import './Card.css';

function Card(props) {
    const [isLiked, setIsLiked] = React.useState(false);
    const likeCat = () => {
        setIsLiked(true)
        props.handleAddCard(
            props.card.img,
            props.card.attributes.title,
            props.card.attributes.address.city,
            props.card.attributes.address.street,
            props.card.attributes.address.house,
            props.card.attributes.address.room,
            props.card.relationships.attributes.first_name,
            props.card.relationships.attributes.last_name,
            props.card.id
        )
    }
    const unLikeCat = () => {
        setIsLiked(false)
    }

    return (
        <div className="card">
            <img className="card__img" src={props.card.img} alt="квартира" />
            <div className="card__container">
                <p>{props.card.attributes.title}</p>
                <p>{props.card.attributes.address.city}&nbsp;{props.card.attributes.address.street}&nbsp;{props.card.attributes.address.house}&nbsp;{props.card.attributes.address.room}</p>
                <p>Хозяин:&nbsp;{props.card.relationships.attributes.first_name}&nbsp;{props.card.relationships.attributes.last_name}</p>
            </div>
            {isLiked ?
                <span onClick={unLikeCat} className="card__like card__like_true" /> :
                <span onClick={likeCat} className="card__like card__like_false" />
            }
        </div>
    )
}

export default Card;