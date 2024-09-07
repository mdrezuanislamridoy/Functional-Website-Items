const anime=document.getElementById('anime');
anime.addEventListener('mouseover',()=>{
  anime.style.backgroundColor='gray'
})

anime.addEventListener('mouseout',()=>{
  anime.style.backgroundColor='blue'
})



// expandable nav bar

const ebar = document.querySelector('#ebars');

const elist = document.querySelectorAll('.elist')
const etext = document.querySelectorAll('.elist a')

let etoggle = false;

ebar.addEventListener('click',()=>{
  etoggle=!etoggle;
  if (etoggle) {
    elist.forEach(e=>{
      e.style.width='25px'
      
    })
    etext.forEach(e=>{
      e.style.display='none'
    })
  }else{
    elist.forEach(e=>{
      e.style.width='100%'
      
    })
    etext.forEach(e=>{
      e.style.display='inline'
    })
  }
})

// Drop down menu

const dbars = document.querySelector('#dbars');
  const dlist = document.getElementById('dul');

  let dtoggle = false;

  dbars.addEventListener('click', () => {
    dtoggle = !dtoggle;
    if (dtoggle) {
      dlist.style.display = 'block';
      setTimeout(() => {
        dlist.style.width = '100%';
      }, 10); // Adding a small delay to trigger the transition
    } else {
      dlist.style.width = '0';
      setTimeout(() => {
        dlist.style.display = 'none';
      }, 300); // Wait for the transition to finish before hiding
    }
  });