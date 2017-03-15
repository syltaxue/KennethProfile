$.getJSON('//ipinfo.io/json', function(data) {
  console.log(JSON.stringify(data, null, 2));
});