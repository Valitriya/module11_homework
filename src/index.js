export function repeatWord(word, count) {
  let array = [];
  for (let i = 1; i <= count; i++) {
    let x = word + i;
    array.push(x);
  }
  let str = array.toString();
  //console.log(str); для теста используем return
  return str;
}
repeatWord("meow", 3);
