const router = require('express').Router();

router.get('/endpoint', (req, res, next) => {
  console.log("some endpoint -->");

  setTimeout(() => {
    res.json({ items: ['Item A', 'Item B', 'Item C']})
  }, 2000 )
})

// test
// without data: curl -X POST http://localhost:8000/api/endpoint
// with data: curl -d {"key":"value"} -X POST curl -X POST http://localhost:8000/api/endpoint


module.exports = router;
