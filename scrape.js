var request = require('request');
var fs = require('fs');
var jsdom = require('jsdom');

scrape('7_39', 'https://www.lutrija.hr/cms/Loto7od39', './7_39.txt');
scrape('6_45', 'https://www.lutrija.hr/cms/Loto6od45', './6_45.txt');

function scrape(type, url, filename) {
  request.get(url, function(error, response, body) {
    if (error) {
      console.log(type, 'Error while fetching data: ', error);
    } else {
      console.log(type, 'Successfully fetched data!');
      jsdom.env(body, ['http://code.jquery.com/jquery-latest.min.js'], function(errors, window) {
        if (error) {
        } else {
          console.log(type, 'Successfully parsed data');
          var date = window.$('#date-info').text().trim().split(' ').slice(-1)[0].split('.');
          var date_year = date[2];
          var date_month = date[1];
          var date_day = date[0];
          var numbers = [];
          window.$("#winnings-info ul li").each(function() {
            numbers.push(window.$(this).text());
          });
          var line = [([date_year, date_month, date_day].join('-'))].concat(numbers).join(';');
          console.log(type, 'The current drawing is:', line);
          var file = fs.readFileSync(filename).toString();
          if (line !== file.split('\n')[0]) {
            console.log(type, 'The current file will be updated with the drawing');
            fs.writeFileSync(filename, line + '\n' + file);
          } else {
            console.log(type, 'The current file will be NOT updated with the drawing');
          }
        }
      });
    }
  });
}
