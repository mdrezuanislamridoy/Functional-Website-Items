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
      
    } else {
      dlist.style.display = 'none';
      
    }
  });
  
  // Drop down menu

const rbars = document.querySelector('#rbars');
  const rlist = document.getElementById('rul');

  let rtoggle = false;

  rbars.addEventListener('click', () => {
    rtoggle = !rtoggle;
    if (rtoggle) {
      rlist.style.display = 'block';
      
    } else {
      rlist.style.display = 'none';
      
    }
  });
  
  
  
  document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});


document.querySelector('.collapsible').addEventListener('click', function() {
  this.classList.toggle('active');
  
  const content = this.nextElementSibling;
  
  if (this.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
});
