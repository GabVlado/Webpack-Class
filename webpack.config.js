const path = require('path') //MOudlo de node js
module.exports = {
    entry: './index.js',
   // mode: 'development',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}
