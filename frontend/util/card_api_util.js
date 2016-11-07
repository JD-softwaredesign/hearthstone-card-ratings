const fetchExpansionCards = (id, success) => {
  $.ajax({
    url: `/api/expansions/${id}.json`,
    type: 'GET',
    success
  });
};

const fetchCard = (id, success) => {
  $.ajax({
    url: `/api/cards/${id}.json`,
    type: 'GET',
    success
  });
};

export { fetchExpansionCards, fetchCard };
