var fs = require("fs");

function readTxtFile(file){
  return fs.readFileSync(file).toString();
}

//calculate the amount of syllables in each word
function findACount(str) {
  if (/\d/gi.test(str)){
    return str.match(/\d/gi).length;
  };
};

//formatting the textfile into the array named 'storing';
function formatData(data){  
  var storing = [];  
  var keyObj;
  var valueObj;
  var lineSplit;

  var lines = data.toString().split("\n");
  lines.forEach(function(line){
    lineSplit = line.split("  ");     
    valueObj = findACount(lineSplit[1]);
      if (valueObj !== null && valueObj !== undefined){
        if (storing[valueObj]=== undefined){
          storing[valueObj] = [];
        }
        storing[valueObj].push(lineSplit[0]);
      }
  });
  return storing;
}


function createHaiku(structure, filename){
  var file = readTxtFile(filename);
  var syllabelsArr = formatData(file);
  var arrOfWords;
  var result;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      result = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
      return result.substr(0,1) + result.substr(1).toLowerCase(); //capitalize each word
    }).join(' ');
  }).join('\n');
}

module.exports = {
  createHaiku: createHaiku
};

