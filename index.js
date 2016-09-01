// var fibonacci = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// document.write(fibonacci(8));

var a,b,result;
    a=0;
    b=1;
    result=b;
for (var i = 1; i <100; i++) {
    document.write(result + '<br>');
    result=a+b;
    a=b;
    b=result;
}
