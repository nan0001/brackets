module.exports = function check(str, bracketsConfig) {
  const open_br = []
  const br_pair = {}
  const duplicates = []
  for (let value of bracketsConfig){
    open_br.push(value[0])
    let close_br = [value[1]]
    br_pair[close_br] = value[0]
    if (value[0] === value[1]) {
      duplicates.push(value[0])
    }
  }
  let stack = [];
  
  for (let i = 0; i < str.length; i++){
    let top_elem = stack[stack.length-1];
    if (open_br.includes(str[i])) {
      if ((br_pair[str[i]] === str[i]) && (str[i] === top_elem)){
        stack.pop()
        console.log(stack)
      }else{stack.push(str[i])}      
    } else {
      if (stack.length === 0){
        console.log(stack)
        return false
      }     
      else if (br_pair[str[i]] === top_elem) {
        stack.pop()
      }else {
        console.log(stack)
        return false
      }
    }
  }
console.log(stack)
return stack.length === 0;
}  
