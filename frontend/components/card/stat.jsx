import React from 'react';

const Stat = ({card, user}) => {
  return <table className='statistic'>
    <thead>
      <tr>
        <th></th>
        <th>Standard</th>
        <th>Arena</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Average</td>
        <td>{card.standard ? card.standard.toFixed(2) : 'Not rated'}</td>
        <td>{card.arena ? card.arena.toFixed(2) : 'Not rated'}</td>
      </tr>
      <tr>
        <td>Yours</td>
        <td>{Number(user.rating[card.id-1]) || 'Not rated'}</td>
        <td>{Number(user.arena_rating[card.id-1]) || 'Not rated'}</td>
      </tr>
    </tbody>
  </table>;
};

export default Stat;
