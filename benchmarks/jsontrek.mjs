import { parse } from '../index.js'
import {depthPath, paths} from './paths.mjs'
import { depth, largeObject} from './objects.mjs'

paths.forEach((path) => {
    console.log('Path', path)
    const result = parse(largeObject, path)
    console.log('From native', JSON.stringify(result))
})

console.log("Depth filter")
const result = parse(depth, depthPath)
console.log("From native", result)