var total=0;
var count=0;
var marks=0;
while(count<5){
    marks=prompt("Enter marks:");
    total =total+parseInt(marks);
    document.write(marks+"<br>");
    count++
}
document.write(total);