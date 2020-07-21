const path = require('path') //MOudlo de node js

module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
