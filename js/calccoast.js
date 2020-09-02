$(document).ready(function () {
    // business
    let plus1 = document.querySelector('#plus1');
    let min1 = document.querySelector('#min1');
    let counter1 = document.querySelector('#counter1');
    let duration1 = document.getElementById("duration1");
    let counter1Val = +(counter1.getAttribute("counter"));
    let myOptions1 = document.querySelector('#duration1Parent > .select > .options');
    let result1 = document.querySelector('#result1');
    let incVal1 = counter1Val;
    let total1 = 0;

    // enterpirse
    let plus2 = document.querySelector('#plus2');
    let min2 = document.querySelector('#min2');
    let counter2 = document.querySelector('#counter2');
    let duration2 = document.getElementById("duration2");
    let counter2Val = +(counter2.getAttribute("counter"));
    let myOptions2 = document.querySelector('#duration2Parent > .select > .options');
    let result2 = document.querySelector('#result2');
    let incVal2 = counter1Val;
    let total2 = 0;

    // g suit
    let plus3 = document.querySelector('#plus3');
    let min3 = document.querySelector('#min3');
    let counter3 = document.querySelector('#counter3');
    let duration3 = document.getElementById("duration3");
    let counter3Val = +(counter3.getAttribute("counter"));
    let myOptions3 = document.querySelector('#duration3Parent > .select > .options');
    let result3 = document.querySelector('#result3');
    let incVal3 = counter1Val;
    let total3 = 0;


    
    function makeCalculations(plus,min,counter,duration,counterVal,myOptions,result,incVal,total) {

        // at increment and decrement calculate total
        function totalCalc1() {
            total = (+(duration.value)) * counterVal;
            console.log('total = ', total);
            result.innerHTML = total;
        }

        // increment
        function increase() {
            if (incVal >= 1) {
                incVal = ++counterVal;
                counter.setAttribute("counter", (incVal).toString());
                counter.innerHTML = (incVal).toString();
                counterVal = incVal;
            }


            totalCalc1();
        }

        // decrement
        function decrease() {
            if (incVal > 1) {
                incVal = --counterVal;
                counter.setAttribute("counter", (incVal).toString());
                counter.innerHTML = (incVal).toString();
                counterVal = incVal;
            }
            totalCalc1();
        }


// ====================================listeners
        // plus and minuis listners 
        plus.addEventListener('click', increase);
        min.addEventListener('click', decrease);
        // event listner to fix bug of (opttion list listner which is not working)
        let options = myOptions.children;
        for (const option of options) {
            $(option).on('click', function () {
                optionVal = +(this.getAttribute('rel'));
                total = optionVal * counterVal;
                console.log('new total =', total);
                result.innerHTML = total;

            });
        }
    }


    makeCalculations(plus1,min1,counter1,duration1,counter1Val,myOptions1,result1,incVal1,total1);
    makeCalculations(plus2,min2,counter2,duration2,counter2Val,myOptions2,result2,incVal2,total2);
    makeCalculations(plus3,min3,counter3,duration3,counter3Val,myOptions3,result3,incVal3,total3)
});