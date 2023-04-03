import data from "./data.js";
let interactions = data;

const createInteraction = (req, res) => {
  const newInteraction = req.body;
    newInteraction._id = (new Date()).getTime() + '';
    newInteraction.time = new Date() + "";
  interactions.push(newInteraction);
  res.json(newInteraction);
}

const findInteractions = (req, res) =>
    res.json(interactions);
   
    
export default (app) => {
 app.post('/api/logs', createInteraction);
 app.get('/api/logs', findInteractions);
}
