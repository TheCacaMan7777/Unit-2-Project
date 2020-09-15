    var input = Number(prompt("Put in a decimal"));
 
    console.log(input + " in decimal to decimal: " + input)
    console.log(input + " in decimal to binary: " + input.toString(2));



////this is for the hexadecimal code////
///divides the input by 16 and and rounds it by nearest whole number
let answerPart1 = Math.floor(input/16) ;
///takes answer above and finds the remainder
let remainder1 = input - (answerPart1*16) ; 

/// this looks for what the first digit of the hexadecimal should be 1-9 or A-F
     if (remainder1 == 0) {
      remainder1 = "0";
    }
     if (remainder1 == 1) {
      remainder1 = "1";
   }
     if (remainder1 == 2) {
      remainder1 = "2" ;
   }
     if (remainder1 == 3) {
      remainder1 = "3" ;
   }
     if (remainder1 == 4) {
      remainder1 =  "4" ;
   }
     if (remainder1 == 5) {
      remainder1 =  "5" ;
   }
     if (remainder1 == 6) {
      remainder1 =  "6" ;
   }
     if (remainder1 == 7) {
      remainder1 =  "7" ;
   }
     if (remainder1 == 8) {
      remainder1 =  "8" ;
   }
     if (remainder1 == 9) {
      remainder1 =  "9" ;
   }
     if (remainder1 == 10) {
    remainder1 = "A";
    }
     if (remainder1 == 11) { 
    remainder1 = "B";
    }
     if(remainder1 == 12) {
    remainder1 = "C";
   }
     if (remainder1 == 13) {
    remainder1 = "D";
    }
     if (remainder1 == 14) {
    remainder1 = "E";
   }
    if (remainder1 == 15) {
    remainder1 = "F";
    }



///this does pretty much the same thing as the first part. all i did was add one number to the variables (so 'remainder1' becomes 'remainder2' and so on)

    let answerPart2 = Math.floor(answerPart1/16) ;
    let remainder2 =  answerPart1 - (answerPart2*16);

    if (remainder2 == 0) {
      remainder2 = "0";
    }
     if (remainder2 == 1) {
      remainder2 = "1";
   }
     if (remainder2 == 2) {
      remainder2 = "2" ;
   }
     if (remainder2 == 3) {
      remainder2 = "3" ;
   }
     if (remainder2 == 4) {
      remainder2 =  "4" ;
   }
     if (remainder2 == 5) {
      remainder2 =  "5" ;
   }
     if (remainder2 == 6) {
      remainder2 =  "6" ;
   }
     if (remainder2 == 7) {
      remainder2 =  "7" ;
   }
     if (remainder2 == 8) {
      remainder2 =  "8" ;
   }
     if (remainder2 == 9) {
      remainder2 =  "9" ;
   }
     if (remainder2 == 10) {
    remainder2 = "A";
    }
     if (remainder2 == 11) { 
    remainder2 = "B";
    }
     if(remainder2 == 12) {
    remainder2 = "C";
   }
     if (remainder2 == 13) {
    remainder2 = "D";
    }
     if (remainder2 == 14) {
    remainder2 = "E";
   }
    if (remainder2 == 15) {
    remainder2 = "F";
    }




/// Same as the last one
    let answerPart3 = Math.floor(answerPart2/16) ;
    let remainder3 =  answerPart2 - (answerPart3*16);

    if (remainder3 == 0) {
      remainder3 = "0";
    }
     if (remainder3 == 1) {
      remainder3 = "1";
   }
     if (remainder3 == 2) {
      remainder3 = "2" ;
   }
     if (remainder3 == 3) {
      remainder3 = "3" ;
   }
     if (remainder3 == 4) {
      remainder3 =  "4" ;
   }
     if (remainder3 == 5) {
      remainder3 =  "5" ;
   }
     if (remainder3 == 6) {
      remainder3 =  "6" ;
   }
     if (remainder3 == 7) {
      remainder3 =  "7" ;
   }
     if (remainder3 == 8) {
      remainder3 =  "8" ;
   }
     if (remainder3 == 9) {
      remainder3 =  "9" ;
   }
     if (remainder3 == 10) {
    remainder3 = "A";
    }
     if (remainder3 == 11) { 
    remainder3 = "B";
    }
     if(remainder3 == 12) {
    remainder3 = "C";
   }
     if (remainder3 == 13) {
    remainder3 = "D";
    }
     if (remainder3 == 14) {
    remainder3 = "E";
   }
    if (remainder3 == 15) {
    remainder3 = "F";
    }




///This just puts the answers in order, since all the remainder answers are in "quotes" they're not added like normal numbers. just put together
let hexadecimal = remainder3 + remainder2 + remainder1;


///right click on html, click 'inspect', click the tab that says 'console log', and you should see the answer
console.log(`The hexadecimal of the decimal is ${hexadecimal}`);


{
    var input = Number(prompt("Put in a number"));
 
    console.log(input + "in decimal to decimal: " + input)
    console.log(input + "in decimal to binary: " + input.toString(2));
    console.log(input + "in decimal to hex: " + input.toString(16));       
}