

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/init', function (req, res) {
  res.status(200).send();
});

app.post('/run', async function (req, res) {
  var meta = (req.body || {}).meta;
  var value = (req.body || {}).value;
  var payload = value.payload;
  if (typeof payload != 'string')
    payload = JSON.stringify(payload);
  console.log("payload: " + payload);

  const browser = await puppeteer.launch()

  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com');
  const title = page.title()
  await browser.close()
  var result = {
    'result': {
      'msg': 'echo',
      'payload': title
    }
  };
  res.status(200).json(result);
});

app.listen(8080, function () {})