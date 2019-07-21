# Experror
Express.js middleware for HTTP error response objects

#### Installation
```sh
$ npm i experror
```

#### Usage
```js
const app = require('express')()
const experror = require('experror')

app.use(experror)

app.get('/', (req, res) => res.error(404, 'Custom message'))
app.listen(8081)
```

#### Sample response
```js
{
  "status": 503,
  "error": "ServiceUnavailable",
  "message": "Service unavailable"
}
```