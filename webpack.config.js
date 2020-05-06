// This doesn't run in  browser .
// It only runs on system with the help of nodejs

const path = require('path');  // From node library
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist/assets'),
        filename:'bundle.js'
    }
};  
