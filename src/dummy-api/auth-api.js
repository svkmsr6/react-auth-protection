export function signup(email, password) {
  const authPromise = new Promise((resolve, reject) => {
    if (email && password) {
      reject('Please enter valid inputs');
    }
    resolve({
      token: 'abc',
    });
  });
  return authPromise;
}

export function login(email, password) {
  const authPromise = new Promise((resolve, reject) => {
    if (email && password !== 'secretpassword') {
      reject('Invalid credentials');
    }
    resolve({
      token: 'abc',
    });
  });
  return authPromise;
}
