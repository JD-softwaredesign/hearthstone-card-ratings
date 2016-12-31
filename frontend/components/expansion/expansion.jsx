import React from 'react';
import ExpansionIndexItem from './expansion_index_item.jsx';
import Notification from './notification.jsx';

const heroClassImages = ['', 'http://i.imgur.com/r3BYqXS.png',
'http://i.imgur.com/zwYlp7S.png',
'http://i.imgur.com/1U87pMY.png',
'http://i.imgur.com/hHJFvxJ.png',
'http://i.imgur.com/t8mxqu3.png',
'http://i.imgur.com/k5itdph.png',
'http://i.imgur.com/OpxyFGZ.png',
'http://i.imgur.com/YAXrp2c.png',
'http://i.imgur.com/o9J4KKb.png'
];

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mana: undefined,
      heroClass: undefined,
      rated: undefined
    };
  }

  ratedFilterHelper(ratedState, rating, arenaRating) {
    if (ratedState) {
      return Boolean(Number(rating)) || Boolean(Number(arenaRating));
    } else {
      return Boolean(Number(rating)) === false && Boolean(Number(arenaRating)) === false;
    }
  }

  renderCards() {
    let cards = this.props.cards;
    let { mana, heroClass, rated } = this.state;
    cards = cards.filter((card) => {
      let composedFilter = true;
      let manaFilter = card.mana === mana || (mana === '7+' && card.mana >= 7);
      let classFilter = card.hero_class === heroClass;
      let ratedFilter = this.ratedFilterHelper(rated, this.props.rating[card.id-1], this.props.arena_rating[card.id-1]);
      let filters = [manaFilter, classFilter, ratedFilter];
      [mana, heroClass, rated].forEach((f, idx) => {
        if (f !== undefined) {
          composedFilter = composedFilter && filters[idx];
        }
      });
      return composedFilter;
    });
    return cards.map((card) => {
      // for statistic
      if (card.average !== 0) {
      return <ExpansionIndexItem
        key={card.name}
        card={ card }/>;
    }
    });
  }

  applyFilter(filter, value) {
    this.setState({[filter]: value});
  }

  heroClassFilters() {
    let selected = this.state.heroClass;
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((hero) => {
      return <img
        className={'hero_class_img' + (selected === hero ? " selected" : "")}
        key={`heroClassFilter${hero}`}
        src={ heroClassImages[hero] }
        onClick={ this.applyFilter.bind(this, 'heroClass', hero) }></img>;
    });
  }

  manaFilters() {
    let selected = this.state.mana;
    return [0, 1, 2, 3, 4, 5, 6, '7+'].map((mana) => {
      return <div
        key={`manaFilter${mana}`}
        className={"crystal" + (selected === mana ? " selected" : "")}
        onClick={ this.applyFilter.bind(this, 'mana', mana) }>{ mana }</div>;
    });
  }

  ratedFilter() {
    return <form>
      <label>
        <input type='radio'
          name='rating_state'
          onChange={ this.applyFilter.bind(this, 'rated', true)}>
          </input>rated</label>
      <label>
        <input type='radio' name='rating_state'
          onChange={ this.applyFilter.bind(this, 'rated', false)}>
          </input>unrated</label>
    </form>;
  }

  clearFilter(e) {
    e.preventDefault();
    e.target.previousSibling.reset();
    this.setState({
      mana: undefined,
      heroClass: undefined,
      rated: undefined
    });
  }

  render() {
    let last = this.props.cards[this.props.cards.length-1];
    return (
      <div>
        <Notification lastCard={last} />
        <div className='filters'>
          <div className="mana_filter">{ this.manaFilters() }</div>
          <div className="class_filter">{ this.heroClassFilters() }</div>
          <div className='rated_filter'>
            { this.ratedFilter() }
            <button onClick={ this.clearFilter.bind(this) }>Clear</button>
          </div>
        </div>
        <ul className="cards_list">{ this.renderCards() }</ul>
      </div>
    );
  }
}

export default Expansion;
