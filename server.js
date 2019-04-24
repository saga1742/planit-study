/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
var cons = require('consolidate');
app.engine('html', cons.swig);
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/


var db = pgp(process.env.DATABASE_URL);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

app.get('/', function(req, res) { //when you get a request with just /, do this code
	res.redirect('views/login.html');
});

app.get('/login', function(req, res) { //when you get a request for login
  res.render('views/login.html',{ //render this page
  });
});

app.get('/assignments', function(req, res) { //when you get a request for login
  res.render('views/assignments.html',{ //render this page
  });
});

app.get('/calendar', function(req, res) { //when you get a request for login
  res.render('views/calendar.html',{ //render this page
  });
});

app.get('/files', function(req, res) { //when you get a request for login
  res.render('views/files.html',{ //render this page
  });
});

app.get('/gradebook', function(req, res) { //when you get a request for login
  res.render('views/gradebook.html',{ //render this page
  });
});

app.get('/index', function(req, res) { //when you get a request for login
  res.render('views/index.html',{ //render this page
  });
});

app.get('/registration', function(req, res) { //when you get a request for login
  res.render('views/registration.html',{ //render this page
  });
});

app.post('/views/registration/submit', function(req, res) { //when you get a request for login
  var id_query = 'SELECT MAX(user_id) FROM users;';
  db.task('get-everything', task => {
        return task.batch([
            task.any(id_query)
        ]);
    })
    .then(info => {
        var query = 'INSERT INTO users(user_id, email, password, first_name, last_name, events) VALUES(\'' + (parseInt(info[0][0]['max'])+1) + '\',\'' + req.body.email + '\',\'' + req.body.password + '\',\'' + req.body.fname + '\',\'' + req.body.lname + '\',\'{}\');';
        db.task('get-everything', task => {
          return task.batch([
              task.any(query)
          ]);
        })
        .then(info => {
            res.redirect('../login.html');
        })
        .catch(error => {
            // display error message in case an error
            console.log('error: ' + error);
        });
    })
    .catch(error => {
        // display error message in case an error
        console.log('error: ' + error);
    });
});

app.post('/views/login/authenticate', function(req, res) { //when you get a request for login
  var id_query = 'SELECT * FROM users WHERE email=\'' + req.body.email + '\' AND password=\'' + req.body.password + '\';';
  db.task('get-everything', task => {
        return task.batch([
            task.any(id_query)
        ]);
    })
    .then(info => {
        if(info[0][0]){
          res.render('index.html', {
            user: info[0][0]
          });
        } else {
          res.redirect('../login.html');
        }

    })
    .catch(error => {
        // display error message in case an error
        console.log('error: ' + error);
    });
});

app.listen((process.env.PORT || 3000));