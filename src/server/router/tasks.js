const tasks = []

const router = require('express').Router()

router.get('/', (req, res) => res.json(tasks))

router.post('/', (req, res) => {
  if (!req.body) return res.status(400).send('Must contain body')
  const { name } = req.body
  if (!name) return res.status(400).send('Task must include name')
  const task = {
    id: Date.now().toString(),
    name,
    done: false
  }
  tasks.push(task)
  res.status(201).json(task)
})

router.param('taskId', (req, res, next, taskId) => {
  const taskIndex = tasks.findIndex(({ id }) => taskId === id)
  if (taskIndex < 0) return res.status(404).send('Task not found')
  req.taskIndex = taskIndex
  next()
})

router.get('/:taskId', (req, res) => res.json(tasks[req.taskIndex]))

router.patch('/:taskId', (req, res) => {
  if (typeof req.body.name === 'string') tasks[req.taskIndex].name = req.body.name
  if (typeof req.body.done === 'boolean') tasks[req.taskIndex].done = req.body.done
  res.json(tasks[req.taskIndex])
})

router.delete('/:taskId', (req, res) => {
  tasks.splice(req.taskIndex, 1)
  res.sendStatus(204)
})

module.exports = router
