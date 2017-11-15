const fs = require('fs');
const cssnano = require('cssnano');
const cssbeautify = require('cssbeautify');
const cssnanoOpts = {};

let startDir = '';
let endDir = '';
let options = { singleFile: '', clearDest: false, content: '#000000', backgrounds: '#ffffff' };

let firstCopyeration = '';
let firstIteration = '';
let customCss = '@import url("highContrast/ghost.css"); @import url("font/stylesheet.css");';

const replaceArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
const replaceArrayValue = ['f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', 'ffe4c4', '000000', 'ffebcd', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00ffff', '00008b', '008b8b', 'b8860b', 'a9a9a9', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', 'd3d3d3', 'd3d3d3', '90ee90', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', 'ff00ff', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', '663399', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32'];


function iterate(copyFrom, copyTo) {
  if (!fs.existsSync(copyTo)) {
    fs.mkdirSync(copyTo);
  }

  if (firstIteration === '') {
    firstIteration = copyFrom;
  }

  fs.readdir(copyFrom, (readdirErr, filesPath) => {
    if (readdirErr) {
      throw readdirErr;
    }

    filesPath.map(filePath => {
      const fullPath = copyFrom + filePath;
      const writeFullPath = fullPath.replace(firstIteration, copyTo);

      if (fs.statSync(fullPath).isDirectory()) {
        if (!options.singleFile) {
          fs.mkdir(writeFullPath);
        }
        iterate(`${fullPath}/`, copyTo);
      } else {
        fs.readFile(fullPath, 'utf8', (readFileErr, data) => {
          if (readFileErr) {
            throw readFileErr;
          }

          data = cssbeautify(data);

          // remove comments
          data = data.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

          // remove declarations with no color, background or #
          data = data.replace(/^((?!\.[a-z])(?![#{}])(?!color.)(?!background.).)*$/gm, '');

          // background-image to none
          data = data.replace(/background-image\:(.*?)\;/g, ' background-image: none;');

          // url() to none
          data = data.replace(/url\((.*?)\)/g, 'none');

          // remove declarations
          data = data.replace(/^(?![.#{}]).*([-]position|position[-]|[a-z][-.]-repeat[\:s]|zoom[\:s]|transform[\:s]|transition[\:s]|px;|box-shadow|[a-z][-.]gradient).*$/gm, '');

          for (var i = replaceArray.length - 1; i >= 0; i--) {
            data = data.replace(RegExp('(?!.*[.#{}])\\b' + replaceArray[i], 'gim'), '#' + replaceArrayValue[i]);
          }

          data = data.replace(/(backgrounds.*)(#([a-fA-F0-9]{3}){1,2})/gm, '$1p1aceH0ld3r');
          data = data.replace(/(#([a-fA-F0-9]{3}){1,2})/gm, options.content);
          data = data.replace(/p1aceH0ld3r/gm, options.backgrounds);


          cssnano.process(data, cssnanoOpts).then(result => {
            if (!options.singleFile) {
              const writeCss = customCss.concat(result);
              fs.writeFile(writeFullPath, writeCss, writeCssErr => {
                if (writeCssErr) {
                  throw writeCssErr;
                }
              });
            } else {
              customCss = customCss.concat(result);
              fs.writeFile(copyTo + options.singleFile, customCss, writeCssErr => {
                if (writeCssErr) {
                  throw writeCssErr;
                }
              });
            }
          });
        });
      }
    });
  });
}


function copyerate(copyFrom, copyTo) {
  if (!fs.existsSync(copyTo)) {
    fs.mkdirSync(copyTo);
  }

  if (firstCopyeration === '') {
    firstCopyeration = copyFrom;
  }

  fs.readdir(copyFrom, (readdirErr, filesPath) => {
    if (readdirErr) {
      throw readdirErr;
    }

    filesPath.map(filePath => {
      const fullPath = copyFrom + filePath;
      const writeFullPath = fullPath.replace(firstCopyeration, copyTo);
      if (fs.statSync(fullPath).isDirectory()) {
        fs.mkdir(writeFullPath);
        copyerate(`${fullPath}/`, endDir);
      } else {
        fs.readFile(fullPath, 'utf8', (readFileErr, data) => {
          if (readFileErr) {
            throw readFileErr;
          }

          if (fullPath.indexOf(".css") > 0) {
            data = data.replace(/(backgrounds[ :].*)(#([a-fA-F0-9]{3}){1,2})/gm, '$1p1aceH0ld3r');
            data = data.replace(/(#([a-fA-F0-9]{3}){1,2})/gm, options.content);
            data = data.replace(/p1aceH0ld3r/gm, options.backgrounds);
          }

          fs.writeFile(writeFullPath, data, writeFileErr => {
            if (writeFileErr) {
              throw writeFileErr;
            }
          });
        });
      }
    });
  });
}


function deleteRecursive(path) {
  if (options.clearDest) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file) => {
        const curPath = `${path}/${file}`;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
    }
  }
  if (path !== endDir) {
    fs.rmdirSync(path);
  } else {
    iterate(startDir, endDir);
    copyerate('pack/', endDir);
  }
}


function startIterator(data) {
  startDir = data.src;
  endDir = data.dest;

  if (data.options) {
    Object.keys(data.options).forEach(key => {
      options[key] = data.options[key];
    });
  }

  deleteRecursive(endDir);
}

module.exports = startIterator;
