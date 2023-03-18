const cardArray = [
    {name: 'cheeseburger',
    img: 'images/cheeseburger.png'
    },
    {name: 'fries',
    img: 'images/fries.png'
    },
    {name: 'hotdog',
    img: 'images/hotdog.png'
    },
    {name: 'ice-cream',
    img: 'images/ice-cream.png'
    },
    {name: 'pizza',
    img: 'images/pizza.png'
    },    {name: 'cheeseburger',
    img: 'images/cheeseburger.png'
    },
    {name: 'fries',
    img: 'images/fries.png'
    },
    {name: 'hotdog',
    img: 'images/hotdog.png'
    },
    {name: 'ice-cream',
    img: 'images/ice-cream.png'
    },
    {name: 'pizza',
    img: 'images/pizza.png'
    },    
    {name: 'white',
    img: 'images/white.png'
    },
    {name: 'white',
    img: 'images/white.png'
    }
];
const grid = document.getElementById("grid");
let cardChosen = [];
let result = 0;
let score = document.getElementById("result");
let clear = document.getElementById("clear");
let start = document.getElementById("start");

//randomly shuffle cardArray
cardArray.sort(() => 0.5 - Math.random());

function createBoard(){
    for (let i = 0; i<cardArray.length; i++){
        const card= document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute("data-id", i);
        card.addEventListener('click', function(){
            flipCard(card);
        });
        grid.appendChild(card);
    }
}


function flipCard(card){
    let dataId = card.getAttribute('data-id');
    card.setAttribute('src', cardArray[dataId]["img"]);
    cardChosen.push(cardArray[dataId]);
    if(cardChosen.length == 2){
        if (cardChosen[0]['name'] == cardChosen[1]['name']){
            result ++;
        } else {
            function wrongPairing(){
                alert('Wrong pairing');
                const cards = document.querySelectorAll('img');
                    for (let i = 0; i < cards.length; i++){
                        cards[i].setAttribute('src', 'images/blank.png');
                    }
                    result=0;
            }
            setTimeout(wrongPairing, 100);
        }
        cardChosen = [];
    }

    if(result == ((cardArray.length)/2)){
        result = "You won";
    }
    score.innerText = result;

}

start.addEventListener("click", createBoard);

clear.addEventListener("click", function(){
    result=0;
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    cardArray.sort(() => 0.5 - Math.random());
    createBoard();
})