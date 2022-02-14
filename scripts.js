let username = "";

enterChat();

function enterChat() {
    username = prompt("Nome de usuário: ");

    const nameObject = {
        name: username
    };
   
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", nameObject);

    promise.then(usernameIsValid);
    promise.catch(usernameIsInvalid);
}

function usernameIsValid(success){

    setInterval(keepUserOn,5000);

    setInterval(getMessages,3000);
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

function getMessages() {

    const messages = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");

    messages.then(gotMessagesSuccesfully);
}

function gotMessagesSuccesfully(success) {
    
    const messagesLocation = document.querySelector("main");

    messagesLocation.innerHTML = "";

    const messagesData = success.data;

}