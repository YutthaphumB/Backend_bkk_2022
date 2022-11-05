const taskBuilder = require('../controllers/taskController');
const VoteBuilder = require('../controllers/voterController');

module.exports = app => {
    app
        .route('/candidate')
        .get(taskBuilder.list_all_tasks)
        .post(taskBuilder.create_a_task);

    app
        .route('/candidate/:taskId')
        .get(taskBuilder.read_a_task)
        .put(taskBuilder.update_a_task)
        .delete(taskBuilder.delete_a_task);

    app
        .route('/voter')
        .get(VoteBuilder.list_all_tasks)
        .post(VoteBuilder.create_a_task);

    app
        .route('/voter/:taskId')
        .get(VoteBuilder.read_a_task)
        .put(VoteBuilder.update_a_task)
        .delete(VoteBuilder.delete_a_task);
}