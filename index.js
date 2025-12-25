import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.render('index.ejs', {
    // guestName : 'Leonard Raditya',
  //   groom : 'Sondra',
  //   bride : 'Felita'
  // })
  res.render('playGroundLeo.ejs', {
    welcoming : 'Welcome to your Playground Testing!'
  })
});

// gausah buat button pake yang move ke page lain
// app.post('/submit', (req, res) => {
//     res.render('invite.ejs');
// });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});