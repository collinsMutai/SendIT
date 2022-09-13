import { Router } from "express";
import { getUsers, registerUser } from "../Controller/UsersController";
import { addParcel, deleteParcel, getParcel, getParcels, updateParcel} from "../Controller/ParcelsController";
import { VerifyToken } from "../Middleware/VerifyToken";

const router =Router()


// router.post('/login',loginUser)
router.post('/signup', registerUser)
router.get('/users', getUsers)
// router.get('/homepage',VerifyToken,getHomepage)
// router.get('/check', VerifyToken,checkUser)
router.post('/addparcel', addParcel)
// router.post('/assignnewproject', assignNewProject)
router.delete('/parcels/:id', deleteParcel)
router.get('/parcels',getParcels)
router.get('/parcels/:id', getParcel)
router.put('/parcels/update/:id',updateParcel)

// router.get('/complete/:project_id', completeProjects)


export default router