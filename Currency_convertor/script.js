let btn = document.getElementById('convert-btn');
let input = document.getElementById("from-currency");
let output= document.getElementById("to-currency");
btn.addEventListener('click',() =>{
    const curr1 =input.value;
    const curr2 =output.value; 
    let val = Number(document.getElementById("amount").value);
    if(curr1 === curr2)
    {
        document.getElementById('alert').textContent=`Currency shouldn't be same !`;
    }
    else
    {
        document.getElementById('alert').textContent=``;
        convert(curr1,curr2,val);
    }
})
async function convert(curr1,curr2,val)
{
    const host = 'api.frankfurter.app';
   try{await fetch(`https://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById(`result`).textContent=`${val} ${curr1} = ${data.rates[curr2]}  ${curr2}`;
      });}
      catch(err){
        convert(curr1,curr2,val);
      }

}