const { text } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.text())

app.get('/', function (req, res){
    res.send('Hello World')
})

app.post('/', (req, res) =>{

    if(req.get('content-type') !== 'application/json' && req.get('content-type') !== 'text/plain'){
		res.status(400).send(`I will not process this`)
    }
    else if(req.get('content-type') === 'application/json'){
      //  res.json({content: 'application/json', requestBody: req.body}) 
        console.log(req.get('content-type'))
        console.log('Body: ', req.body)
        res.send('OK')
    }
})

app.listen(port)

