let suggestions = [

"asparagus",
"apples",
"avacado",

"bruscetta",
"bacon",
"black beans",
"bagels",


"Cabbage",
"cake",
"carrots",
"chocolate",


"dates",
"duck",
"donuts",

"fish",  
"French toast",

"ginger",

 
"honey",


"ice cream",
"Indian food",

"jelly / jam",


"ketchup"
];

const searchWrapper = document.querySelector('.search-input');

const suggestionBox = document.querySelector('.autobox');

const inputBox = document.querySelector('input');

inputBox.onkeyup = (e) => {
    console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
            
        })
       // console.log(emptyArray);
       emptyArray = emptyArray.map((data) => {
        return data = '<li>'+ data +'</li>';
       })
       console.log(emptyArray);
       searchWrapper.classList.add('active')
       showSuggessions(emptyArray)
       let allList = suggestionBox.querySelectorAll('li')
       for(let index = 0; index< allList.length ; index++)
       allList[index].setAttribute('onclick', 'select(this)')
    }
    else {
        searchWrapper.classList.remove('active')
    }
    
}

function select(element) {
    let selectUserData = element.textContent;
    //console.log(selectUserData)
    inputBox.value = selectUserData;
}

function showSuggessions(list) {
    let listData ;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}


