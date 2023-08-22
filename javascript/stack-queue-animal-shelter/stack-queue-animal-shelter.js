'use strict';

const { Stack } = require('../stack-and-queue/stacks');

class Animal {
  constructor(name, species, next = null) {
    this.name = name;
    this.species = species;
    this.next = null;
  }
}

class Shelter {
  constructor() {
    this.catEnqueue = new Stack();
    this.catDequeue = new Stack();
    this.dogEnqueue = new Stack();
    this.dogDequeue = new Stack();
  }

  Enqueue(animal) {
    const newNode = new Animal(...animal);
    if (newNode.species === 'Cat') {
      this.catEnqueue.push(newNode);
    } else if (newNode.species === 'Dog') {
      this.dogEnqueue.push(newNode);
    } else {
      throw new Error('Null');
    }
  }

  Dequeue(pref) {
    if (pref !== 'Cat' || pref !== 'Dog') {
      throw new Error('Null');
    } else if (pref === 'Cat') {
      if (this.catDequeue.top) {
        return this.catDequeue.pop();
      } else {
        while (this.catEnqueue.top) {
          let temp = this.catEnqueue.pop();
          this.catDequeue.push(temp);
        }
        return this.catDequeue.pop();
      }
    } else {
      if (this.dogDequeue.top) {
        return this.dogDequeue.pop();
      } else {
        while (this.dogEnqueue.top) {
          let temp = this.dogEnqueue.pop();
          this.dogDequeue.push(temp);
        }
        return this.dogDequeue.pop();
      }
    }
  }


}
