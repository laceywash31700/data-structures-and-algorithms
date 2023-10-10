"use strict";

class HashTable {
    constructor(size = 100) {
      this.size = size;
      this.table = new Array(size).fill(null).map(() => []);
    }
  
 
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        const existingPairIndex = bucket.findIndex(pair => pair.key === key);
      
        if (existingPairIndex !== -1) {
          bucket.splice(existingPairIndex, 1);
        }
      
        bucket.push({ key, value });
      }
 
    get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      const pair = bucket.find(pair => pair.key === key);
      return pair ? pair.value : undefined;
    }
  
  
    has(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      return bucket.some(pair => pair.key === key);
    }
  
    keys() {
        const keysArray = [];
        this.table.forEach(bucket => {
          bucket.forEach(pair => {
            if (!keysArray.includes(pair.key)) {
              keysArray.push(pair.key);
            }
          });
        });
        return keysArray;
      }
      
  
  }
  
  module.exports = HashTable;