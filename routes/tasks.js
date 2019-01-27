const express = require('express');
const router = express.Router();

const data = require('../data/example.json');

// GET task listing.
router.get('/', function(req, res, next) {
  const showPending = req.query.pending === 'true';
  const tasks = data.tasks.filter(function(task) {
    const isPending = !task.isCompleted && task.id != data.activeTaskID;
    return showPending === isPending;
  });
  res.render('tasks', { tasks });
});

module.exports = router;
