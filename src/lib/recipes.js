'use strict';

const base = {
  sun1: [
    {
      primitive: 'sun',
      x: 5,
      y: 5
    }
  ],
  sun2: [
    {
      primitive: 'sun',
      x: 0,
      y: 0
    }
  ],
  sun3: [
    {
      primitive: 'sun',
      x: 0,
      y: 0,
      scaleX: 0.666666667,
      scaleY: 0.666666667
    }
  ],
  sunWinter1: [
    {
      primitive: 'sun',
      x: 5,
      y: 37,
      winter: true
    }
  ],
  sunWinter2: [
    {
      primitive: 'sun',
      x: 0,
      y: 37,
      winter: true
    }
  ],
  sunWinter3: [
    {
      primitive: 'sun',
      x: 0,
      y: 23,
      scaleX: 0.666666667,
      scaleY: 0.666666667,
      winter: true
    }
  ],
  moon1: [
    {
      primitive: 'moon',
      x: 15,
      y: 15
    }
  ],
  moon2: [
    {
      primitive: 'moon',
      x: 5,
      y: 15
    }
  ],
  moon3: [
    {
      primitive: 'moon',
      x: 0,
      y: 3,
      scaleX: 0.714285714,
      scaleY: 0.714285714
    }
  ],
  '02': [
    {
      primitive: 'cloud',
      x: 35,
      y: 37.5,
      scaleX: 0.714285714,
      scaleY: 0.714285714,
      variation: 1
    }
  ],
  '03': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 1
    }
  ],
  40: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 56,
      y: 78
    }
  ],
  '05': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 45,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 78
    }
  ],
  41: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'raindrop',
      x: 18,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 47,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 74,
      y: 87
    }
  ],
  42: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 79
    }
  ],
  '07': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'snowflake',
      x: 30,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 46,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 80
    }
  ],
  43: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 47,
      y: 80
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 74,
      y: 80
    }
  ],
  44: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  '08': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'snowflake',
      x: 30,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 44,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  45: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 44,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 72,
      y: 79
    }
  ],
  24: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'raindrop',
      x: 28,
      y: 87
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 58,
      y: 78
    }
  ],
  '06': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'raindrop',
      x: 29,
      y: 78
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 50,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 65,
      y: 78
    }
  ],
  25: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'raindrop',
      x: 18,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 29,
      y: 87
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 55,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 68,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 82,
      y: 87
    }
  ],
  26: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'snowflake',
      x: 26,
      y: 88
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 58,
      y: 79
    }
  ],
  20: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'snowflake',
      x: 27,
      y: 79
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 50,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 64,
      y: 80
    }
  ],
  27: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 30,
      y: 86
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'raindrop',
      x: 55,
      y: 80
    },
    {
      primitive: 'snowflake',
      x: 66,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 82,
      y: 80
    }
  ],
  28: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 2
    },
    {
      primitive: 'snowflake',
      x: 26,
      y: 88
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  21: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 3
    },
    {
      primitive: 'snowflake',
      x: 26,
      y: 79
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'snowflake',
      x: 52,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 66,
      y: 79
    }
  ],
  29: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 4
    },
    {
      primitive: 'snowflake',
      x: 13,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 27,
      y: 88
    },
    {
      primitive: 'lightning',
      x: 42,
      y: 51
    },
    {
      primitive: 'snowflake',
      x: 55,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 69,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 83,
      y: 79
    }
  ]
};

module.exports = {
  '01d': base.sun1,
  '02d': base.sun2.concat(base['02']),
  '03d': base.sun3.concat(base['03']),
  '40d': base.sun3.concat(base['40']),
  '05d': base.sun3.concat(base['05']),
  '41d': base.sun3.concat(base['41']),
  '42d': base.sun3.concat(base['42']),
  '07d': base.sun3.concat(base['07']),
  '43d': base.sun3.concat(base['43']),
  '44d': base.sun3.concat(base['44']),
  '08d': base.sun3.concat(base['08']),
  '45d': base.sun3.concat(base['45']),
  '24d': base.sun3.concat(base['24']),
  '06d': base.sun3.concat(base['06']),
  '25d': base.sun3.concat(base['25']),
  '26d': base.sun3.concat(base['26']),
  '20d': base.sun3.concat(base['20']),
  '27d': base.sun3.concat(base['27']),
  '28d': base.sun3.concat(base['28']),
  '21d': base.sun3.concat(base['21']),
  '29d': base.sun3.concat(base['29']),

  '01m': base.sunWinter1,
  '02m': base.sunWinter2.concat(base['02']),
  '03m': base.sunWinter3.concat(base['03']),
  '40m': base.sunWinter3.concat(base['40']),
  '05m': base.sunWinter3.concat(base['05']),
  '41m': base.sunWinter3.concat(base['41']),
  '42m': base.sunWinter3.concat(base['42']),
  '07m': base.sunWinter3.concat(base['07']),
  '43m': base.sunWinter3.concat(base['43']),
  '44m': base.sunWinter3.concat(base['44']),
  '08m': base.sunWinter3.concat(base['08']),
  '45m': base.sunWinter3.concat(base['45']),
  '24m': base.sunWinter3.concat(base['24']),
  '06m': base.sunWinter3.concat(base['06']),
  '25m': base.sunWinter3.concat(base['25']),
  '26m': base.sunWinter3.concat(base['26']),
  '20m': base.sunWinter3.concat(base['20']),
  '27m': base.sunWinter3.concat(base['27']),
  '28m': base.sunWinter3.concat(base['28']),
  '21m': base.sunWinter3.concat(base['21']),
  '29m': base.sunWinter3.concat(base['29']),

  '01n': base.moon1,
  '02n': base.moon2.concat(base['02']),
  '03n': base.moon3.concat(base['03']),
  '40n': base.moon3.concat(base['40']),
  '05n': base.moon3.concat(base['05']),
  '41n': base.moon3.concat(base['41']),
  '42n': base.moon3.concat(base['42']),
  '07n': base.moon3.concat(base['07']),
  '43n': base.moon3.concat(base['43']),
  '44n': base.moon3.concat(base['44']),
  '08n': base.moon3.concat(base['08']),
  '45n': base.moon3.concat(base['45']),
  '24n': base.moon3.concat(base['24']),
  '06n': base.moon3.concat(base['06']),
  '25n': base.moon3.concat(base['25']),
  '26n': base.moon3.concat(base['26']),
  '20n': base.moon3.concat(base['20']),
  '27n': base.moon3.concat(base['27']),
  '28n': base.moon3.concat(base['28']),
  '21n': base.moon3.concat(base['21']),
  '29n': base.moon3.concat(base['29']),

  15: [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 1
    },
    {
      primitive: 'fog',
      x: 0,
      y: 76
    }
  ],
  '04': [
    {
      primitive: 'cloud',
      x: 5,
      y: 25,
      variation: 1
    }
  ],
  46: base['40'],
  '09': base['05'],
  10: base['41'],
  47: base['42'],
  12: base['07'],
  48: base['43'],
  49: base['44'],
  13: base['08'],
  50: base['45'],
  30: base['24'],
  22: base['06'],
  11: base['25'],
  31: base['26'],
  23: base['20'],
  32: base['27'],
  33: base['28'],
  14: base['21'],
  34: base['29']
};