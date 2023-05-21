const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .post(addReaction)
  .delete(removeThought);
// TODO
router.route('').delete(removeReaction);

module.exports = router;