const inc=document.getElementById('inc');
const dec=document.getElementById('dec');
const reset=document.getElementById('reset');
let count=0;
inc.onclick=function(){
    count++;
    document.getElementById('val').textContent=count;
}
dec.onclick=function(){
    count--;
    document.getElementById('val').textContent=count;
}
reset.onclick=function(){
    count=0;
    document.getElementById('val').textContent=count;
}