  const passwords = [
    "abc123",
    "catdog",
    "thanks",
    "goodie",
  ]
let currentIndex = 0;
const PasswordController = (app) => {
    app.get('/api/password', findUsers);
}

const findUsers = (req, res) => {
    currentIndex = (currentIndex + 1) 
    const nextPassword = passwords[currentIndex % passwords.length];
    res.json({"password": 
        nextPassword,
        username: "user" + currentIndex
    })
    
}
export default PasswordController;
