const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');



const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
    maxAge: 24*60*60*1000, 
    httpOnly: false, 
    secure: true,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
