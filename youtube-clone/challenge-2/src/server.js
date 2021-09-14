import express from 'express';

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  res.send('This is home');
}

const handleAbout = (req, res) => {
  res.send('This is About');

}
const handleContact = (req, res) => {
  res.send('This is Contact');
  
}
const handleLogin = (req, res) => {
  res.send('This is Login');
  
}

app.get('/', handleHome);
app.get('/about', handleAbout);
app.get('/contact', handleContact);
app.get('/login', handleLogin);

app.listen(PORT);