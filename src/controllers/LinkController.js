const RandomString = require('../utils/RandomString')
const knex = require('../database');

class LinkController {
    async show(request, response) {
        const { token } = request.params

        const data = await knex('links')
            .select('link')
            .where('token', token)
            .first()
        
        if (!data) {
            return response.status(404).json({
                error: 'Link not found'
            })
        }

        const { link } = data
        
        return response.redirect(link)
    }

    async create(request, response) {
        const { link } = request.body
        let amount = 1
        let retries = 0;
        
        do {
            const token = new RandomString().handle(amount)

            const data = await knex('links')
                .select('*')
                .where('token', token)
                .first()

            if (retries >= 10) {
                amount++
                retries = 0
            }

            if (data) {
                retries++
                continue;
            }

            await knex('links').insert({link, token})

            break;
        } while(true)

        return response.status(201).json()
    }
}

module.exports = LinkController