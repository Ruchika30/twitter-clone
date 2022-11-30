import { rest } from 'msw'


export const handlers = [
    rest.get('/getNewsFeed', (req, res, ctx) =>
        res(
            ctx.status(200),
            ctx.json([
                { superheroName: 'Batman' },
                { superheroName: 'Superman' },
                { superheroName: 'Flash' },
            ]),
        ),
    ),

]
