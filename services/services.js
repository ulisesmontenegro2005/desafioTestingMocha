class services {
    generateId () {
        const arr = []

        for (let i = 0; i < 5; i++) {
            let n = Math.floor(Math.random() * 10)
            arr.push(n)
        }

        return `${Date.now()}-${arr.join('')}`
    }
}

export default services