const fetchExpansions = (success) => {
  $.ajax({
    url: '/api/expansions.json',
    type: 'GET',
    success
  });
};

export { fetchExpansions };
