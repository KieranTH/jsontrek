import test from 'ava'

import { parse } from '../builds/node/pkg/node.js'
import {depthPath} from '../benchmarks/paths.mjs'
import { depth} from '../benchmarks/objects.mjs'

// Creating require so we can import a JSON file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const entityJSON = require('../benchmarks/entity.json')

test('Depth filter', (t) => {
  const result = parse(depth, depthPath)
  t.is(JSON.stringify(result), JSON.stringify([ 'sub-sub' ]))
})

test('Entity filter', (t) => {
  const entityPath = "$.linkedEntities.edges[?(@.node.entityTypeID == '1efa8df5-d086-067b-255f-098b50000002' && @.node.attributes.edges[?(@.node.stringValue == 'Care Category')])].node.id"
  const result = parse(entityJSON, entityPath)
  t.is(JSON.stringify(result), JSON.stringify([
    '1efa8df7-35e3-098a-255f-098b50000001',
    '1efa8df7-35f1-02c1-255f-098b50000001',
    '1efa8df7-361a-032f-255f-098b50000001'
  ]))
})