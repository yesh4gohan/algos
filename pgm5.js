const rev = ( str ) => {
  if(str.length < 2){
    return str;
  }
  console.log(rev(str.substr(1)) + str.charAt(0))
  return rev(str.substr(1)) + str.charAt(0);
}

console.log(rev("hello"))