const signUp = (user, success, error) => {
  $.ajax({
    url: '/api/users.json',
    type: 'POST',
    data: user,
    success,
    error
  });
};

const signIn = (user, success, error) => {
  $.ajax({
    url: '/api/session.json',
    type: 'POST',
    data: user,
    success,
    error
  });
};

const signOut = (success) => {
  $.ajax({
    url: '/api/session',
    type: 'DELETE',
    success
  });
};

const fetchUser = (id, success, error) => {
  $.ajax({
    url: `/api/users/${id}.json`,
    type: 'GET',
    success,
    error
  });
};

export { signIn, signOut, signUp, fetchUser };
