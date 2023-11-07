import axios from "axios";
import { useEffect, useState } from "react";

import CardShow from "./CardShow";


const Card = () => {
  const [cards, setCards] = useState([])
  useEffect( ()=> {
    axios.get('/feature.json')
    .then(res => {
      setCards(res.data)
    })
  }, [])
  console.log(cards);
    return (
        <div className="grid gap-7 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 lg:my-14">
            { cards.map(( card, index) => <CardShow key={index} card={card}></CardShow>)}
        </div>
    );
};

export default Card;