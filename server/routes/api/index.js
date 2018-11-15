const router = require('express').Router();

router.post('/endpoint', (req, res, next) => {
  console.log("some endpoint -->");
  res.json({ key: 'value'})
})

// test
// without data: curl -X POST http://localhost:8000/api/endpoint
// with data: curl -d {"key":"value"} -X POST curl -X POST http://localhost:8000/api/endpoint


module.exports = router;
