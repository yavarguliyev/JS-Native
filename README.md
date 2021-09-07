# JS-Native
Vanilla Javascript


## Avoid array duplciates
```javascript
const array = [ {id: 1, name: 'test'}, {id: 1, name: 'test'}, {id: 2, name: 'test'} ]
const results = Object.values(
      array.reduce(
        (accumulator, currentValue) =>
          Object.assign(accumulator, { [currentValue.id]: currentValue }),
        {}
      )
    );

console.log(results); // [{ id: '1' }, { id: '2' }]
```
