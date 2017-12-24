import Dish from '../models/Dish';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

const IMAGE_SAVED = 'Image uploaded!';

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
    res.status(200).send({ message: IMAGE_SAVED });
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
