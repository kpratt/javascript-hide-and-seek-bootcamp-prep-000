function getFirstSelector(selector){
  var a = document.querySelector(selector);
  return a;
}

function nestedTarget(){
  var b = document.querySelector('#nested .target');
  return b;
}

function increaseRankBy(n) {
  var c = document.querySelectorAll('.ranked-list');
  for (let i=0; i<c.length; i++){
    c[i].innerHTML = (parseInt(c[i])+n).toString();
  }
}

function deepestChild() {
  var d = document.querySelector('div#grand-node');
  while (d.childElementCount>0){
    d = d.children[0];
    }
    return d;
}
