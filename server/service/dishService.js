import Dish from '../models/Dish';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

const DISHES_SAVED = 'Dishes Saved Sucessfully';

//Get Voters
export function getDishes(req, res) {
  Dish.find()
    .sort('number')
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}

export function saveDishes(req, res) {
  if (!req.body) return res.sendStatus(400);

  const dishes = req.body;

  Dish.remove().then(err => {
    dishes.forEach(d => {
      let dish = new Dish({ ...d });

      dish.save((err, data) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
    });
  });

  res.status(200).send({ message: DISHES_SAVED });
}

export function saveImage(req, res) {
  let id = req.params.id;
  var form = new formidable.IncomingForm();

  form.uploadDir = path.join(__dirname, '../uploads');

  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));

    Dish.update(
      { _id: id },
      {
        image: file.name
      },
      function(err, affected, resp) {
        console.log(resp);
      }
    );
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);
}

export function getImage(req, res) {
  fs.readFile(path.join(__dirname, `../uploads/${req.params.file}`), function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}
