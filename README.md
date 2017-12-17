# calendar-generator

A simple generator of calendar object. :calendar:

## Installation
**Work with `moment.js`.**

```
npm install calendar-generator
```
## Import
**ES6+, Babel, Webpack, etc.. environments**

```javascript
import { genCalendarObj } from 'calendar-generator'
```

## Example
```javascript
import { genCalendarObj } from 'calendar-generator'

const fromDate = moment().format('YYYY-MM-DD') // 2017-12-18
const toDate = moment(fromDate).add(5, 'days').format('YYYY-MM-DD') //2017-12-23
    
let cObj = genCalendarObj(fromDate, toDate)

```

**cObj**
```javascript
cObj = {
   "date":{
      "2017-12-17":{
         "inputRange":false,
         "year":2017,
         "month":12,
         "day":17,
         "dayOfWeek":0,
         "week":51
      },
      "2017-12-18":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":18,
         "dayOfWeek":1,
         "week":51
      },
      "2017-12-19":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":19,
         "dayOfWeek":2,
         "week":51
      },
      "2017-12-20":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":20,
         "dayOfWeek":3,
         "week":51
      },
      "2017-12-21":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":21,
         "dayOfWeek":4,
         "week":51
      },
      "2017-12-22":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":22,
         "dayOfWeek":5,
         "week":51
      },
      "2017-12-23":{
         "inputRange":true,
         "year":2017,
         "month":12,
         "day":23,
         "dayOfWeek":6,
         "week":51
      }
   },
   "monthWeekDate":{
      "12":{
         "51":[
            "2017-12-17",
            "2017-12-18",
            "2017-12-19",
            "2017-12-20",
            "2017-12-21",
            "2017-12-22",
            "2017-12-23"
         ]
      }
   }
}
```