import { JSONPath } from 'jsonpath-plus'
import {paths, depthPath} from './paths.mjs'
import { depth, largeObject} from './objects.mjs'
paths.forEach((path) => {
    console.log('From native', JSONPath({json: largeObject, path}))
})

console.log("Depth filter")
const result = JSONPath({json: depth, path: depthPath})
console.log("From native", result)