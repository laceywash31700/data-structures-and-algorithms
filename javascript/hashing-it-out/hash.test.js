const HashTable = require('./hash'); 

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('should insert and get key-value pairs correctly', () => {
    hashTable.set('name', 'Alice');
    hashTable.set('age', 30);

    expect(hashTable.get('name')).toBe('Alice');
    expect(hashTable.get('age')).toBe(30);
  });

  test('should update existing key with new value', () => {
    hashTable.set('age', 25);
    hashTable.set('age', 30);

    expect(hashTable.get('age')).toBe(30);
  });

  test('should return undefined for non-existing keys', () => {
    expect(hashTable.get('nonExistentKey')).toBeUndefined();
  });

  test('should check if key exists in the hash table', () => {
    hashTable.set('name', 'Alice');

    expect(hashTable.has('name')).toBe(true);
    expect(hashTable.has('nonExistentKey')).toBe(false);
  });

});
