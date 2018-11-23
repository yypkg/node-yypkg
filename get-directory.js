const fs = require('fs')
const path = require('path')

module.exports = p => fs.readdirSync(p).filter(v => fs.statSync(path.resolve(p, v)).isDirectory())
