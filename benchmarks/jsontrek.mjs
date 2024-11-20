import { parse } from '../index.js'
import {paths} from './paths.mjs'
import { largeObject} from './objects.mjs'

// console.log('From native', parse(JSON.stringify(largeObject), "$.a"))

paths.forEach((path) => {
    const result = JSON.parse(parse(JSON.stringify(largeObject), path))[0]
    console.log('From native', result)
})