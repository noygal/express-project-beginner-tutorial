const tasks = []

const router = require('express').Router()

router.get('/', (req, res) => res.json(tasks))

router.post('/', (req, res) => {
  if (!req.body) return res.status(400).send('Must contain body')
  const { name } = req.body
  if (!name) return res.status(400).send('Task must include name')
  const task = {
    id: Date.now(),
    name,
    done: false
  }
  tasks.push(task)
  res.json(task)
})

module.exports = router
