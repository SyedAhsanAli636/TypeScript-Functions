
// Function

function halfFry()
{ 
    let coocked = 1   + 1.5    + 2;
    //            Egg + Butter + Salt 
    console.log(coocked);
}

halfFry()

// Return Function with Parameters / Arguments

function halfFryEgg(egg: number, butter: number, salt: number): number
{ 
    let reciepe = egg + butter + salt 
    return reciepe 
}

let response = halfFryEgg(2, 4, 1)
console.log(response); 