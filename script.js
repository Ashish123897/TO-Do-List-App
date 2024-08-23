let x=document.getElementById('i1');
let y=document.getElementById('u1');
let c=document.getElementById('b1');
c.addEventListener('click',function()
{
  let z=x.value.trim();
  if(z!=' ')
  {
    let li=document.createElement('li');
    li.textContent=z;
    y.appendChild(li);
    z=' ';
    
    let r=document.createElement('button');
    r.textContent='remove';
    li.appendChild(r);
    
    r.addEventListener('click',function()
    {
      li.remove();
    })
  }
});
