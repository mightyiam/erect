const { test } = require('ava')
const path = require('path')
const fileFromDestinationRootAndBundle = require('./file-from-destination-root-and-bundle')

const destinationRootAndBundle = [
  '/destination/root/',
  {
    destination: 'here/kinda/thing',
    data: 'this is supposed to be some JavaScript or something'
  }
]

const expected = {
  path: path.join(destinationRootAndBundle[0], destinationRootAndBundle[1].destination),
  data: destinationRootAndBundle[1].data
}

test('fileFromDestinationRootAndBundle', t => {
  const actual = fileFromDestinationRootAndBundle(destinationRootAndBundle)
  t.deepEqual(actual, expected)
})
