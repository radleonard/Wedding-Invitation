import express from 'express';

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('playGroundLeo.ejs', {
        welcoming : 'Welcome to your Playground Testing!',
        iconPath : 'images/LogoLIONARE.png' , 
    })

})
    

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});