const {Product, Category} = require('../models')



function show_all_products(req,res){
    let product = Product.findAll({
        include:Category
    })
    .then((prod)=>{
        res.json(prod)}).catch((err)=>{
            res.status(500).json({eror:err.message})
        })
}

function show_one_product(req,res){
    const {id} = req.params
    let product = Product.findOne({
        where:{id},
        include:Category
    })
    .then((prod)=>{
        res.json(prod)}).catch((err)=>{
            res.status(500).json({eror:err.message})
        })
}

function update_product(req,res){
    const {id} = req.body
    const {name, price, description, categoryId} = req.body
    let product = Product.update(
        {name, price, description, categoryId},
        
        {
        where:{id},

        include:Category
    })
    .then((prod)=>{
        res.json({status:"updatet"})}).catch((err)=>{
            res.status(500).json({eror:err.message})
        })
}

function create_product(req,res){
  
  const { name, description, price, categoryId } = req.body;
  let product = Product.create(

  { name, description, price, categoryId },
  {include:Category}) 
  
  .then((prod)=>{
   res.json(prod)}).catch((err)=>{
       res.status(500).json({eror:err.message})
   })
}

function delete_product (req, res) {
    const { id } = req.body;
    let product =  Product.destroy(
        { where: { id } })
        .then((prod)=>{
            res.json({ status: 'deleted' })}).catch((err)=>{
                res.status(500).json({eror:err.message})
            })
            
         }





module.exports = {
    show_all_products, show_one_product, update_product, create_product, delete_product
}