var arr =[
  {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGElMjBzdG9yeSUyMG1vZGVsfGVufDB8fDB8fHww",
  story:"https://images.unsplash.com/photo-1513351974182-1f36b4d965d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D"},

  {dp:"https://images.unsplash.com/photo-1542190891-2093d38760f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
  story:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D"},

  {dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
  story:"https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D"},

  {dp:"https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
  story:"https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
  
  {dp:"https://images.unsplash.com/photo-1516742720271-6ae39cbc5bd1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
  story:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGluc3RhJTIwc3RvcnklMjBtb2RlbCUyMG1hbGV8ZW58MHx8MHx8fDA%3D"}

]

var storiyan=document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`  
})
storiyan.innerHTML =  clutter 

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`
  setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
    
  }, 3000);
});
