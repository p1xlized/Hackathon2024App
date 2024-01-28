// Convert postgres timestamptz to js Date string
export function timestamptzToISOString(s) {
    // Parse the input string to a Date object
    const dateObject = new Date(s);

    // Extract date components
    const year = dateObject.getFullYear();
    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObject.getDate()).slice(-2);

    // Extract time components
    const hours = ('0' + dateObject.getHours()).slice(-2);
    const minutes = ('0' + dateObject.getMinutes()).slice(-2);
    const seconds = ('0' + dateObject.getSeconds()).slice(-2);
    const milliseconds = ('00' + dateObject.getMilliseconds()).slice(-3);

    // Get the timezone offset in minutes
    const timezoneOffsetMinutes = dateObject.getTimezoneOffset();

    // Calculate timezone offset in hours and minutes
    const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
    const timezoneOffsetMinutesRemainder = Math.abs(timezoneOffsetMinutes) % 60;
    const timezoneSign = timezoneOffsetMinutes < 0 ? '+' : '-';

    // Construct the formatted string
    const formattedString =
        `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${('0' + timezoneOffsetHours).slice(-2)}:${('0' + timezoneOffsetMinutesRemainder).slice(-2)}`;

    return formattedString;
}