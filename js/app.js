function vider(texte)
{
    if(texte=="Votre poids en Kg" || texte=="Votre taille en cm")
        return "";
    else
        return texte;
}

var indicateur = 0;
function calculer()
{
    var taille; var poids; var imc; 

    taille = document.getElementById("zone_taille").value;
    poids = document.getElementById("zone_poids").value;

    if(indicateur != 0)
    document.getElementById("img" + indicateur).style.visibility="hidden";

    if(!isNaN(parseInt(taille)) && taille>120 && taille<250)
    {
        if(!isNaN(parseInt(poids)) && poids>20 && poids<500)
        {
            imc = (poids * 10000) / (taille*taille);
            //alert(imc);
            imc = Math.round(imc);
            //alert(imc);
            indicateur = imc-17;
            document.getElementById("img" + indicateur).style.visibility="visible";
            document.getElementById("res_imc").innerText=imc;
        }
        else
        {
            alert("Le poids entré n'est pas correct !\r\nVeuillez réactualiser par la touche F5");
        }
    }
    else
    {
    alert("La taille saisie n'est pas correcte !\r\nVeuillez réactualiser par la touche F5");
    }
}




