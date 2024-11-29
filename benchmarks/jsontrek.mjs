import {parse} from '../builds/node/pkg/node.js'
import {depthPath, nestedPaths} from './paths.mjs'
import { depth, nested} from './objects.mjs'

// Creating require so we can import a JSON file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const entityJSON = require('./entity.json')


nestedPaths.forEach((path) => {
    console.log('Path', path)
    const result = parse(nested, path)
    console.log('From native', result)
})

console.log("Depth filter")
const result = parse(depth, depthPath)
console.log("From native", result)


const entityPath = "$.linkedEntities.edges[?(@.node.entityTypeID == '1efa8df5-d086-067b-255f-098b50000002' && @.node.attributes.edges[?(@.node.stringValue == 'Care Category')])].node.id"
console.log("Entity")
const entResult = parse(entityJSON, entityPath)
console.log("From native", entResult)