const { use } = require("express/lib/application");
const {Family} = require('../models/model');
const {Student} = require('../models/model');
const ApiError = require('../errors/ApiError');
const { type } = require("express/lib/response");




class familyController {
    async create(req, res) {
        const {family_status,material_condition,educationFather,educationMother,fatherStat,motherStat} = req.body
        const family = await Family.create({family_status,material_condition,educationFather,educationMother,fatherStat,motherStat})
        return res.json(family)
    }



    async getALL(req,res) 
    {const types = await Family.findAll()
        return res.json(types)

        
    }

    async familyOfStudentEdit(requestFamily,responceFamily,familyController) 
    {const {id,familyStatus,materialCondition,educationMother,educationFather,statusFather,statusMother }= requestFamily.body
    if(!id){
        return familyController(ApiError.badrequest('отсутствует айди'))
    }
    let familyOfThisStudent = await Family.findOne({where:{id}})
    familyStatus=familyStatus ||familyOfThisStudent.familyStatus
    materialCondition=materialCondition||   familyOfThisStudent.materialCondition
    educationMother=educationMother|| familyOfThisStudent.educationMother
    educationFather=educationFather|| familyOfThisStudent.educationFather
    statusFather=statusFather||familyOfThisStudent.statusFather
    statusMother=statusMother||familyOfThisStudent.statusMother
    
    if(!familyOfThisStudent) return familyController(ApiError.badrequest('событие не найдено'))
    await Family.update({familyStatus,materialCondition,educationMother,educationFather,statusFather,statusMother},
      {
        where: {id}
      });
        let showFamily = await Event.findOne({where:{id}})     
        return responceFamily.json(showFamily)
    }





    async getONE(req,res) 
    {let {id}= req.body
    //const {id} = req.params
        const device = await Family.findOne(
            {
                where: {id},
               // include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }








    async getChilds(req,res,next) {
        let {family_id,}= req.body
        let childs;
        if(family_id ){
            childs= await Student.findAndCountAll({where: {family_id}})
        }
        else {
            return next(ApiError.badrequest('поле семьи пустое'))
        }
        return res.json(childs)
    }

 async deletePusto(req,res,next) 
    {let id, family_id;
        let stud;
       let fam = Family.max({id})
       schetchik= fam.id;
        where(schetchik>0) 
        {id=schetchik;
        family_id= id;
 
        stud=  Student.findOne({where: {family_id} })
        if(!stud)
        Family.destroy({where: {id} })
            
        }
      
        
    }

        
    


    async delete(req,res,next) 
    {let {id}= req.body
    if(id){
        let family_id=id
       let fam = Family.findOne({where: {id} })
        if(fam) {
            let stud = Student.findOne({where: {family_id} })
            if (!stud) 
            Family.destroy({where: {id} })
            else return next(ApiError.badrequest('у этой семьи еще есть дети'))
           // Student.destroy({where: {family_id} })
            return res.json({message: "удаление успешно"})
            //Student.destroy({where: {fam,id==family_id} })
        }
        else return next(ApiError.badrequest('задан некорректный айди'))  
    } 
    else return next(ApiError.badrequest('поля пусты'))     
    }







}
module.exports= new familyController()