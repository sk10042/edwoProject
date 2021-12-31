
//3차본
export function update(originObj, updateEle) {

  let newObj = Object.assign({}, originObj);

  newObj = dollorSetUpdate(newObj, updateEle);
  console.log(newObj)
  
  return newObj;
};

function dollorSetUpdate(inputObj, updateEle) {

  let updateKey = Object.keys(updateEle)[0];
  let updateCommand = Object.keys(updateEle[updateKey])[0];
  let nextObj;

  for(let key in inputObj) {
    nextObj = inputObj[key];
    if(key == updateKey) {
      inputObj[updateKey] = updateEle[updateKey][updateCommand];
    } else {
      if(typeof(nextObj) == 'object') {
        dollorSetUpdate(nextObj, updateEle);
      };
    }
  }

  return inputObj;
}

/* si 개발 특성상 시간안에 많은 개발본을 찍어내야 하다보니 중간중간 commit 하는 습관이 없습니다..
   완성됬을 때 한번에 여러파일을 한번에 push 하다 보니 고민과정은 글로 서술하겠습니다.
   맨 처음 시도한 방법(1차본)은 깊은 복사(Deep copy)를 했더니 같은 객체를 참조하지 않아서 실패.
   두번째 시도한 방법(2차본)은 얉은 복사(Shallow copy)를 했더니 같은 객체를 참조하여 성공.
   이후 npm test를 통해 test케이스 가져오는데 실패 후
   세번째 시도한 방법(3차본)은 어떤 형태의 변수가 들어오든 재귀를 통해 모든 요소를 탐색하여 치환을 하는걸 시도했으나
   배열의 재귀과정에서 좌절하고 json형태의 key value object만 몇 중첩으로 오든 재귀하게끔은 구현하였습니다..
   다시 test케이스 세팅에 시도해보았지만 실패하고 어차피 세번째 과정에서 배열에대한 처리를 하지 못해 아마..
   테스트케이스 전부 통과 못 할 거라 생각하고 js to typescript migration으로 넘어갔습니다.

*/

/*//1차본 
export function update(originObj, updateEle) {

  let newObj = JSON.parse(JSON.stringify(originObj));

  newObj = dollorSetUpdate(newObj, updateEle, 'name');
  
  return newObj;
};

function dollorSetUpdate(inputObj, updateEle) {
  
  let updateKey = Object.keys(updateEle)[0];
  let updateCommand = Object.keys(updateEle[updateKey])[0];

  inputObj[updateKey] = updateEle[updateKey][updateCommand];

  return inputObj;
}*/


/*//2차본 
export function update(originObj, updateEle) {

  let newObj = Object.assign({}, originObj);

  newObj = dollorSetUpdate(newObj, updateEle);
  
  return newObj;
};

function dollorSetUpdate(inputObj, updateEle) {
  
  let updateKey = Object.keys(updateEle)[0];
  let updateCommand = Object.keys(updateEle[updateKey])[0];

  inputObj[updateKey] = updateEle[updateKey][updateCommand];

  return inputObj;
}
*/

