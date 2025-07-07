/*

4. Print Stars and Stop at a Condition

* * *

(Print only 3 stars out of 5)

*/

    let star = '';

    for(let i=1;i<=5;i++){
        if(i<=3){
            break
        }
        star+='*';
    }

    console.log(star);