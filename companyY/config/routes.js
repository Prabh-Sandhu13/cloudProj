/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/companyHome" },
  "/parts541": { view: "pages/homepage" },
  "/parts541/parts": "PartController.getParts541",
  "/parts541/addPart": "PartController.addPart541",
  "/parts541/findPart": "PartController.findPart541",
  "/parts541/findAPart": "PartController.findAPart541",
  "/parts541/partExists": "PartController.partExists541",
  "/parts541/createPart": "PartController.createPart541",
  "/parts541/editPart/:partId": "PartController.editPart541",
  "/parts541/updatePart/:partId": "PartController.updatePart541",
  "/parts541/updatePartOrders": "PartController.updatePartOrders541",
  "POST /viewParts" : 'PartController.viewParts705',
  "/orders705/searchorder" : "PartController.searchorder705",
  "/orders705/fetchorders" : "PartController.listorders705",
  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
