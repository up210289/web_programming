const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');
let alarmDate;

document.addEventListener('DOMContentLoaded', ()=>
{
    if(localStorage.getItem('alarmita') !== null )
    {
        const input = formAlarm.children[0];

        localStorage.getItem('alarmita');
        const alarmaFormato = new Date(localStorage.getItem('alarmita'));
        const alarmYear = alarmaFormato.getFullYear();
        const alarmMonth = alarmaFormato.getMonth();
        const alarmDay = alarmaFormato.getDate();
        const alarmHour = alarmaFormato.getHours();
        const alarmMinute = alarmaFormato.getMinutes();

        input.value = `${alarmYear}-${formatNumber(alarmMonth)}-${formatNumber(alarmDay)}T${formatNumber(alarmHour)}:${alarmMinute}`;
    }
    getCurrentTime();
});

setInterval(() =>
{
    getCurrentTime();
}, 1000);

formAlarm.addEventListener('submit', (e) => 
{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get('time');

    if (value === null || value === "")
    {
        alert("Establesca una fecha");
        return;
    }

    const currentDate = new Date();
    const setAlarm = new Date(value);

    if (isValidDate(currentDate, setAlarm)) {
        alert('nel!!!')
        return;
    }

    localStorage.setItem('alarmita' , setAlarm.toString);


});




function getCurrentTime()
{
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    console.log(alarmDate);
    
    hours.innerText = formatNumber(currentHours);
    minutes.innerText = formatNumber(currentMinutes);
    seconds.innerText = formatNumber(currentSeconds);
}

function isValidDate(currentDate, setAlarm)
{
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();


    const alarmYear = setAlarm.getFullYear();
    const alarmMonth = setAlarm.getMonth();
    const alarmDay = setAlarm.getDate();
    const alarmHour = setAlarm.getHours();
    const alarmMinute = setAlarm.getMinutes();

    const añoAlarmaEsMenor = alarmYear < currentYear;
    const añoAlarmaIgual = alarmYear === currentYear;
    const mesAlarmaEsMenor = alarmMonth < currentMonth;
    const mesAlarmaIgual = alarmMonth === currentMonth;
    const diaAlarmaEsMenor = alarmDate < currentDay;
    const diaAlarmaIgual = alarmDay === alarmDay;
    const horaAlarmaEsMenor = alarmHour < currentHour;
    const horaAlarmaIgual = alarmHour === currentHour;
    const minutosAlarmaEsMenorIgual = alarmMinute <= currentMinute;
    
    return ( 
        añoAlarmaEsMenor || 
        añoAlarmaIgual && mesAlarmaEsMenor || 
        añoAlarmaIgual && mesAlarmaIgual && diaAlarmaEsMenor || 
        añoAlarmaIgual && mesAlarmaIgual && diaAlarmaIgual && horaAlarmaEsMenor ||
        añoAlarmaIgual && mesAlarmaIgual && diaAlarmaIgual && horaAlarmaIgual && minutosAlarmaEsMenorIgual
     );
   
}
function formatNumber(value)
{
    if(value < 10)
    {
        return '0' + value;
    }else
    {
        return value;
    }
}


