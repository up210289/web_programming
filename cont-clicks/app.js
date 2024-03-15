let containerClicks = document.getElementById('container-clicks');

let btnIncrement = document.querySelector('.btn-primary');
let btnDecrement = document.querySelector('.btn-secondary');
let btnReset = document.querySelector('.btn-reset');

let count = 0;

document.addEventListener('DOMContentLoaded', () => 
{
    containerClicks.innerText = count;
    btnIncrement.addEventListener("click", () =>
    {
        count++;
        containerClicks.innerText = count;
    }
    );

    btnDecrement.addEventListener("click", () =>
    {
        if(count > 0)
        {
            count--;
        containerClicks.innerText = count;
        }else
        {
            alert("El contador es 0");
        }
    }
    );

    btnReset.addEventListener("click", () =>
    {
        count = 0;
        containerClicks.innerText = count;
    }
    );
});

console.log(btnIncrement);


