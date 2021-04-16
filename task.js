const https = require("https")

https.get("https://jsonplaceholder.typicode.com/todos/1", function(response) {
  response.setEncoding("utf8")
  response.on("data", console.log)
  response.on("error", console.error)
}).on("error", console.error)
