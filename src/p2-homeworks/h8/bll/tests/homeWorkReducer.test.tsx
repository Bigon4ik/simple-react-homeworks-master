import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

//     [
//     {_id: 1, name: 'Александр', age: 66},
//     {_id: 3, name: 'Виктор', age: 44},
//     {_id: 4, name: 'Дмитрий', age: 40},
//     {_id: 5, name: 'Ирина', age: 55},
//     {_id: 0, name: 'Кот', age: 3},
//     {_id: 2, name: 'Коля', age: 16},
// ]
test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    // newState.sort(function(a:any, b:any){
    //     return a.name-b.name
    // })
    // const p=newState.sort(function(a:any, b:any){
    //     return a.age-b.age
    // })
    const f=newState.sort(function(a:any, b:any){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
            return -1
        if (nameA > nameB)
            return 1
        return 0 // Никакой сортировки
    })
    console.log(f)
     expect(newState).toBe([
         { _id: 1, name: 'Александр', age: 66 },
         { _id: 3, name: 'Виктор', age: 44 },
         { _id: 4, name: 'Дмитрий', age: 40 },
         { _id: 5, name: 'Ирина', age: 55 },
         { _id: 2, name: 'Коля', age: 16 },
         { _id: 0, name: 'Кот', age: 3 }
     ])

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})


})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})


})
