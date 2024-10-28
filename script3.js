let size = 8;

for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            line += "#";
        } else {
            line += " ";
        }
    }
    console.log(line);
} //result: this did gave the lines to have four col's and 8 lines