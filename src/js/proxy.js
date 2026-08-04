const car = {
    model: "BMW",
    speed: 230,
    weight: 1.3
}

const prox = new Proxy(car, {
    get(target, prop) {
        if(prop === "model")
            console.log("You don't recognise the model");
        else
            return target[prop]
    },
    set(target, prop, value) {
        const carProx = ['speed', 'weight', 'color']
        if(carProx.includes(prop))
            throw Error('The value cannot be set')

        console.log(`Attempt to set a ${prop} with a ${value}`);
        if(prop === 'speed' && value < 10){
            console.log(`It's not possible`);
            return undefined
        }
        target[prop] = value
    },
    has(target, prop){
        if(prop === 'color')
            return true
        else if(prop in target)
            return true
        else
            return false
    },
    deleteProperty(target, prop){
        if(prop !== 'model')
            delete target[prop]
        else
            throw Error('The model cannot be removed')
    }
})

const user = {
    first: 'John',
    last: "Doe",
    age: 25
}

const person = new Proxy(user, {
    get(target, prop){
        if(prop in target)
            return target[prop]
        else {
            return prop.split('_').map(part => {
                return target[part]
            }).join(' ')
        }
    }
})

console.log(person.first_last);
