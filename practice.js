let object = {
    name: 'Sunny',
    age: 21,
    isCoding() {
        console.log('Yes');
    },
  };
  
for(let index in object) {
    console.log(index, object[index]);
} 