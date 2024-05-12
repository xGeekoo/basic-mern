const express = require('express');

const app = express();

app.get('/api/v1', (req, res) => {
  res.type('text/plain');
  res.status(200).send('Request received!');
});

app.listen(Number(process.env.PORT) || 3000, () =>
  console.log(
    `Server listening for request on PORT ${process.env.PORT || 3000}`
  )
);
