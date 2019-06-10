function solution(relation) {
  //set the variables
  var answer = 0;
  var pisah = [];
  var att = [];
  var map = {};

  for (i = 0; i < relation[0].length; i++) {
  //looping untuk menjadikan array relasi sesuai dengan atribut masing-masing
  //contoh: [[ '100', '200', '300', '400', '500', '600' ]]
    for (a in relation) {
      pisah.push(relation[a][i]);
    }
    att.push(pisah);
    pisah = [];

    //cek untuk distinct
    att[i].forEach(item => {
      if (!map[item]) {
        map[item] = 0;
      }
      map[item] += 1;
    });

    //if no duplicate found answer add 1
    if (Object.keys(map).length == relation.length) {
      delete att[i];
      answer += 1;
    }
    map = {};
  }
  //fix att array to arr (if you delete item in array it will return to undefined item)
  arr = [];
  for (items in att) {
    if (att[items] != undefined) {
      arr.push(att[items]);
    }
  }

  //create 2 column combination 
  att = [];
  col = {};
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 1; j <= arr.length - (i + 1); j++) {
      for (item in arr[i]) {
        att.push(arr[i][item] + arr[i + j][item]);
      }
      //check if any duplicate in the column combination
      att.forEach(item => {
        if (!map[item]) {
          map[item] = 0;
        }
        map[item] += 1;
      });

      //if no duplicate found, then answer add 1
      if (Object.keys(map).length == relation.length) {
        answer += 1;
      }
      att = [];
      map = {};
    }
  }

  return answer;
}

//testing
var relation = [['100','ryan','music','2'],
            ['200','apeach','math','2'],
            ['300','tube','computer','3'],
            ['400','con','computer','4'],
            ['500','muzi','music','3'],
            ['600','apeach','music','2']];

console.log(solution(relation));

//answer : 2