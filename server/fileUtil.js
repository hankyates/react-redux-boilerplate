import fs from 'fs';

export default path => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
})
