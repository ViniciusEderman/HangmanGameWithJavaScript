let tryX = 6;
let dynamicList = [];
let secretWordCategory;
let SecretWordChoice;

const words = [
    wd001= {
        name: "BRASIL",
        category: "COUNTRYS"
    },
    wd002= {
        name: "UNITED STATES",
        category: "COUNTRYS"
    },
    wd003= {
        name: "CANADA",
        category: "COUNTRYS"
    },
    wd004= {
        name: "JAPAN",
        category: "COUNTRYS"
    },
    wd005= {
        name: "ENGLAND",
        category: "COUNTRYS"
    },
    wd006= {
        name: "CHINA",
        category: "COUNTRYS"
    },
    wd007= {
        name: "EUROPE",
        category: "COUNTRYS"
    },
    wd008= {
        name: "PORTUGAL",
        category: "COUNTRYS"
    },
    wd009= {
        name: "CUBA",
        category: "COUNTRYS"
    },
    wd010= {
        name: "CHILE",
        category: "COUNTRYS"
    },
    wd011= {
        name: "DOG",
        category: "ANIMALS"
    },
    wd012= {
        name: "CAT",
        category: "ANIMALS"
    },
    wd013= {
        name: "BAT",
        category: "ANIMALS"
    },
    wd014= {
        name: "FOX",
        category: "ANIMALS"
    },
    wd015= {
        name: "FISH",
        category: "ANIMALS"
    },
    wd016= {
        name: "BULL",
        category: "ANIMALS"
    },
    wd017= {
        name: "PIG",
        category: "ANIMALS"
    },
    wd018= {
        name: "GIRAFFE",
        category: "ANIMALS"
    },
    wd019= {
        name: "OWL",
        category: "ANIMALS"
    },
    wd020= {
        name: "TIGER",
        category: "ANIMALS"
    }
]

function buildSecretWord() {

    const indexWord = parseInt(Math.random() * words.length);
    
    SecretWordChoice = words[indexWord].name;
    secretWordCategory = words[indexWord].category;
    console.log(SecretWordChoice);
    console.log(secretWordCategory);
}

function wordInScreen() {
    const category = document.getElementById("category");
    category.innerHTML = secretWordCategory;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";

    for(i = 0; i < SecretWordChoice.length; i++){
        if(dynamicList[i] == undefined){
            dynamicList[i] = "&nbsp;"
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        }
        else{
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        }
    }
}

function verifyChoiceLetters(letters) {
    if(tryX > 0) {
        changeStyleLetter("key-" + letters);
        list(letters);
        wordInScreen();
    }
    
}

function changeStyleLetter(letter) {
    document.getElementById(letter).style.background = "#C71585";
    document.getElementById(letter).style.color = "#ffffff";
}

function list(letters) {
    const x = SecretWordChoice.indexOf(letters)
    if(x < 0) {
        tryX--
    }
    else {
        for(i = 0; i < SecretWordChoice.length; i++) {
            if(SecretWordChoice[i] == letters) {
                dynamicList[i] = letters;
            }
        }
    }

    let win = true;
    for(i = 0; i < SecretWordChoice.length; i++) {
        if(SecretWordChoice[i] != dynamicList[i]) {
            win = false;
        }
    }
    if(win == true) {
        tryX = 0;
    }
}

buildSecretWord();
wordInScreen();
