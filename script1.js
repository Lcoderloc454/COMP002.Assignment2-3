let rows =4;
for (let i = 1; i <= rows; i++) {
    console.log("#".repeat(i));
} //result: repeated 10 times

for (let i = rows - 1; i >= 1; i--) {
    console.log("#".repeat(i));
} //result: repeated 16 times