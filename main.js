const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

function game(choice){

}

function main(){
  rock.addEventListener('click', function(){
    console.log('rock')
  })
  paper.addEventListener('click', function(){
    console.log('paper')
  })

  scissors.addEventListener('click', function(){
    console.log('scissors')
  })
}

main()