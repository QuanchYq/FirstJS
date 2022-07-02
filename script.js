const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  }
};
//
// delete options.name;
//
// console.log(options)
for (let key in options) {
  if (typeof(options[key]) === 'object') {

  }
  console.log(`Свойство ${key} has value ${options[key]}`)
};