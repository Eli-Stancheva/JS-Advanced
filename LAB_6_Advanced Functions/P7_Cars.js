function cars(array) {
    let output = {};
    
    const commands = {
        create: (n1, inherits, n2) => (output[n1] = inherits ? Object.create(output[n2]) : {}),
        set: (s, t, fr) => output[s][t] = fr,
        print: n => {
            let entry = [];

            for (const key in output[n]) {
                entry.push(`${key}:${output[n][key]}`)
            }
            console.log(entry.join(','));
        }
    }

    array.forEach(x => {
        let [f, s, t, fr] = x.split(' ');
        commands[f](s, t, fr);
    });
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);