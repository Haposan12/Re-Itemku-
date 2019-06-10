function solution(N,users){
  var answer = [];
  var hasil;
  var pembilang = 0;
  var penyebut = 0;
  
  for(i=1;i<=N;i++){
    for(j in users){
      if(users[j] == i){
        pembilang++;
      }
      if(users[j] >= i){
        penyebut++;
      }
    }
    hasil = pembilang/penyebut;
    answer.push([i, hasil]);
    pembilang = 0;
    penyebut = 0;
    
  }
  //sort with descending
  answer.sort((a, b) => b[1] - a[1]);

  //looping to take the only stage 
  for(var i in answer){
    answer[i] = answer[i][0]
  }
  
  return answer;
}


//testing
var user = [2,1,2,6,2,4,3,3];

console.log(solution(5,user)); 

//answer : [3,4,2,1,5]