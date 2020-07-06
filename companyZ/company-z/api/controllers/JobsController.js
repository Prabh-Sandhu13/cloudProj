/**
 * JobsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  
    list: function(req, res) {
        // axios.get('http://companyx-env.eba-azstb5mp.us-east-1.elasticbeanstalk.com/API735/getJobs')
        // .then(response => {
        //     console.log(response);
        //     // res.send(response.data);
        //     res.view('pages/list', {jobs: response.data})
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        let data = [{"id":"job383","partId":383,"qty":33},
                    {"id":"job383","partId":384,"qty":35},
                    {"id":"job541","partId":541,"qty":55},
                    {"id":"job691","partId":691,"qty":66},
                    {"id":"job705","partId":705,"qty":78},
                    {"id":"job735","partId":735,"qty":77},
                    {"id":"job930","partId":930,"qty":99}];
        res.view('pages/list', {jobs: data});
    }
};
