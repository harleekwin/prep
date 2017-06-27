import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();

router.post('/', (req, res) => {
  let movie = req.body;
  movie._id = new mongodb.ObjectID(req.body._id)
  database.db.collection('movies').save(movie).then(() => {
    res.end();
  })
})

export default router;
