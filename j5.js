
function count( str ){
var c1=0;
for(i=0;i<=str.length-1;i++){
    if(str[i] !==" "){
        c1++;
        }
}
console.log("number of characters :"+ c1);
var c=0;
var isw=false;
for(i=0;i<=str.length-1;i++){
if(str[i] !==" "&& !isw){
    isw=true;
c++;
}
else if (str[i]===" "){
    isw=false;
}
}
console.log("number of words :"+ c);
var c3=0;
for(i=0;i<=str.length-1;i++){
    if(str[i]=="."||str[i]=="?" || str[i]=="!"){
c3++;
    }
}
console.log("number of sentences :"+ c3);

}
count("reem?");
console.log("**********************");
count("reem mahmod salah mahm!");
console.log("**********************");
count("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")