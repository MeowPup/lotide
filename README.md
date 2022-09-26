# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @meowpup/lotide`

**Require it:**

`const _ = require('@meowpup/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head(...): returns the first element of the inputted array
  tail(...): returns the array with th first element removed
  middle(...): returns the middle element(s) of the inputted array
  assertArraysEqual(...): compares two arrays and prints out a success or failure message
  assertEqual(...): compares two values and prints out a success or failure message
  assertObjectsEqual(...): comapres two objects and prints out a success or failure message
  countLetters(...): takes in a sentence and returns a count of each of the letters in that sentence
  countOnly(...): takes an inputted array and object and returns an object containing the matching keys and their value
  eqArrays(...): assesses whether two arrays are equal (returns true or false)
  eqObjects(...): assesses whether two objects are equal (returns true or false)
  findKey(...): locates the desired key in an object
  findKeyByValue(...): takes an input object and value and returns the key that contains that value
  letterPositions(...): takes an input string and letter and returns the index of that letter within the string
  takeUntil(...): returns a slice of the array with elements taken from the beginning
  without(...): returns a new array with only elements from source that are not present in the itemsToRemove array