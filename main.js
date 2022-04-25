function runProgram(input) {
  input = input.trim().split("\n");
  var tc=+input[0];
  var line=1;
  for(var i=0;i<tc;i++){
      var [n,k,x] = input[line].trim().split(" ").map(Number);
      line++
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      var start =0;
      var end =x;
      var flag = true;
      var count=0;
      while(end<=n){
          flag=true;
           for(var j=start;j<end;j++){
               if(arr[j]>k){
                   flag=false
                   break;
               }
           }
          if(flag){
            count++; 
          }
          start++; // 
          end++;
      }
      console.log(count)
  }
    
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}



