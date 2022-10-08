let list = []
console.log(list)
let arr = [0,0,0,0,0,0,0,0,0]
let arr2 = [0,0,0,0,0,0,0,0,0]
chances = 0
let pre = []
get = 0
gamef = 0
player = 0
player2 = 0
document.getElementById("player1").innerHTML = String("P1 Scores "+player.toString())
document.getElementById("player2").innerHTML =  String("P2 Scores "+player2.toString())
function change(num){
    if(gamef == 1){
        alert("already player wined pelase reset")
        return
    }
    
    if(chances != 9){
        get = 1 - get
        pre.push(num-1)
        if(get == 1){  
          if(arr2[num-1] != 1){     
             arr[num-1] = 1
             document.getElementById(`${num}`).innerHTML = "X"
          }
        }
        else{
            if(arr[num-1] != 1){
                 arr2[num-1] = 1
                 document.getElementById(`${num}`).innerHTML = "O"
            }
        }
    }
    else{
        alert("please reset your game")
    }
}
function back(){
    if(chances != 0 && chances != 9){
      let last = pre.pop()
      document.getElementById(`${last+1}`).innerHTML = " "
      if(get == 1){
           arr[last] = 0
      }
      else{
          arr2[last] = 0
      }
      chances -= 1
      get = 1 - get 
    }
}
function add(accumulator, a) {
    return accumulator + a;
}
function reset(){
    document.getElementById("player1").innerHTML = String("P1 Scores "+player.toString())
    document.getElementById("player2").innerHTML =  String("P2 Scores "+player2.toString())
    for(let i = 1;i <=9;i++){
        document.getElementById(`${i}`).innerHTML = " "
        document.getElementById(`${i}`).style.color = 'red'
    }
    arr = [0,0,0,0,0,0,0,0,0]
    arr2 = [0,0,0,0,0,0,0,0,0]
    chances = 0
    get = 0
    gamef = 0
}
function result(){
   if(chances == 9){
      alert("draw")
      return 
   }
   if(gamef == 1){
    return 
   }
   for(let i = 0;i < arr.length;i+=3){
     if(arr.slice(i,i+3).reduce(add,0) == 3 ){
        alert("player 1 wins")
        pre = i
        document.getElementById(`${i+1}`).style.color = "blue"
        document.getElementById(`${i+2}`).style.color = "blue"
        document.getElementById(`${i+3}`).style.color = "blue"
        gamef = 1
        player += 1
        break 
     }
     else if(arr2.slice(i,i+3).reduce(add,0) == 3){
        alert("player 2 wins")
        document.getElementById(`${i+1}`).style.color = "blue"
        document.getElementById(`${i+2}`).style.color = "blue"
        document.getElementById(`${i+3}`).style.color = "blue"
        gamef = 1
        player2 += 1
        break 
     }
}
for(let i = 0;i < 3;i+=1){
     if((arr[i] + arr[i+3] + arr[i+6])==3){
         alert("player 1 wins")
         document.getElementById(`${i+1}`).style.color = "blue"
         document.getElementById(`${i+4}`).style.color = "blue"
         document.getElementById(`${i+7}`).style.color = "blue"
         gamef= 1
         player += 1
         break 
     }
     else if((arr2[i] + arr2[i+3] + arr2[i+6])==3){
        alert("player 2 wins")
        document.getElementById(`${i+1}`).style.color = "blue"
        document.getElementById(`${i+4}`).style.color = "blue"
        document.getElementById(`${i+7}`).style.color = "blue"
        gamef = 1
        player2 += 1
        break 
    }
}
if(((arr[0] + arr[4] + arr[8]) == 3)){
     alert("player 1 wins")
     document.getElementById(`1`).style.color = "blue"
     document.getElementById(`5`).style.color = "blue"
     document.getElementById(`9`).style.color = "blue"
     gamef = 1
     player += 1
}
if(((arr[2] + arr[4] + arr[6]) == 3)){
    alert("player 1 wins")
    document.getElementById(`3`).style.color = "blue"
    document.getElementById(`5`).style.color = "blue"
    document.getElementById(`7`).style.color = "blue"
    gamef = 1
    player += 1
}
if(((arr2[0] + arr2[4] + arr2[8]) == 3)){
     alert("player 2 wins")
     document.getElementById(`1`).style.color = "blue"
     document.getElementById(`5`).style.color = "blue"
     document.getElementById(`9`).style.color = "blue"
     gamef = 1
     player2 += 1
}
if(((arr2[2] + arr2[4] + arr2[6]) == 3)){
    alert("player 2 wins")
    document.getElementById(`3`).style.color = "blue"
    document.getElementById(`5`).style.color = "blue"
    document.getElementById(`7`).style.color = "blue"
    gamef = 1
    player2 += 1

}

chances += 1
}