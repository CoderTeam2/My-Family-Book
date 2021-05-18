var images = ["Mom.jpg","DAD.jpg","Sis1.jpg","Sis2.png"];
var names = ["Mom","Dad","1st Sister","2nd Sister"];
var i = 0;
function update(){
    if(i > 3){
        i = 0;
        document.getElementById("person").innerHTML = "Me";
        document.getElementById("pic").src = "Me.jpg";
    }else{
        document.getElementById("person").innerHTML = names[i];
        document.getElementById("pic").src = images[i];
        i++;
    }
}