import { BudgetSchema } from "./budget";
const budget = {
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
function generateTable(b: Array<BudgetSchema>): void {
    const p = document.getElementById("list") as HTMLParagraphElement;
    p.innerHTML = "";
    for (let i = 0; i < b.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `${b[i].title} - ${b[i].budget}`;
        p.appendChild(div);
    }
}
generateTable(budget.myBudget);
// eslint-disable-next-line no-unused-vars
function aZ(): void {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.title > b.title ? 1 : -1));
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function zA(): void {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.title < b.title ? 1 : -1));
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function biggerBudget(): void {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.budget < b.budget ? 1 : -1));
    generateTable(newArray);
}
// eslint-disable-next-line no-unused-vars
function smallerBudget(): void {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.budget > b.budget ? 1 : -1));
    generateTable(newArray);
}
