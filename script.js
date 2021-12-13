var rIndex,table = document.getElementById("table");

function checkEmptyInput()
{
    var isEmpty = false;
    titre =  document.getElementById("titre").value;
    auteur = document.getElementById("auteur").value;
    prix =   document.getElementById("prix").value;
    date =   document.getElementById("date").value;
    lang =   document.getElementById("lang").value;        
    typedouvrage = document.querySelector('input[name="typeO"]:checked').value;



    if(titre === ""){
        alert("'TITRE'  can not be empty");
        isEmpty = true;
    }
    else if(auteur === ""){
        alert("'AUTEUR'  can not be empty");
        isEmpty = true;
    }
    else if(prix === ""){
        alert("'PRIX'  can not be empty");
        isEmpty = true;
    }
    else if(date === ""){
        alert("'DATE'  can not be empty");
        isEmpty = true;
    }
    else if(lang === ""){
        alert("'LANGUE'  can not be empty");
        isEmpty = true;
    }
    else if(typedouvrage === ""){
        alert("'TYPE'  can not be empty");
        isEmpty = true;
    }
    return isEmpty;
}
function AddTableRow()
{
    if(!checkEmptyInput()){
   var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    titre =  document.getElementById("titre").value;
    auteur = document.getElementById("auteur").value;
    prix =   document.getElementById("prix").value;
    date =   document.getElementById("date").value;
    lang =   document.getElementById("lang").value;        
    typedouvrage = document.querySelector('input[name="typeO"]:checked').value;

    cell1.innerHTML= titre;
    cell2.innerHTML= auteur;
    cell3.innerHTML= prix;
    cell4.innerHTML= date;
    cell5.innerHTML= lang;
    cell6.innerHTML= typedouvrage;

    SelectRowtoInput();}

}

function SelectRowtoInput()
{

    for ( var i=0; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex= this.rowIndex;
            
            document.getElementById("titre").value=this.cells[0].innerHTML;
            document.getElementById("auteur").value=this.cells[1].innerHTML;
            document.getElementById("prix").value=this.cells[2].innerHTML;
            document.getElementById("date").value=this.cells[3].innerHTML;
            document.getElementById("lang").value=this.cells[4].innerHTML;
            document.querySelector('input[name="typeO"]:checked').value=this.cells[5].innerHTML;
        }
    }

}
SelectRowtoInput();

function EditTableSelectedRow(){

    var titre = document.getElementById("titre").value;
    var auteur= document.getElementById("auteur").value;
    var prix = document.getElementById("prix").value;
    var date= document.getElementById("date").value;
    var lang =document.getElementById("lang").value;
    var typedouvrage =document.querySelector('input[name="typeO"]:checked').value;


    if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML=titre;
table.rows[rIndex].cells[1].innerHTML=auteur;
table.rows[rIndex].cells[2].innerHTML=prix;
table.rows[rIndex].cells[3].innerHTML=date;
table.rows[rIndex].cells[4].innerHTML=lang;
table.rows[rIndex].cells[5].innerHTML=typedouvrage;
}

}

function DelTableSelectdRow()
{
    table.deleteRow(rIndex);
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("lang").value = "";
    document.querySelector('input[name="typeO"]:checked').value = "";
}


