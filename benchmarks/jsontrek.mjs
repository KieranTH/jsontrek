import {parse} from '../builds/node/pkg/node.js'
import {depthPath, nestedPaths} from './paths.mjs'
import { depth, largeObject, nested} from './objects.mjs'

nestedPaths.forEach((path) => {
    console.log('Path', path)
    const result = parse(nested, path)
    console.log('From native', result)
})

console.log("Depth filter")
const result = parse(depth, depthPath)
console.log("From native", result)