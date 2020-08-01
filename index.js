// =============================== APP SETUP ==================================

// import frameworks for app config
const bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

// connect to mongodb through mongoose
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

// setup app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// ============================== RESTFUL ROUTES ==============================

// landing page
app.get('/', (req, res) => {
    res.render('index');
});

// default to the landing page
app.get('*', (req, res) => {
    res.redirect('/');
});

// ============================ DATABASE MANAGEMENT ===========================



// ================================ DEPLOY APP ================================

app.listen(3000, () => {
    console.log('Server has started!');
});