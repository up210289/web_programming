console.log("This is working");

function sum(a, b)
{
    return a + b;
}

function suma2numeros(callback)
{
    const resultadoSuma = sum(1,2);

    // Realice anteriormente varias cosas mas!!! ...

    callback(resultadoSuma);
}

function algo(valor)
{
    console.log(valor);
}

suma2numeros(algo);

const button = document.getElementById('btn');
const container = document.getElementById('container')

button.addEventListener('click', function() {
    getUsers()
        .then(function(json){
            const ul = document.createElement('ul');
            for(let i = 0; i < json.usuarios.length; i++)
            {  
                const li = document.createElement('li');
                li.innerText = json.usuarios[i].name;
                ul.appendChild(li);
            }

            console.log(ul)
            container.appendChild(ul);
            
        });
});


function getUsers()
{
    return fetch("/test-callback/info.json")
        .then(function(response){
            return response.json();
        });
        
}


