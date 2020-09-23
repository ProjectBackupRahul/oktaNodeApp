var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.userContext) {
    res.render('index', { title: 'Node JS Okta App', user: req.userContext });
  } else {
    res.render('login', { title: 'Node JS Okta App' })
  }
});

   router.post('/url', function(req, res, next){
     const url = req.body.url;

     async function printPDF() {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(`${url}`, {waitUntil: 'networkidle0'});
      const pdf = await page.pdf({ format: 'A4' });
     
      await browser.close();
      printPDF.then(pdf => {
        res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
        res.send(pdf)
      });
    }

   });

module.exports = router;
