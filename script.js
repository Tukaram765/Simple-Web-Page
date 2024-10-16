document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


  
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('d-none'); 


    this.reset();
});
