/* create express template file */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/cal', (req, res) => {
  console.log(req.query);
  if (req.query.forceError) {
    res.status(500).send('Forced Error');
  }
  res.status(200).send('Success');
});

app.put('/cal', (req, res) => {
  if (req.query.forceError) {
    res.status(500).send('Forced Error');
  }
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (num2 == 0) {
    res.status(500).send('Divide by zero error');
  }

  res.status(200).send((num1 / num2).toString());
});

app.post('/cal', (req, res) => {
  if (req.query.forceError) {
    res.status(500).send('Forced Error');
  }
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (num2 == 0) {
    res.status(500).send('Divide by zero error');
  }
  
  res.status(200).send((num1 / num2).toString());
});

app.delete('/cal', (req, res) => {
  if (req.query.forceError) {
    res.status(500).send('Forced Error');
  }
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (num2 == 0) {
    res.status(500).send('Divide by zero error');
  }

  res.status(200).send((num1 / num2).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
