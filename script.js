/*NAVBAR*/

const menu = document.querySelector('.menu-hamburguer');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})



window.onload = function() {
    var elementBody = document.querySelector('html');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}

// Acessibilidade

const mainButton = document.getElementById('main-button');
const buttonContainer = document.getElementById('button-container');

mainButton.addEventListener('click', () => {
  buttonContainer.classList.toggle('show');
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    const mailtoLink = `mailto:firerouteoficial00@gmail.com?subject=Contato%20do%20${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem)}%0A%0AResponder%20para:%20${encodeURIComponent(email)}`;
  
    window.location.href = mailtoLink;
  
    document.getElementById('statusMsg').innerText = 'Email enviado com sucesso!';
  });
  


  /*SCROOL MOUSE*/

  $('.nav-menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});