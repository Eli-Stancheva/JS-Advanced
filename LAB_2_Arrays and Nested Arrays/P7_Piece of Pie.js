function pie(array, firstTarger, secondTarget) {
    let firstTargetIndex = array.indexOf(firstTarger);
    let secondTargetIndex = array.indexOf(secondTarget);

    return array.slice(firstTargetIndex, secondTargetIndex + 1);
}

console.log(pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

pie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);