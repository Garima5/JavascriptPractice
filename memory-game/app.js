document.addEventListener('DOMContentLoaded',()=>{
    //card options
    cardArray = [
        {
            name: 'fries' ,
            img: 'images/fries.png'
        },
        {
            name: 'fries' ,
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger' ,
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger' ,
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog' ,
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog' ,
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream' ,
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream' ,
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake' ,
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake' ,
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza' ,
            img: 'images/pizza.png'
        },
        {
            name: 'pizza' ,
            img: 'images/pizza.png'
        }
   
    ]
    // randomize the game
    cardArray.sort(() => 0.5 - Math.random())
    // create game baord
    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenid = []
    var cardsWon = []
    function createBoard(){
    for (let i = 0; i<cardArray.length; i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        grid.appendChild(card)

    }
}

    // check your match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const option1 = cardsChosenid[0]
        const option2 = cardsChosenid[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You made the right guess")
            cards[option1].setAttribute('src','images/white.png')
            cards[option2].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[option1].setAttribute('src','images/blank.png')
            cards[option2].setAttribute('src','images/blank.png')
            alert("Guess again")
        }
        cardsChosen = []
        cardsChosenid = []
        result.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2)
        {
            result.textContent = "Congratulations you found them all"
        }

    }

    //flip your card
    function flipCard()
    {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenid.push(cardId)
        //since this is called in the create board function, we already have an id
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


createBoard()

})