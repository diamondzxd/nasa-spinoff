const http = require('http')
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const server = http.createServer(app)

async function startServer() {
    await loadPlanetsData()
    console.log('Planets Data Loaded!')

    server.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}...`)
    })
}

startServer();