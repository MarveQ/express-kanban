const bodyParserContent = require('body-parser');

function bodyParser(app) {
    app.use(bodyParserContent.urlencoded({ extended: false }))
    app.use(bodyParserContent.json())
}

module.exports = bodyParser;