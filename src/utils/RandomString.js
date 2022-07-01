class RandomString {
    handle(amount) {
        let random = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < amount; i++) {
            random += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return random;
    }
}

module.exports = RandomString