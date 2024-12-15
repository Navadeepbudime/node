const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const { render } = require('ejs');

//express app
const app=express()

//connection to mongo
const dbURI="mongodb+srv://Navadeep:Aneesh1@cluster0.rqf8j.mongodb.net/note-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI)
    .then((result)=> app.listen(9000))
    .catch((err)=>console.log(err))

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs',blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});