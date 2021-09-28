export function getAuthForm() {
    return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield">
      <input type="email" id="email" required>
      <label for="email">Email</label>
    </div>
    <div class="mui-textfield">
      <input type="password" id="password" required>
      <label for="password">password</label>
    </div>
    <button 
    type="submit" 
    class="mui-btn mui-btn--raised mui-btn--primary"
    >
    Login</button>
  </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyCf7tttgptAx_U99laskWg4O_EXZ-iAdkY'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AIzaSyCf7tttgptAx_U99laskWg4O_EXZ-iAdkY}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}