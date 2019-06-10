function solution(record){
  var answer = [];
  var wordSplit = [];

  //map or dictionary for input and output
  var status = {"Enter":"came in","Leave":"has left"}; 
  //map for name of user
  var namaUser = {};
  
  //looping untuk mencari nama user dan pesan
  for(var i in record){
    var message = record[i].split(" ");
    wordSplit.push(message);
    if(wordSplit[i][2] != undefined){
      namaUser[wordSplit[i][1]] = wordSplit[i][2]; 
    }  
  }

  //looping untuk menghasilkan answer
  for(var key in wordSplit){
    var i = namaUser[wordSplit[key][1]];
    var j = status[wordSplit[key][0]];
    if((i&&j) != undefined){
      answer.push(i + ' ' + j);
    }
  }
  
  return answer;
}

//testing
var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

console.log(solution(record));

//answer : ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]