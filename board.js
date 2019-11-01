var boards ="";

for (var i = 0; i<8; i++) {
    for (var j=0;j<8;j++) {
        if(i%2==0) {
            boards+="■";
            boards+=" ";


        } else {
            boards+=" ";
            boards+="■";

        }
    }
    boards+="\n"

}
console.log(boards)