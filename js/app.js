const generator = document.getElementById('ticket-generator');

generator.addEventListener(
    'click',

    function () {

        const Km = parseInt(document.getElementById('km').value);
        const age = document.getElementById('age').value;
        const allPrice = Km * 0.21;
        let price;


        if (!isNaN(Km)) {

            if (age < 18) {

                price = (allPrice * .2);

            } else if (age >= 65) {

                price = (allPrice * .4);

            } else {

                price = allPrice;

            }

        } else {
            alert('valore dei km non valido: inserire un numero')
        }

        
        price = price.toFixed(2);

        //RISULTATO
        document.getElementById('ticket-result').innerHTML = `Costo biglietto: ${price} euro`;

    })