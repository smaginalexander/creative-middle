import React from 'react';
import '../Card/Card.css';

function SavedCard(props) {
    const [isLiked, setIsLiked] = React.useState(true);
    //при клике на лайк передадим id карточки в тело запроса
    const likeCat = () => {
        setIsLiked(true)
    }
    console.log(props);
    const unLikeCat = () => {
        setIsLiked(false)
        props.handleDeleteCard(props.card.id)
    }

    return (
        <div className="card">
            <img className="card__img" src={props.card.img} alt="квартира" />
            <div className="card__container">
                <p>{props.card.title}</p>
                <p>{props.card.city}&nbsp;{props.card.street}&nbsp;{props.card.house}&nbsp;{props.card.room}</p>
                <p>Хозяин:&nbsp;{props.card.first_name}&nbsp;{props.card.last_name}</p>
            </div>
            {isLiked ?
                <span onClick={unLikeCat} className="card__like card__like_true" /> :
                <span onClick={likeCat} className="card__like card__like_false" />
            }
        </div>
    )
}

export default SavedCard;