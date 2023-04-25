let cards = [
    { id: 1, name: 'First task', status: 'todo', priority: 4 },
    { id: 2, name: 'Second task', status: 'in progress', priority: 7 },
    { id: 3, name: 'Third task', status: 'todo', priority: 5 }
]

function routes(app) {
    app.get('/', (req, res) => {
        res.send('hello world')
    })
    app.get('/card', (req, res) => {
        res.send(cards);
    })
    app.post('/card', (req, res) =>{
        const card = req.body;
        cards.push({ id: Math.random().toString(), ...card})
        res.send(cards);
    })
    app.patch('/card/:cardId', (req, res) =>{
        let cardId = req.params.cardId;
        let card= req.body
        cards = cards.map(el => el.id == cardId ? ({ id: el.id, name: el.name, ...card }) : el);
        res.send(cards);
    })
    app.delete('/card/:cardId', (req, res) =>{
        let cardId = req.params.cardId;
        cards = cards.filter(el => el.id != cardId);
        res.send(cards);
    })
}

module.exports = routes;