import { parse } from '../index.js'
import {paths} from './paths.mjs'
import { largeObject} from './objects.mjs'

paths.forEach((path) => {
    console.log('Path', path)
    const result = JSON.parse(parse(JSON.stringify(largeObject), path))[0]
    console.log('From native', result)
})