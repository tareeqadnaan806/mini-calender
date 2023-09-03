var d = new window.Date()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[d.getMonth()]
const date = d.getDate()
const year = d.getFullYear()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = days[d.getDay()]

document.getElementById("Month").innerText = month
document.getElementById("Day").innerText = day
document.getElementById("Date").innerText = date
document.getElementById("Year").innerText = year
