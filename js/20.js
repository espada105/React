function moveMonth(date, moveMonth){
    const curMonth = date.getMonth();

    const resDate = new Date(date);
    resDate.setMonth(curMonth + moveMonth);
    return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A: ", dateA.toISOString());

const dateB = moveMonth(dateA, 1);
console.log("B: ", dateB.toISOString());

const dateC = moveMonth(dateA, -1);
console.log("C: ", dateC.toISOString());