# Experror
Express.js middleware for HTTP error response objects

#### Installation
```
$ npm i experror
```

#### Usage
```
const app = require('express')()
const experror = require('experror')

app.use(experror)

app.get('/', (req, res) => res.error(404, 'Custom message'))
app.listen(8081)
```