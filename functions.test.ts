import { isExportDeclaration } from "typescript"

const {shuffleArray} = require('./utils')
const arr = [1, 2, 3, 4]

describe('shuffleArray should', () => {

    let res = shuffleArray(arr)
    
    test('return an array', () => {
        expect(Array.isArray(res)).toBeTruthy()
    })

    test('return an array of the same length as the argument passed to it', () => {
        expect(res.length).toEqual(arr.length)
    })

    test('return an array that contains the same items as the argument passed to it', () => {
        for(let i = 0; i < res.length; i ++){
            expect(arr.includes(res[i])).toBeTruthy()
        }
    })

    test('return an array with items in a different order than the argument', () => {
        expect(res).not.toEqual(arr)
    })
})