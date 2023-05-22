const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(createThought);

router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .post(addReaction)
  .delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;