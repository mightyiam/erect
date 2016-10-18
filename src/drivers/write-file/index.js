const filendir = require('filendir')

function writeFileDriver (file$) {
  file$.addListener({
    next: function writeFileDriverNext (file) {
      filendir.ws(file.path, file.data)
    },
    error: e => {
      throw e
    },
    complete: () => {}
  })
}

module.exports = writeFileDriver
