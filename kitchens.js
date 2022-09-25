
        window.addEventListener('click', function (event) {

            function init() {


                const button = document.querySelector('.burgers__catalog');
                const GotoСart = document.querySelector('.addCart__block');
                const addCard = document.querySelector('.add__cart')
            
                // const counterblocksButton = event.target.closest('.blocks__button');
                // const counter = counterblocksButton.querySelector('[data-counter]');
            
            
                const itemclick = (item) => {
                
                    addCard.style.display = 'block';
                }
            
            
                
            
                const btnClick = (btn) => {
                    btn.style.display = 'none';
                    GotoСart.style.display = 'block';
                    
                }
            
                button.addEventListener('click', (event) => {
            
                    if (event.target.classList.contains('add__cart')) {
            
                        btnClick(event.target);
                    
                    } else {
                        // console.log('CLAD');
                    }
                    
                })
            
               
            }
            
            init()
            
        



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


   


        const cartWrapper = document.querySelector('.burgers-cart__body');

        window.addEventListener('click', function (event) {


            if  (event.target.hasAttribute('data-cart')) {


               const card = event.target.closest('.burgers__blocks')


                const productInfo = {
                    id: card.dataset.id, 
                    imgSrc: card.querySelector('.blocks__img').getAttribute('src '),
                    title: card.querySelector('.blocks__title').innerText,
                    itemsInbox: card.querySelector('[data-items-in-box]').innerText,
                    itemsInbox: card.querySelector('[data-counter]').innerText,
                    price: card.querySelector('.items__control-one').innerText,


                };

                const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

                console.log(itemInCart);

                if (itemInCart) {
                    const counterElement = itemInCart.querySelector('[data-counter]');
                    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
                } else {




                const cartItemHTML = `<div class="cart__blocks">
                <img class="cart__img" src="images/0000_Chickenburger_BB_1500x1500_min.webp" alt="">
                <p class="cart__title">${productInfo.title}</p>
                <div class="blocks__button">
                    <div class="cart__control-minus" data-action="minus">-</div>
                    <div class="cart__control-one" data-counter>${productInfo.price}</div>
                    <div class="cart__control-plus" data-action="plus">+</div>
                </div>
                <p class="cart__price">69 руб</p>

            </div>`;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
       
        }


            }
         
        
        })

            
//     function viewDiv(){
//   document.getElementById("block").style.display = "none";
// };



