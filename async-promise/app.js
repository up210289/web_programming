const btn = document.getElementById('btn');
const container = document.getElementById("container-users");

btn.addEventListener('click', () =>{
    container.innerHTML = "";
    getUsers((users) => {
        const ul = document.createElement('ul');


        for (let i = 0; i < users.length; i++) 
        {
            const li = document.createElement('li');
            const btnli = document.createElement('button');
            btnli.innerText = 'Get User Info';

            btnli.addEventListener('click', () =>{
                const id = users[i].id;
                
                getInfo(id, (info) => {
                    const ol = document.createElement('ol');
                    ol.innerHTML = `
                        <li>${info.fullname}</li>
                        <li>${info.birthday}</li>
                    `;

                    li.appendChild(ol);
                });
            })


            li.innerText = users[i].name;
            li.appendChild(btnli);

            
            ul.appendChild(li);

        }

        container.appendChild(ul);
    })
});

function getUsers(callback)
{
    const time = ((Math.floor(Math.random()   *   2) + 1) * 1000);
    setTimeout(() =>{
        const users = [
            {id: 1,name: "Leon", years: 21},
            {id: 2,name: "Gabriel", years: 20}
        ];
        callback(users);
    }, time);
}

function getInfo(id, callback)
{
    const time = ((Math.floor(Math.random()   *   2) + 1) * 1000);

    setTimeout(() =>{
        const userInfo = [
            {id: 1,idUser: 2,fullname: "Gabito Ballesteros", birthday: "2003-09-02"},
            {id: 2,idUser: 1,fullname: "Leonardo Milan", birthday: "2003-11-17"}
        ];

        const userFindInfo = userInfo.find(user =>{
            return user.idUser === id;
        })

        callback(userFindInfo);
    }, time);
}