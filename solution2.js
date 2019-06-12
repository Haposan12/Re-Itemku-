function solution(N, users){

  var answer = [];
  users.sort((a,b) => a-b);
  var len = users.length;
  var count = 0;
  var i = 0;

  while(i < len){
    if(users[i] !== users[i+1] && users[i]<=N){
      count++;
      var x = (len-1)-i + count;
      answer.push([users[i], count/x]);
      count = 0;
    }else{
      count++;
    }
    i++;
  }

  for(var j=1;j<=N;j++){
    if(!users.includes(j)){
      answer.push([j , 0]);
    }
  }

  answer.sort((a, b) => b[1] - a[1]);

  for(var i in answer){
    answer[i] = answer[i][0]
  }

  return answer;
}

//testing
var n = 5;
var user = [2,1,2,6,2,4,3,3];
//1,2,2,2,3,3,4,6
console.log(solution(n,user));
