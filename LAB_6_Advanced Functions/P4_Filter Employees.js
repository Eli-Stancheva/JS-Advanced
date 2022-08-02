function filterEmployees(data, criteria) {
    data = JSON.parse(data);

    let key = criteria.split('-')[0];
    let value = criteria.split('-')[1];

    const filter = data.filter(e => e[key] === value);

    let counter = 0;
    filter.forEach(x => console.log(`${counter++}. ${x.first_name} ${x.last_name} - ${x.email}`));
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');