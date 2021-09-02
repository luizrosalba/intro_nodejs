const express = require ('express')
const bodyParser = require('body-parser')
const app = express()

/// dado do post para objeto
app.use(bodyParser.urlencoded({ extended : false}))

const userRoute = require ("./routes/userRoutes")
const port = 3000

userRoute(app)

app.get('/',(req,res)=> res.send('Olá mundo pelo express'))
 

app.listen(port, () => console.log('Api rodando na porta', port))