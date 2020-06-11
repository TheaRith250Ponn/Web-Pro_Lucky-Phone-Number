//Thearith Ponn | 5988250 | Section: 1

// list of lucky numbers
var numbers = [15, 51, 14, 41, 55, 39, 23];

// print list of lucky number to html
numbers.forEach(function (item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("myOl").appendChild(li);
});

// function to generate random number
function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
};

// function to generate number with lucky number at last 2 digit
function genNumber() {
    
    // generate random number from education list called numbers
    var randomNumber = "" + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) 
    + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + numbers[Math.floor(random(1, numbers.length)) - 1];

    return randomNumber;
    
};

// main function to get lucky number and print to user
function getNumber() {
    // push exclude numbers to array
    var excludeNumbers = [];
    var checkBoxes = ["cb1", "cb2", "cb3", "cb4", "cb5", "cb6", "cb7", "cb8", "cb9", "cb0"]
    for(var i=0; i< checkBoxes.length; i++) {
        if(document.getElementById(checkBoxes[i]).checked){
            excludeNumbers.push(document.getElementById(checkBoxes[i]).value);
        } 
    }

    // get random numbers and check if it is usable, if not print message to user
    if(excludeNumbers.length == 0){
        // if user didn't exclude any number, just print
        document.getElementById("phone").innerHTML = "089-" + genNumber();
    }
    else{
        // if user tick any exclude numbers
        // i used 100000 loops because the part of 3 digits are fixed and the second of 5 digits random number
        for(var a=0; a < 100000; a++){
            var getNum = genNumber();

            var check = 0;
            var checkStr = "";
            for(var i=0; i< excludeNumbers.length; i++) {
                if(getNum.includes(excludeNumbers[i])) {
                    check = 0;
                }else{
                    check = 1;
                }
                checkStr = checkStr + check;
            } //for

            //console.log(checkStr);
            if(checkStr.includes(0)){
                if(a==99999){
                    // prevention if there is no number to show
                    document.getElementById("phone").innerHTML = "No lucky number!";
                    break;
                }
                continue;
            }else{
                // the result to show the lucky number
                document.getElementById("phone").innerHTML = "089-" + getNum;
                break;
            }
        }
    }

};