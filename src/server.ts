import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
  }

  console.log(`Server listening at - v0.0.1 - ${address}`)
})

console.log('aqui')
// "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": "explicit"
//   },

const alo = (aqui) => {
  console.log('alo')
}

alo(1)
