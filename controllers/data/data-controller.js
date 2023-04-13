import * as dataDao from "./data-dao.js"

const dataController = (app) => {
 app.post('/api/logs', createInteraction);
 app.get('/api/logs', findInteractions);
}


const createInteraction = async (req, res) => {
  console.log(req.body);
  const newInteraction = req.body;
  newInteraction.time = new Date();
  const insertedInteraction = await dataDao
                             .createData(newInteraction);
  res.json(insertedInteraction);
    console.log(insertedInteraction);
}


const findInteractions = async (req, res) => {
   const data = await dataDao.findData()
   res.json(data);
   
}

export default dataController