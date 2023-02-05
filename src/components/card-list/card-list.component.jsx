import React from "react";
import './card-list.styles.css';
import Card from "../Card/card.component";


const CardList = ({ monsters }) => (
        <div className="card-list">
            {monsters.map((monster) => {
                
                return <Card monster={monster}/>
            })}
        </div>
    )


export default CardList