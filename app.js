const addDate = require('date-fns/addDays')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const dateAfter100Days = addDate(new Date(), 100)
  res.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`,
  )
})

module.exports = app
