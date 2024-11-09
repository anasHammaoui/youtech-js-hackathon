function shortword(words) {
let short  = words.filter((el) => el.length < 4);
console.log(short);
}
shortword(["cat", "mouse", "dog"]);