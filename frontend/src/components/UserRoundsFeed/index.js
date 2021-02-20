import React, { useEffect, useState } from 'react';
import RoundsCard from '../RoundsCard'

const UserRoundsFeed = ({ roundsArray }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(roundsArray) && roundsArray[0] && Array.isArray(roundsArray[0].Items)){
      const itemsArray = roundsArray.map((round) => round.Items[0])
      setItems(itemsArray)
    }
  }, [roundsArray])

  return (
    <>
      {!Array.isArray(roundsArray) && <h2>loading...</h2>}
      {Array.isArray(roundsArray) && items && roundsArray.map((round, i) => {
        return (
          <div key={round.id}>
            {(!round || !round.Items[0]) && "loading..."}
            {round && round.Items[0] &&
              <RoundsCard
                round={round}
                site={round.Items[0].Sites[0]}
                user={null}
                item={items[i]}
                type="user"
              />
            }
          </div>
        )
      })}
    </>
  )
}

export default UserRoundsFeed;