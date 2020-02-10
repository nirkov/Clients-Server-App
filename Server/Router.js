
/**
 * @why_using_express_router
 * In simplest terms, Router is a lightweight version of the express app, 
 * or as Express docs put it, a mini express application.
 * The global express object comes with many more resources to support views
 * and various settings while the router basically provides the routing APIs like
 * .use, .get, .param, and route. A router object represents an isolated instance
 * of middleware and routes and is only capable of performing middleware and routing
 * functions, which makes it perfect for efficiently modularizing your route handling.
 */

const router = require('express').Router();

module.exports = router;
// ===============================================================================================================
//                                               ROUTING - GET 
// ===============================================================================================================

router.get('/', (request, response) => {
  response.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
  
router.get('/user/:username', (request, response)=>{
  
})
  
router.get('/about', (request, response)=>{
  
})
  
router.get('/contact', (request, response)=>{
  
})

// ===============================================================================================================
//                                               ROUTING - SET 
// ===============================================================================================================

