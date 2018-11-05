const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const swimmerSchema = new Schema({
  swimmerId: {
      unique: true,
      type: String
  },
  firstName: {
      type: String
  },
  lastName: {
      type: String
  },
  events: {
      type: Object,
      default: {
        e_50mButterfly: {
            eventName: "50m Butterfly",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default:[]
                           
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_100mButterfly: {
            eventName: "100m Butterfly",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_200mButterfly: {
            eventName: "200m Butterfly",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_50mBackstroke: {
            eventName: "50m Backstroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_100mBackstroke: {
            eventName: "100m Backstroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_200mBackstroke: {
            eventName: "200m Backstroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_50mBreaststroke: {
            eventName: "50m Breaststroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_100mBreaststroke: {
            eventName: "100m Breaststroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_200mBreaststroke: {
            eventName: "200m Breaststroke",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_50mFreestyle: {
            eventName: "50m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_100mFreestyle: {
            eventName: "100m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_200mFreestyle: {
            eventName: "200m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_400mFreestyle: {
            eventName: "400m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_800mFreestyle: {
            eventName: "800m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_1500mFreestyle: {
            eventName: "1500m Freestyle",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_100mMedley: {
            eventName: "100m Medley",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
          },
          e_200mMedley: {
            eventName: "200m Medley",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default: []
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default:[]
                    },
                ],
            },
          },
          e_400mMedley: {
            eventName: "400m Medley",
            shortCourse: {
                poolLength: "25m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default:[]
                    },
                ],
            },
            longCourse: {
                poolLength: "50m",
                times: [
                    {
                        dateGotten: {type: Date},
                        time: {type: String},
                        points: {type: Number},
                        city: {type: String},default:[]
                    },
                ],
            },
          },
      }
    }
});

var Swimmer = mongoose.model('Swimmer', swimmerSchema);
module.exports = Swimmer;
