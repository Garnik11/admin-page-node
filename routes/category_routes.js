
const express = require('express');
const categoryRouter = express.Router();

const category  = require('../controllers/category_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');

categoryRouter.get("/categories",category.show_all_categories )
categoryRouter.get("/showcategory/:id",category.show_one_category )
categoryRouter.post("/newcategory",authenticateToken,category.create_category )
categoryRouter.delete("/delcategory",authenticateToken,category.delete_Category )
categoryRouter.put("/updatecategory",authenticateToken,category.update_Category )


module.exports = categoryRouter
