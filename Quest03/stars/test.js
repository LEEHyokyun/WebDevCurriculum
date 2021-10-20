//n = number_of_rows
//nth row에서의 별의 개수는 2n-1
//각 줄에서 첫번째, 마지막 별은 제거

let number = prompt("what is your star's count?");
let star = ''

for(var i=0; i<number; i++){
    for(var j=1; j<=2*number-1; j++){
        if(j<(number-i)){
            star = star + '-'
        }else if(j>(number+i)){
            star = star + '-'
        }else{
            star = star + '*'
        }
    }
    star = star + '\n'
}

console.log(star)