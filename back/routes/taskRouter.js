const Router = require ('express')
const router = new Router()
const TypeController = require('../controllers/taskController')
const checkrole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')



router.delete('/',authMiddleware, TypeController.delete)//на ввод айди и он удалит к хренам этот чертов план
router.post('/',authMiddleware, TypeController.create)// на ввод  {year_of_plan, goals_of_educational_activity,target_priorities_1to4,target_priorities_5to9,target_priorities_10to11,tasks }
router.get('/',authMiddleware,TypeController.getALL)// вообще ничего на ввод нинада
router.post('/id',authMiddleware, TypeController.getONE)

module.exports = router