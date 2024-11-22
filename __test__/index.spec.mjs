import test from 'ava'

import { parse } from '../index.js'
import {depthPath, paths, results} from '../benchmarks/paths.mjs'
import { depth, largeObject} from '../benchmarks/objects.mjs'

paths.forEach((path, i) => {
  test('parse path' + path, (t) => {
    const result = parse(largeObject, path)
    t.is(JSON.stringify(result), JSON.stringify(results[i]))
  })
})

test('Depth filter', (t) => {
  const result = parse(depth, depthPath)
  t.is(JSON.stringify(result), JSON.stringify([ 'sub-sub' ]))
})