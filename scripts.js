let username = "";

enterChat();

function enterChat() {
    username = prompt("Nome de usuário: ");

    const nameObject = {
        name: username
    };
   
    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", nameObject);

    promisse.then(usernameIsValid);
    promisse.catch(usernameIsInvalid);
}

function usernameIsValid(success){

    setInterval(keepUserOn,5000);
}

function usernameIsInvalid(error){

    const errorCode = error.response.status;

    if (errorCode === 400){
        alert("Já existe um usuário com esse nome. Aperte OK para escolher um novo nome.");
        enterChat();
    } else {
        alert("A página está indisponível. Tente novamente mais tarde.");
    }
}

function keepUserOn() {
    const nameObject = {
        name: username
    };

    axios.post("https://mock-api.driven.com.br/api/v4/uol/status", nameObject)
}