'use strict'

let gFilter = ''
let gKeywordSearchCountMap = {
    'funny': 22,
    'animals': 32,
    'prime minister': 20,
    'insult': 34,
    'kids': 20,
    'adult': 21
}

const gMemeImgs = [
    {imgIdx: 1, tags: ['insult', 'prime minister']},
    {imgIdx: 2, tags: ['animals', 'dog']},
    {imgIdx: 3, tags: ['animals', 'dog', 'kids']},
    {imgIdx: 4, tags: ['animals', 'cat']},
    {imgIdx: 5, tags: ['kids']},
    {imgIdx: 6, tags: ['you', 'adult']},
    {imgIdx: 7, tags: ['kids', 'smile']},
    {imgIdx: 8, tags: ['you', 'adult']},
    {imgIdx: 9, tags: ['kids', 'smile']},
    {imgIdx: 10, tags: ['prime minister', 'smile', 'adult']},
    {imgIdx: 11, tags: ['fight', 'adult', 'insult']},
    {imgIdx: 12, tags: ['you', 'adult']},
    {imgIdx: 13, tags: ['you', 'adult']},
    {imgIdx: 14, tags: ['you', 'adult', 'insult']},
    {imgIdx: 15, tags: ['adult', 'funny']},
    {imgIdx: 16, tags: ['prime minister', 'adult']},
    {imgIdx: 17, tags: ['you', 'adult']},
    {imgIdx: 18, tags: ['you', 'adult']},
]

function addEntry(keyword) {
    gKeywordSearchCountMap[keyword]++
}


// Getters
function getImgs() {
    if (gFilter) {
        return gMemeImgs.filter(({tags}) => {
            console.log(tags.includes(gFilter));
            return tags.includes(gFilter)
        } )
    }
    return gMemeImgs
}

function getKeywords() {
    return gKeywordSearchCountMap
}


// Setters

function setFilterBy(filterValue) {
    if (gFilter !== undefined) gFilter = filterValue
}

function getRandomImageIdx() {
    return gMemeImgs[getRandomIntInclusive(0, gMemeImgs.length - 1)].imgIdx
}