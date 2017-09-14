'use strict';
module.exports = function() {
  var vault = {};

  return{
    setValue : setValue,
    getValue : getValue,
  };




  function setValue(key, value){
    vault[key] = value;
  }

  function getValue(key){
    if (key === undefined || !vault.hasOwnProperty(key)){
      return null;
    }else if(vault.hasOwnProperty(key)){
      return vault[key];
    }
  }
};