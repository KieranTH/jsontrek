import test from 'ava'

import { sum, parse } from '../index.js'
import {paths} from '../benchmarks/paths.mjs'
import { largeObject} from '../benchmarks/objects.mjs'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

// paths.forEach((path) => {
//   test('parse path' + path, (t) => {
//     const result = parse(JSON.stringify(largeObject), path)[0]
//     console.log("result")
//     t.is(result, '')
//   })
// })