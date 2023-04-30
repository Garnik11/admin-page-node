const {Product, Category} = require('../models');

function show_all_categories(req,res){
        Category.findAll().then((category)=>{
            res.json(category)
        }).catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

function create_category(req,res){
    const { id } = req.params;
    const { name} = req.body;
    Category.create(
        { name },
        {where:{id}}
    ) 
    .then((category)=>{
     res.json(category)}).catch((err)=>{
         res.status(500).json({eror:err.message})
     })
  }

function show_one_category(req,res){
    const {id} = req.params
    Category.findOne({
        where:{id},
        include:Product
        
    })
    .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({eror:err.message})
        })
}

function update_Category(req, res) {
    
    const {name, id} = req.body
    Category.update(
        { name },
        {
            where: { id }
           
        })
        .then((cat) => {
            res.json({ status: 'updated' })
        }).catch((err) => {
            res.status(500).json({ eror: err.message })
        })

}

async function delete_Category(req,res){
    const { id } = req.body;
    
    try {
        const category = await Category.findOne({
            where: { id },
            include: Product
        });
        
        if (category.Products.length > 0) {
            res.status(400).json({ message: 'Cannot delete category that has products' });
        } else {
            await Category.destroy({ where: { id } });
            res.json({ message: 'Category deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}




  module.exports = {
    create_category, show_one_category, show_all_categories, update_Category, delete_Category
  }