let express = require("express");
let bodyParser = require("body-parser");
let request = require("request");
let cheerio = require("cheerio");
let mongoose = require("mongoose");
let Swimmer = require(__dirname + "/models/swimmerchar.js");

mongoose.connect("mongodb://127.0.0.1:27017/swimmers", {useNewUrlParser: true});

mongoose.connection.once("open", function() {
  console.log("connection has been made");
  user();
}).on("error", function(error) {
  console.log("connection error: " + error);
});

let codeNamePairs = [[5085537, "Aidan", "Eglin"], [4573467, "Graham", "Johnstone"], [4977877, "Ryan", "Murphy"], [4459387, "Nicholas", "Phillips"], [5168786, "Jack", "Screen"], [5105045, "Zachary", "Sholdice"], [4687300, "Liam", "Williamson"], [5062247, "Yacovelli", "Robert"], [4573458, "Kelsey", "Fillion"], [5147236, "Kristen", "Hardy"], [4983872, "Abbi", "Johnson"], [4977309, "Alexanne", "Lepage"], [4573503, "Alexandra", "Shortt"], [4573505, "Samantha", "Shortt"]];


let idToEvent = {
  1: "50m Freestyle",
  2: "100m Freestyle",
  3: "200m Freestyle",
  5: "400m Freestyle",
  6: "800m Freestyle",
  8: "1500m Freestyle",
  9: "50m Backstroke",
  10: "100m Backstroke",
  11: "200m Backstroke",
  12: "50m Breaststroke",
  13: "100m Breaststroke",
  14: "200m Breaststroke",
  15: "50m Butterfly",
  16: "100m Butterfly",
  17: "200m Butterfly",
  18: "200m Medley",
  19: "400m Medley",
  20: "100m Medley"
}

let app = express();
let urlencodedParser = bodyParser.urlencoded({extended: false});

let server = app.listen(5555, function() {
  console.log("listening for requests");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/main.html");
});

app.get("/athleteEvents", function(req, res) {
    if (req.query.athleteId) {
        Swimmer.findOne({swimmerId : req.query.athleteId}, function(err, swimmer) {
            if (err || swimmer == null) {
                res.send("");
            } else {
                res.send(JSON.stringify(swimmer));
            }
        })
    } else {
        res.send("");
    }
})


async function getEventInfo(event, id) {
  return new Promise(function(resolve, reject) {
    let options = {
      url: `https://www.swimrankings.net/index.php?page=athleteDetail&athleteId=${id}&styleId=${event}`,
      method: "GET"
    }
    request(options, function(error, response, body) {
      let $ = cheerio.load(body);
      let rankings = $(".athleteRanking");
      let shortCourse = {
        event: idToEvent[event],
        type: "25m",
        times: []
      }
      let longCourse = {
        event: idToEvent[event],
        type: "50m",
        times: []
      }
      rankings.each(function(i, element) {
        let rows = $(element).find(".athleteRanking0, .athleteRanking1");
        rows.each(function(j, row) {
          let date = $(row).children(".date").text();
          date = (date.split(/\s/).join(" "));
          date = new Date(Date.parse(date));
          let infoArray = [$(row).children(".time").text(), $(row).children(".code").text(), date, $(row).children(".city").text()];
          if (i == 0) {
            longCourse.times.push(infoArray);
          } else if (i == 1) {
            shortCourse.times.push(infoArray);
          }
        });
      });
      shortCourse.times.sort(function(a,b) {return a[2].getTime() > b[2].getTime() ? -1 : 1});
      longCourse.times.sort(function(a,b) {return a[2].getTime() > b[2].getTime() ? -1 : 1});
      resolve([shortCourse, longCourse]);
    })
  })
}
// async function user() {
//     await Swimmer.create({firstName: "Dicks", lastName: "dic", swimmerId: "3"});
// }
// async function user() {
//     for (var i = 0; i < codeNamePairs.length; i++) {
//         let currentObject = await Swimmer.findOne({swimmerId : codeNamePairs[i][0].toString()});
//         for (var key in idToEvent) {
//             let times = await getEventInfo(key, codeNamePairs[i][0].toString());
//             let pushStringShort = `events.e_${times[0].event.split(" ").join("")}.shortCourse.times`;
//             let pushStringLong = `events.e_${times[0].event.split(" ").join("")}.longCourse.times`;
//             let pushObjectShort = [
                
//             ];
//             let pushObjectLong = [

//             ];
//             for (var j = 0; j < times[0].times.length; j++) {
//                 let current = times[0].times[j];
//                 pushObjectShort.push({
//                     dateGotten: current[2],
//                     time: current[0],
//                     points: parseInt(current[1]),
//                     city: current[3]
//                 })
//             }
//             for (var j = 0; j < times[1].times.length; j++) {
//                 let current = times[1].times[j];
//                 pushObjectLong.push({
//                     dateGotten: current[2],
//                     time: current[0],
//                     points: parseInt(current[1]),
//                     city: current[3]
//                 })
//             }
//             updateObject = {
                
//             }
//             updateObject[pushStringShort] = pushObjectShort;
//             updateObject[pushStringLong] = pushObjectLong;
//             let newSwimmer = await Swimmer.findOneAndUpdate({_id : currentObject._id}, {$set: updateObject});
//             console.log(newSwimmer);
            
            
//         }
//     }
// }
async function user() {
    for (var i = 0; i < codeNamePairs.length; i++) {
        let currentSwimmer = {
            firstName: codeNamePairs[i][1],
            lastName: codeNamePairs[i][2],
            swimmerId: codeNamePairs[i][0]
        }
        await Swimmer.create(currentSwimmer);
    }
}





