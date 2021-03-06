const LabController = require("../api/controllers/LabController");

module.exports.routes= { 
  "/":{ view:"pages/homepage"},
  "GET /API735/getJobs":"LabController.getJobs",
  "GET /API735/getJobInfo/:jobid/:partid":"LabController.getJobByID",
  "GET /API735/getJobByJobName/:jobid":"LabController.getJobByJobName",
  "POST /API735/createJob":"LabController.createJob",
  "POST /API735/deleteJob":"LabController.deleteJob",
  "POST /API735/createPartsOrder":"LabController.createPartOrder",
  "POST /editJob/:jobid/:partId": "LabController.editJob",
  "POST /updateData/:jobid/:partId": "LabController.updateData",
  "POST /deleteData/:jobId/:partId": "LabController.deleteData",


  "PUT /API735/updateJob":"LabController.updateJob",
  "GET /viewData":"LabController.viewData",
  "GET /addData":{ view:"pages/addData"},
  "GET /searchJob":{ view:"pages/searchJob"},
  "POST /searchOrders":"LabController.searchOrders",
  "POST /addData":"LabController.addData"
};
