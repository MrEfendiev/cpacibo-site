
        window.addEventListener('click', function (event) {




            if (event.target.dataset.action === 'plus') {

                const counterblocksButton = event.target.closest('.blocks__button');
                
                const counter = counterblocksButton.querySelector('[data-counter]');

                counter.innerText = ++counter.innerText;

  
            }

            if (event.target.dataset.action === 'minus') {

                const counterblocksButton = event.target.closest('.blocks__button');
                
                const counter = counterblocksButton.querySelector('[data-counter]');

                if ( parseInt(counter.innerText) > 1 ) {
                    counter.innerText = --counter.innerText;
                } 

 

            }

        })