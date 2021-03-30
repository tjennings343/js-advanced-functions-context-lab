/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr){
    return{
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
    return arr.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return this
}

function hoursWorkedOnDate(workDate){
    let clockIn = this.timeInEvents.find(function(e){
        return e.date === workDate
    })

    let clockOut = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })

    return (clockOut.hour - clockIn.hour) / 100
}

function wagesEarnedOnDate(workDate){
    let wages = hoursWorkedOnDate.call(this, workDate) * this.payPerHour
    return parseFloat(wages.toString())
}


function calculatePayroll(arr){
    let payroll = arr.reduce((p, d) => p + allWagesFor.call(d), 0)
    return payroll
}


function findEmployeeByFirstName(arr, firstName){
    let fName = arr.find(n => n.firstName === firstName)
    return fName
}