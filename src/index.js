module.exports = function reverse (n) {
  let str=String(Math.abs(n));
  let arr=str.split('');
  str=arr.reverse().join('');
  return Number(str);
}
