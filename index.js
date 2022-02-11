// problem-1:anaToVori 

function anaToVori(ana){
    if(ana<0){
        return 'please give right input'
    }
    else if(typeof ana !='number'){
        return 'please give a number'
    }
    var totalVori = ana*0.0625;
    return totalVori;
}
var sumVori = anaToVori(16);
console.log(sumVori)


// problem-2:pandaCost

function pandaCost(singara,samucha,jilapi ){

    if((singara<0) || (samucha<0) || (jilapi<0)){
        return 'wrong input,please give positive number'
    }
    else if((typeof singara !='number') || (typeof samucha !='number') || (typeof jilapi !='number')){
        return 'please give a number'
    }
    var totalSingara = singara*7;
    var totalSamucha = samucha*10;
    var totalJilapi = jilapi*15;
    var totalCost = totalSingara+totalSamucha+totalJilapi;
    return totalCost; 
}
var sumCost=pandaCost(1,2,1);
console.log(sumCost)


//problem-3:picnicBudget

function picnicBudget(budget){
    if(budget<0){
        return 'wrong input give valid input'
    }
    else if(typeof budget !='number'){
        return 'please give a number'
    }
    else if(budget<=100){
        var numbersOfHundredStudent = budget*5000;
        return numbersOfHundredStudent ;
    }
    else if(budget>100 && budget<=200){
        var numbersOfTwoHundredStudent  = budget*4000+100000
        return numbersOfTwoHundredStudent ;
    }
    else if(budget>200){
        var numbersOfThreeHundredStudent  = (budget*3000)+300000
        return numbersOfThreeHundredStudent;
    }
}
var sumBudget = picnicBudget(320);
console.log(sumBudget)


//problem-4:oddFriend

function oddFriend(friends){
    var oddFriends = [];
    for(const friend of friends ){
        if(friend<=0){
            return 'please give right string'
            }
            else if(friend>0){
                return 'please give right string'
                }    
               
        else if(friend.length%2!=0){
            output = friend;
            oddFriends.push(friends.length%2!=0)
            return output;
        }   
    }
    return oddFriends;
}
var sumOddFriend = oddFriend(['orin','liza','likha'])
console.log(sumOddFriend);

