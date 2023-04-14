const container = document.getElementById('container');

const cardsLength=16
const cards=[]

let prevShownCard = undefined

let icons=[
  'fax',
  "palette",
  'mug-hot',
  'book',
  'coins',
  'igloo',
  'cog',
  'life-ring'
]

icons.push(...icons) // to use icons again 


// for rendering new icons
for(let i =0;i<300;i++) {
    const idx=Math.floor(Math.random() * icons.length)
    const idx2=Math.floor(Math.random() * icons.length)
    const template =icons[idx]
    icons[idx] = icons[idx2]
    icons[idx2] = template
}


//  
for(let i = 0; i <cardsLength; i++) {

  const  cardEl =document.createElement('div')
   cardEl.classList.add('card')  
   cardEl.innerHTML = `
     <div class="front">
      <i class="fas fa-${icons[i]}"></i>  
     </div>
     <div class="back"><small>click me</small></div>
   `
  
  cardEl.addEventListener('click',()=>{
    if(!cardEl.classList.contains("show")){
        cardEl.classList.add("show");
    }

    if(!prevShownCard){
        prevShownCard = cardEl
    }else{
        const icon=prevShownCard.querySelector("i").classList[1]
        const secoundIcon=cardEl.querySelector("i").classList[1]
        if(icon!==secoundIcon){
            const temp=prevShownCard;
            setTimeout(()=>{
            temp.classList.remove("show")
            cardEl.classList.remove("show")
            },1000)
        }
        prevShownCard=undefined
    }
  })
  cards.push(cardEl)
    container.appendChild(cardEl)
}