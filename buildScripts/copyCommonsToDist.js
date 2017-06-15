/* eslint-disable no-console */
import fsExtra from 'fs-extra';
import fs from 'fs';

fs.mkdir('dist/common', 777, (err) => {
  if (err) {
    return console.log(err);
  } else {
    fsExtra.copySync('cff/common','dist/common');
    console.log("common dir assets are copied successfully");
  }
});
