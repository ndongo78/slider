
  
  let currentIndex=0;
  const images=document.querySelectorAll("item")

const container=document.querySelector(".container").children




 document.getElementById('right').addEventListener('click',()=>handleSlider('next'))
  
   document.getElementById('left').addEventListener('click',()=>handleSlider('prev'))

   
const handleSlider=(name)=>{
   if (name ==="next") {
      if(currentIndex ===  container.length){
       currentIndex =0;
      }else{
        currentIndex++;
      }
       for(let i=0; i < container.length; i++){
        console.log(i)
        container[i].classList.remove('active')
     }
    container[currentIndex].classList.add("active")
   }else if(name ==='prev'){
          if (currentIndex === 0) {
            ccurrentIndex = container.length - 1;
          } else {
            currentIndex--;
          }
          for (let i = 0; i < container.length; i++) {
            //console.log(i)
            container[i].classList.remove('active')
          }
          container[currentIndex].classList.add("active")
   }
}

