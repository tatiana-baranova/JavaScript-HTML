let obj = {
    generator(){
        let i = 0
        let users = ['Alex', 'Bob', 'John', 'Anna']

        return {
            next(){
                if (i == users.length) i = 0
                let user = users[i]
                i++
                return {
                    value: user,
                    done: false
                }
            }
        }
    }

}

let gen = obj.generator()