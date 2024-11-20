import { JSONPath } from 'jsonpath-plus'
import {paths} from './paths.mjs'
import { largeObject} from './objects.mjs'
paths.forEach((path) => {
    console.log('From native', JSONPath({json: largeObject, path}))
})