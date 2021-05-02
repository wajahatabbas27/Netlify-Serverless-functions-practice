// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
//importing library random-name
const random = require('random-name');

const handler = async (event) => {
  try {
    //console.log(random());
    //getting names from random library 
    let nameFirst = random.first();
    let nameLast = random.last();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello from  ${nameFirst} ${nameLast}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
