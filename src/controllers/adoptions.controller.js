import { adoptionsService, petsService, usersService } from "../services/index.js"

const getAllAdoptions = async(req,res)=>{
    const result = await adoptionsService.getAll();
    res.send({status:"success",payload:result})
}

const getAdoption = async(req,res)=>{
    const adoptionId = req.params.aid;
    const adoption = await adoptionsService.getBy({_id:adoptionId})
    if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
    res.send({status:"success",payload:adoption})
}

const createAdoption = async(req,res)=>{

    // recibimos el id del usuario y de la mascota
    const {uid,pid} = req.params;

    // Guardamos el usuario buscado por su id
    const user = await usersService.getUserById(uid);

    // Validamos que se haya encontrado un usuario por su id
    if(!user) return res.status(404).send({status:"error", error:"user Not found"});

    // Guardamos la mascota
    const pet = await petsService.getBy({_id:pid});

    // Validamos que se haya encontrado la mascota
    if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});

    // Validamos que la mascota con el id buscado no haya sido ya adoptada
    if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});

    // Si no fue adoptada, la asignamos al usuario
    user.pets.push(pet._id);

    // Actualizamos en base de datos
    await usersService.update(user._id,{pets:user.pets});
    await petsService.update(pet._id,{adopted:true,owner:user._id});

    // Creamos la adopción
    await adoptionsService.create({owner:user._id,pet:pet._id});

    res.send({status:"success",message:"Pet adopted"});
}

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption
}