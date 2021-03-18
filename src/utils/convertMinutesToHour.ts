export default function convertMinutesToHours(time:number):string{
    var quotient = Math.floor(time/60);
    var remainder = time % 60;
    let timeInHour = ""
    if (remainder < 10)
        timeInHour = `${quotient}:0${remainder}`
    else
        timeInHour = `${quotient}:${remainder}`


    return timeInHour
}