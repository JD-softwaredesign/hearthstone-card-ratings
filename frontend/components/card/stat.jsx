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
        <td>{card.standard}</td>
        <td>{card.arena}</td>
      </tr>
      <tr>
        <td>Yours</td>
        <td>{user.rating[card.id-1]}</td>
        <td>{user.arena_rating[card.id-1]}</td>
      </tr>
    </tbody>
  </table>;
};

export default Stat;
