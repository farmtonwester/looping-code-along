const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
    let thankYous = []
    for (let i = 0; i < names.length;i++) {
         thankYous.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        
    }
    return thankYous
}

function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    } 
}