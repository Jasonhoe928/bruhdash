var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];

  },

  // returns the last element of an array
  last: function (arr) {
    for(i = 0; i < arr.length; i++) {
      return arr[arr.length-1];
    }
  },
  indexOf: function(arr, num) {
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === num) {
        return i;
      } 
    }
    return -1;
  },
  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    for(i = arr[arr.length-1]; i > 0; i--) {
      if(arr[i] === num) {
      return i;
      } 
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    return arr.slice(0, -1)
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    function truthy(positionValue) {
      return positionValue;
    }
    var filteredArray = arr.filter(truthy)
    return filteredArray;
    // for(i = 0; i < arr.length; i++) {
    //   if(arr[i] === false) {
    //     arr.splice(i, 1);
    //   }
    //   else if(arr[i] === null) {
    //     arr.splice(i, 1)
    //   }
    //   else if(arr[i] === 0) {
    //     arr.splice(i, 1)
    //   }
    //   else if(arr[i] === '') {
    //     arr.splice(i, 1)
    //   }
    //   else if(arr[i] === NaN) {
    //     arr.splice(i, 1)
    //     }
    // }
    // return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    return arr.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, numOfEl){
    if(numOfEl === undefined) {
      return arr.slice(1)
    }
    else if(typeof numOfEl === 0) {
        return arr.slice();
      } else {
        return arr.slice(numOfEl)
  }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, numOfEl) {
    if(numOfEl === undefined) {
      return arr.slice(0, -1)
    }
    else if(numOfEl === 0) {
        return arr.slice();
      } else {
        return arr.slice(0, -numOfEl)
  }
  },

  // creates a slice of an array with n elements taken from the beginning
    //should return a copy of array with n elements removed from the beginning
    //should return a copy of only the first element if n is blank
    //should return an empty array if n equals 0

    //function(arr, n)
      //if n = 0 
        //return slice(0, 0)
      //else if n = undefined
        //slice(0, 1)
      //else
        //slice(0, n)

  
  take: function (arr, n) {
    if(n === 0) {
      return arr.slice(0, 0);
    }
    else if(n === undefined) {
      return arr.slice(0, 1);
    } else {
      return arr.slice(0, n);
    }
  },

  // creates a slice of an array with n elements taken from the end

  //should return a copy of an array with n elements taken from the end
  //should return a copy of only the last element if n = undefined
  //should return an empty array if n = 0

  //function(arr, n)
    //if n = undefined
      //return slice(-1)
    //else if n = 0
      //return arr.slice(0, 0)
    //else
      //return arr.slice(-n)

  takeRight: function (arr, n) {
    if(n === undefined) {
      return arr.slice(-1);
    }
    else if(n === 0) {
      return arr.slice(0, 0);
    } else {
      return arr.slice(-n);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  
  //function should fill elements of array with n value from start of index to second to last index
  //should fill entire array if no start and end is specified
  
  //function(arr, value, start, end)
  //if start === undefined && end === undefined
    //return arr.fill(value)
  //else
    //return arr.fill(arr, value, 0, arr.length-2)

  fill: function(arr, value, start, end) {
    if(start === undefined && end === undefined) {
      return arr.fill(value);
    }
    else {
      return arr.fill(arr, value, start, end)
    }
  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};



