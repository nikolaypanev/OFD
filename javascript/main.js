const companies = [
        {name: "Company One", category: "Finance", start: 1981, end: 2004},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
      ];
    
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// basic for loop
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// forEach loop
companies.forEach(function(company) {
    console.log(company);
});

// filter - filter all ages less than 18 from the array
// solution with a for loop
let canDrink = []
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 18) {
        canDrink.push(ages[i])
    }
}

// direct filter: get 18 and older
const canDrink = ages.filter(function(age) {
    if(age >= 18) {
        return true;
    }
})

// arrow function
const canDrink = ages.filter(age => age >= 18);

// filter retail companies

const retailCompanies = companies.filter(function(company) {
    if (company.category === 'Retail') {
        return true;
    }
})

const retailCompanies = companies.filter(company => category === 'retail')

console.log(retailCompanies);



console.log(canDrink)

//

