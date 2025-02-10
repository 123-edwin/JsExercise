function timeConversion(s) {
    // Write your code here
    let hour = parseInt(s.slice(0,2));
    let minuteseconds = s.slice(2,8);
    let ref = s.slice(8);
    let newHour = 0;

    if(hour == '12' && ref == 'AM'){
        hour = 0;
        return hour.toString().padStart(2,'0')+minuteseconds
    } 
    if (hour != 12 && ref == 'PM'){
        newHour = hour + 12;
        return newHour.toString().padStart(2,'0')+minuteseconds
    } else {
        return hour.toString().padStart(2,'0')+minuteseconds
    } 
}

let s = '06:40:03AM'
console.log(timeConversion(s));