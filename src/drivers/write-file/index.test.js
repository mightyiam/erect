const xs = require('xstream').default
const { test } = require('ava')
const { spy } = require('simple-spy')
const mock = require('mock-require')

// don't get confused by this--we're mocking writing to filesystem
const { tmpNameSync } = require('tmp')
const { generate: randomString } = require('randomstring')

const files = [
  {
    path: tmpNameSync(),
    data: randomString()
  },
  {
    path: tmpNameSync(),
    data: randomString()
  },
  {
    path: tmpNameSync(),
    data: randomString()
  }
]

const filendirStub = {ws: spy(() => {})}
mock('filendir', filendirStub)

// this require must be after the mock call
const writeFileDriver = require('.')

test('writeFileDriver', t => {
  writeFileDriver(xs.fromArray(files))

  t.is(
    filendirStub.ws.callCount, files.length,
    `filendir called ${files.length} times`
  )

  filendirStub.ws.args.forEach(([path, data], i) => {
    t.is(path, files[i].path, `path for file ${i} is ${path}`)
    t.is(data, files[i].data, `data for file ${i} is ${data}`)
  })
})
