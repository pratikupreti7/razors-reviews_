/*
 ************* Import statements **********************
 */
const express = require('express')
const mongoose = require('mongoose')
const app = express()

/*
 ************* Environment variable **********************
 */
const dotenv = require('dotenv')
dotenv.config()

/*
 ************* Import routes **********************
 */
const userRoute = require('./routes/auth')
const salonRoute = require('./routes/salon')
const reviewRoute=require('./routes/reviews')
/*
 ************* Connection to Database **********************
 */

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database 😇 ....'))
  .catch((error) => console.error(error))

/*
 ************* Middleware **********************
 */
app.use(express.json())

app.use('/api/user', userRoute)
app.use('/api/salon', salonRoute)
app.use('/api/reviews',reviewRoute)

/*
 ************* Server listening **********************
 */

app.listen(3000, () => {
  console.log('Server is up and running 💌  at  http://localhost:3000/')
  console.log(
    'Sugetions for nested comments https://www.youtube.com/watch?v=lyNetvEfvT0',
  )
/*
{
   "email":"pupreti123t@123.com",
    "password":"Messi123"

}
*/
console.log("Login","pupreti123t@123.com","Messi123")
})
