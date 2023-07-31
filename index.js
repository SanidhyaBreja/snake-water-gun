console.log('this game consist of 5 rounds')
console.log("choose 1 for snake, 2 for water and 3 for gun")
console.log('\n')
let score=0
let count=0

for(let i=0;i<5;i++)
  {
    let x = Math.floor((Math.random() * 3) + 1);
   // console.log(x)
     let y=prompt("enter the number")
    if(x==1 && y==1 || x==2 && y==2 || x==3 && y==3 )
        console.log('tie')
    
    else if(x==2 && y==1)
    {
    //  console.log('user chooses snake and computer chooses water so user wins this round')
      
      console.log('user wins this round!!')
    score++;
    }
    else if(x==1 && y==3)
    {
        //console.log('user chooses gun and computer chooses snake so user wins this round')
         console.log('user wins this round!!')
      score++
    }
    else if(x==3 && y==2)
      
    {
       //console.log('user chooses water and computer chooses gun so user wins this round')
         console.log('user wins this round!!')
      score++
    }
      
    else 
    {
      console.log('computer wins this round')
      count++
    }
    
  }
console.log(' user score is %d',score)
console.log('computer score is %d',count)

if(score>count)
  console.log('user wins😊😊')
else if(score<count)
  console.log('computer wins😫😫')
else
  console.log('match is tied')