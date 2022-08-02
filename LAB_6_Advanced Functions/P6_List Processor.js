function processor(array) {
    let output = [];

    let objCommands = {
            add: s => output.push(s),
            remove: s => (output = output.filter(a => a !== s)),
            print: () => console.log(output.join(','))
    }

    array.forEach(element => {
        let[command, string] = element.split(' ');
        objCommands[command](string);
    });

}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])