const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/node-mongo-hw-db' 

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const Schema = mongoose.Schema
const item = new Schema({
    date: String,
    img_url: String,
})
const APOD = mongoose.model("APOD", item)

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// The method of the root url. Be friendly and welcome our user :)
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the APOD app.' });   
});

router.get("/db/all", (req, res) => {
		APOD.find().then((apods) => {
      res.json({ message: 'Return all apods.', apods: apods});
    })
});

router.route("/db/:id")
	.get((req, res) => {
		APOD.findById(req.params.id, (error, apod) => {
			if (error) {
				res.status(500).json({ status: "failure" })
			} else {
				res.json(apod)
	        }
        })
	})
	.delete((req, res) => {
		APOD.findByIdAndDelete(req.params.id, (error, apod) => {
			if (error) {
				res.status(500).json({ status: "failure"})
			} else {
				res.json(apod)
			}
        })
	})

router.post("/db", (req, res) => {
    const apod = APOD({  
		date: req.body.date,
		img_url: req.body.img_url,
	})
	apod.save((error, document) => {
		res.json({
			status: "success",
			id: apod._id,
			content: req.body
		})
	})
});

app.use(express.static('../client'));
app.use('/api', router); // API Root url at: http://localhost:8080/api

app.listen(port);
console.log('Server listenning on port ' + port);
