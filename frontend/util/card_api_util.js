const fetchExpansionCards = (id, success) => {
  $.ajax({
    url: `/api/expansions/${id}.json`,
    type: 'GET',
    success
  });
};

export { fetchExpansionCards };
