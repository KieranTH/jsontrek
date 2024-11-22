import {parse} from '../builds/web/pkg/jsontrek.js'
import {depthPath, paths} from './paths.mjs'
import { depth, largeObject} from './objects.mjs'

const stringObj = JSON.stringify(largeObject)

paths.forEach((path) => {
    console.log('Path', path)
    const result = JSON.parse(parse(stringObj, path))
    console.log('From native', JSON.stringify(result))
})

// console.log("Depth filter")
// const result = parse(depth, depthPath)
// console.log("From native", result)