module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(item => item.join(''));

  while (bracketsConfig.length) {
    let iterator = 0;

    bracketsConfig.forEach(item => {
      if (str.indexOf(item) != -1) {
        str = str.replace(item, '');
      } else {
        iterator += 1;
      }
    });
    
    if (iterator === bracketsConfig.length) {
      bracketsConfig.length = 0;
    }
  }
  return str.length === 0 ? true : false;
}