import { parentPort, workerData } from "worker_threads";
import im from "imagemagick";

(function workerFunction() {
  console.log(workerData);
  im.resize(
    {
      srcPath: "dummy.jpg",
      dstPath: "dummy-small.jpg",
      width: 20,
    },
    function (err) {
      if (err) throw err;
      console.log("resized kittens.jpg to fit within 20px");
    }
  );
})();

// const pathToFfmpeg = require('ffmpeg-static');
// ffmpeg -i imageName.jpg -vf scale=20:-1 imageName-small.jpg
console.log(pathToFfmpeg);
