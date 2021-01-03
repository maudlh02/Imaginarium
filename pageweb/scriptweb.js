var counter = 5;
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





function verification(){
    
	
    var bonnereponse1=document.question.Question1.value;
    var bonnereponse2=document.question.Question2.value;
    var bonnereponse3=document.question.Question3.value;
    var bonnereponse4=document.question.Question4.value;
    var bonnereponse5=document.question.Question5.value;
    var bonnereponse6=document.question.Question6.value;
    var bonnereponse7=document.question.Question7.value;
    var bonnereponse8=document.question.Question8.value;
    var bonnereponse9=document.question.Question9.value;
    var bonnereponse10=document.question.Question10.value;
    var bonnereponse11=document.question.Question11.value;
    var bonnereponse12=document.question.Question12.value;
    var bonnereponse13=document.question.Question13.value;
    var bonnereponse14=document.question.Question14.value;
    var bonnereponse15=document.question.Question15.value;
    var bonnereponse16=document.question.Question16.value;
    var bonnereponse17=document.question.Question17.value;
    var bonnereponse18=document.question.Question18.value;
    var bonnereponse19=document.question.Question19.value;
    var bonnereponse20=document.question.Question20.value;
    var bonnereponse21=document.question.Question21.value;
    var bonnereponse22=document.question.Question22.value;
    var bonnereponse23=document.question.Question23.value;
    var bonnereponse24=document.question.Question24.value;
    var bonnereponse25=document.question.Question25.value;
    var bonnereponse26=document.question.Question26.value;
    var bonnereponse27=document.question.Question27.value;
    
    
    var correct= 0;

	if (bonnereponse1 == "3") {
		correct = correct + 1;}
    
	if (bonnereponse2 == "verte") {
		correct = correct + 1;}
    
    if (bonnereponse3 == "2 dauphins") {
        correct = correct + 1;}
    
    if (bonnereponse4 == "19"){
        correct = correct + 1}
    
    if (bonnereponse5 == "roux") {
		correct = correct + 1;}
    
	if (bonnereponse6 == "2") {
		correct = correct + 1;}
    
   if (bonnereponse7 == "12h40") {
		correct = correct + 1;}
    
    if (bonnereponse8 == "4") {
		correct = correct + 1;}
    
    if (bonnereponse9 == "blanches") {
		correct = correct + 1;}
    
    if (bonnereponse10 == "3") {
		correct = correct + 1;}
    
    if (bonnereponse11 == "rose") {
		correct = correct + 1;}
    
    if (bonnereponse12 == "5") {
		correct = correct + 1;}
    
    if (bonnereponse13 == "6") {
		correct = correct + 1;}
    
    if (bonnereponse14 == "7") {
		correct = correct + 1;}
    
    if (bonnereponse15 == "7") {
		correct = correct + 1;}
    
    if (bonnereponse16 == "un trident") {
		correct = correct + 1;}
    
    if (bonnereponse17 == "Gustav Klimt") {
		correct = correct + 1;}
    
    if (bonnereponse18 == "4") {
		correct = correct + 1;}
    
    if (bonnereponse19 == "3") {
		correct = correct + 1;}
    
    if (bonnereponse20 == "5") {
		correct = correct + 1;}
    
    if (bonnereponse21 == "gris") {
		correct = correct + 1;}
    
    if (bonnereponse22 == "6") {
		correct = correct + 1;}
    
    if (bonnereponse23 == "orange") {
		correct = correct + 1;}
    
    if (bonnereponse24 == "Tennis") {
		correct = correct + 1;}
    
    if (bonnereponse25 == "Balle de match") {
		correct = correct + 1;}
    
    if (bonnereponse26 == "4") {
		correct = correct + 1;}
    
    if (bonnereponse27 == "30") {
		correct = correct + 1;}
    
    
	 document.getElementById("pts").innerHTML= correct ;  
  
}




function valider(){
   document.getElementById('jeu_questions').innerHTML=document.getElementById("jeu_photo").innerHTML;
    
   document.getElementById('jeu_questions').style.display="none"; 
    

    
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
    
 
    
    
   

}




























