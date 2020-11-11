var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var budget = {
    myBudget: [
        {
            title: "Phone",
            budget: 35,
        },
        {
            title: "Internet",
            budget: 45,
        },
        {
            title: "Education",
            budget: 80,
        },
        {
            title: "Eat out",
            budget: 25,
        },
        {
            title: "Rent",
            budget: 275,
        },
        {
            title: "Grocery",
            budget: 110,
        },
        {
            title: "Pharmacy",
            budget: 40,
        },
        {
            title: "Donations",
            budget: 10,
        },
    ],
};
function generateTable(b) {
    var p = document.getElementById("list");
    p.innerHTML = "";
    for (var i = 0; i < b.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = b[i].title + " - " + b[i].budget;
        p.appendChild(div);
    }
}
generateTable(budget.myBudget);
// eslint-disable-next-line no-unused-vars
function aZ() {
    var newArray = __spreadArrays(budget.myBudget);
    newArray.sort(function (a, b) { return (a.title > b.title ? 1 : -1); });
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function zA() {
    var newArray = __spreadArrays(budget.myBudget);
    newArray.sort(function (a, b) { return (a.title < b.title ? 1 : -1); });
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function biggerBudget() {
    var newArray = __spreadArrays(budget.myBudget);
    newArray.sort(function (a, b) { return (a.budget < b.budget ? 1 : -1); });
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function smallerBudget() {
    var newArray = __spreadArrays(budget.myBudget);
    newArray.sort(function (a, b) { return (a.budget > b.budget ? 1 : -1); });
    generateTable(newArray);
}
export {};
