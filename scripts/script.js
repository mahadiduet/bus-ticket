function select(event){
    const elementId = event.target.id;
    
    const className = document.getElementById(elementId);
    if(className.classList.contains('selected')){
        className.classList.remove('selected');
        // Remove seat and decress selected seat and incress available seat    
        const availableSeat = document.getElementById('available-seat');
        var available = availableSeat.innerText;
        available = parseInt(available);
        availableSeat.innerText = available + 1;
        

        const selectesSeat = document.getElementById('selected-seat');
        var selected = selectesSeat.innerText;
        selected = parseInt(selected);
        if(selected <= 4){
            const errorMassage = document.getElementById('error-massage');
            errorMassage.innerText = "";
        }
        selectesSeat.innerText = selected-1;
    }
    else
    {
        const selectesSeat = document.getElementById('selected-seat');
        var selected = selectesSeat.innerText;
        selected = parseInt(selected);
        if(selected <= 3){
        className.classList.add('selected');

        // Remove seat and incress selected seat and decress available seat    
        const availableSeat = document.getElementById('available-seat');
        var available = availableSeat.innerText;
        available = parseInt(available);
        availableSeat.innerText = available - 1;        

        // const selectesSeat = document.getElementById('selected-seat');
        // var selected = selectesSeat.innerText;
        // selected = parseInt(selected);
        selectesSeat.innerText = selected+1;
        }
        else{
            const errorMassage = document.getElementById('error-massage');
            errorMassage.innerText = "Already you are selected maximum seat";
        }
    }
    bookingSeat();
    calculation();
}

function bookingSeat(){
    var bookingllSeat = document.querySelectorAll(".selected");
    const addSeat = document.getElementById('add-booking-seat');
    addSeat.innerText="";
    bookingllSeat.forEach(element => { 
        var i = 0;     
        // console.log(element.innerText);
        const addElement = document.createElement('p');
        addElement.innerHTML = `<div class="flex justify-between">
        <h1>`+element.innerText+`</h1>
        <h1>Business</h1>
        <h1>550</h1>
    </div>`;
        addSeat.appendChild(addElement);
    });
    // console.log(bookingllSeat);
}

function calculation(){
    const selectesSeat = document.getElementById('selected-seat');
    var selected = selectesSeat.innerText;
    selected = parseInt(selected);
    // console.log(available)
    totalPrice = selected * 550;
    const priceElement = document.getElementById('total-price');
    priceElement.innerText = totalPrice;
    // console.log(totalPrice);
    const grandElement = document.getElementById('grand-total');
    grandElement.innerText = totalPrice;
}

function cuponApply(){
    const selectesSeat = document.getElementById('selected-seat');
    var selected = selectesSeat.innerText;
    selected = parseInt(selected);
    // console.log(selected);
    const cuponCode = document.getElementById('coupon').value;
    const coupon = cuponCode.toUpperCase();

    // console.log(coupon)
    const selectedSeat = document.getElementById('selected-seat');
    var selecte = selectedSeat.innerText;
    selecte = parseInt(selecte);
    // // console.log(available)
    const totalPrice = selecte * 550;
    

    if(selected === 4){
        if(coupon === 'NEWS15'){
            const grandTotal = totalPrice - ((totalPrice*15)/100);
            const grandElement = document.getElementById('grand-total');
            grandElement.innerText = grandTotal;
        }
        else if(coupon === 'COUPLE20'){
            const grandTotal = totalPrice - ((totalPrice*20)/100);
            const grandElement = document.getElementById('grand-total');
            grandElement.innerText = grandTotal;
        }
        else{
            const error = document.getElementById('error-coupon');
            error.innerText = "Coupon invalid";
        }
    }
    else{
        const error = document.getElementById('error-coupon');
        error.innerText = "You are not buy four seat.";
    }
}

function next(){
    console.log()
}