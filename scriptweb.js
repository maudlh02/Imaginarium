var counter = 15;
var intervalId = null;

function finish() {
  clearInterval(intervalId);
  document.getElementById("compte").innerHTML = "TERMINE!";
    document.getElementById("img"+nombres).style.visibility="hidden";
    document.getElementById("question").innerHTML=document.getElementById("image"+nombres).innerHTML ;  
}




function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("compte").innerHTML = counter + " secondes restantes";
    }	
}




function nb_aleatoire(nb)
{
nombre= Math.floor(Math.random()* nb)+1;
}     

tirage = new Array;
nombres="";
nb= 2;
for (i=1 ;i<nb ;i++)
{
nb_aleatoire(10);
tirage[i]= nombre;

for (t=1 ; t<i ;t++){
	if (tirage[t]==nombre) 
	{
		i=i-1;
	} 
}
}
             
for (i=1 ;i<nb ;i++)
{
var nombres=tirage[i];
console.log(nombres+"  ");
document.getElementById("img"+nombres).style.visibility="visible";

}






function start(){
    document.getElementById('prenom').innerHTML= "Bienvenue  "+    
    document.getElementById('valeurpseudo').value + " !";
    intervalId = setInterval(bip, 1000);
    
    document.getElementById("accueil").innerHTML=document.getElementById("jeu_photo").innerHTML;
}








function valider(){
    
    document.getElementById("question").innerHTML=document.getElementById("validation").innerHTML ;
    document.getElementById("validation").innerHTML=document.getElementById('jeu_questions').innerHTML ;   
    intervalId = setInterval(bip, 1000);
    
function finish(){
    clearInterval(intervalId);
    document.getElementById("compte").innerHTML = "TERMINE!";
    document.getElementById("img"+nombres).style.visibility="hidden";
    document.getElementById("question").innerHTML=document.getElementById("image"+nombres).innerHTML ;  
}  

    
  
    
var counter= 15;  
var itervalId= null;
    
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("compte").innerHTML = counter + " secondes restantes";
    }	
}   
    
    
    
   function nb_aleatoire(nb){
nombre= Math.floor(Math.random()* nb)+1;
}     

tirage = new Array;
nombres="";
nb= 2;
for (i=1 ;i<nb ;i++)
{
nb_aleatoire(10);
tirage[i]= nombre;

for (t=1 ; t<i ;t++){
	if (tirage[t]==nombre) 
	{
		i=i-1;
	} 
}
}
             
for (i=1 ;i<nb ;i++)
{
var nombres=tirage[i];
console.log(nombres+"  ");
document.getElementById("img"+nombres).style.visibility="visible";

}   

}


function verification(){

var correct=0;
    
if (document.getElementById('3').checked) {
 correct= correct + 1;   
}

if (document.getElementById('verte').checked) {
 correct= correct + 1;
}
  
if (document.getElementById('2 dauphins').checked) {
 correct= correct + 1; 
}

    
    if (document.getElementById('19').checked) {
 correct= correct + 1;
}
    if (document.getElementById('roux').checked) {
 correct= correct + 1;
}
    if (document.getElementById('2').checked) {
 correct= correct + 1;
}
 
   
    
    if (document.getElementById('12h40').checked) {
 correct= correct + 1;
}
    if (document.getElementById('4').checked) {
 correct= correct + 1;
}
    if (document.getElementById('blanches').checked) {
 correct= correct + 1;
}
   
    
    if (document.getElementById('3fenêtres').checked) {
 correct= correct + 1;
}
    if (document.getElementById('rose').checked) {
 correct= correct + 1;
}
      

    
    
    if (document.getElementById('4étapes').checked) {
 correct= correct + 1;
}
    if (document.getElementById('6').checked) {
 correct= correct + 1;
}

    
    
    if (document.getElementById('7tentacules').checked) {
 correct= correct + 1;
}
    if (document.getElementById('7minerais').checked) {
 correct= correct + 1;
}
    if (document.getElementById('unetortue').checked) {
 correct= correct + 1;
}
  
    
    
    if (document.getElementById('gustav').checked) {
 correct= correct + 1;
}
    if (document.getElementById('3coussins').checked) {
 correct= correct + 1;
}

    
    
    if (document.getElementById('3rayures').checked) {
 correct= correct + 1;
}
 if (document.getElementById('5tableaux').checked) {
 correct= correct + 1;
}
    if (document.getElementById('gris').checked) {
 correct= correct + 1;
}

    
    
    if (document.getElementById('6personnes').checked) {
 correct= correct + 1;
}
    if (document.getElementById('orange').checked) {
 correct= correct + 1;
}
  
    
    
    if (document.getElementById('tennis').checked) {
 correct= correct + 1;
}
    if (document.getElementById('balledematch').checked) {
 correct= correct + 1;
}
    if (document.getElementById('4').checked) {
 correct= correct + 1;
}
    if (document.getElementById('30').checked) {
 correct= correct + 1;
}
         
document.getElementById("pts").innerHTML= correct; 

}



















