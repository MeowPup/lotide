const findKeyByValue = function(obj, value) {
  const keyArr = Object.keys(obj);
  
  for (let key of keyArr) {
    console.log(key);
    if (obj[key] === value) {
      return key;
    }
  }
};
