const ht=document.getElementById("heg")
const wt=document.getElementById("weg")
const cal = document.getElementById("calc")
const resul = document.getElementById("res")


function calcu(){
    let height=parseInt(ht.value)
    let weight = parseInt(wt.value)

    let bmi =(weight/ (height / 100) ** 2);
    let category=""
    if (bmi<18.5){
        category="Underweight";
    }else if(bmi<25){
        category="Normal weight";
    }else if(bmi<30){
        category="Overweight";
    }else {
        category="Obese";
    }

    resul.innerText=parseFloat(bmi)+" "+category
}

cal.addEventListener("click",calcu)