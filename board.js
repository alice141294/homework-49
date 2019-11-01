var boards ="";

for (var i = 0; i<8; i++) {
    for (var j=0;j<8;j++) {
        if(i%2==0) {
            board+="■";
            board+=" ";


        } else {
            board+=" ";
            board+="■";

        }
    }
    board+="\n"

}
console.log(boards)