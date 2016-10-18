const path = require('path')

function fileFromDestinationRootAndBundle ([destinationRoot, bundle]) {
  console.log(arguments[0])
  const file = {
    data: bundle.data,
    path: path.join(destinationRoot, bundle.destination)
  }
  return file
}

module.exports = fileFromDestinationRootAndBundle
