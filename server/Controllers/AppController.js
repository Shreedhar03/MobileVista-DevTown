const mongoose = require('mongoose')
const productModel = require('../Models/productModel')

const samsungPhones = [
    // F series
    { discountPercentage: 20, price: 16450,camera:"48MP | 8MP", productName: 'Galaxy F41', rating: 4.5, brand: 'Samsung', RAM: '4GB', storage: '64GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-a057fzkhins/gallery/in-galaxy-a-sm-a057fzkhins-front-black-thumb-538631022?$172_172_PNG$'] },
    { discountPercentage: 25, price: 18500,camera:"48MP | 8MP", productName: 'Galaxy F52', rating: 4.2, brand: 'Samsung', RAM: '6GB', storage: '128GB', processor: 'Snapdragon', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-a055flghins/gallery/in-galaxy-a05-sm-a055-480573-sm-a055flghins-thumb-538467236?$172_172_PNG$'] },
    { discountPercentage: 30, price: 14899,camera:"48MP | 8MP", productName: 'Galaxy F62', rating: 4.7, brand: 'Samsung', RAM: '8GB', storage: '128GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-a145fzkdins/gallery/in-galaxy-a14-sm-a145-sm-a145fzkdins-thumb-536656216?$172_172_PNG$'] },

    // S series
    { discountPercentage: 18, price: 46500,camera:"108MP | 12MP", productName: 'Galaxy S21', rating: 4.3, brand: 'Samsung', RAM: '8GB', storage: '128GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711blgbins/gallery/in-galaxy-s23-fe-s711-479553-sm-s711blgbins-thumb-538355945?$172_172_PNG$'] },
    { discountPercentage: 22, price: 55455,camera:"108MP | 12MP", productName: 'Galaxy S21 Plus', rating: 4.6, brand: 'Samsung', RAM: '12GB', storage: '256GB', processor: 'Snapdragon', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711bzbbins/gallery/in-galaxy-s23-fe-s711-sm-s711bzbbins-thumb-538353643?$172_172_PNG$'] },
    { discountPercentage: 35, price: 35450,camera:"108MP | 12MP", productName: 'Galaxy S20 FE', rating: 4.8, brand: 'Samsung', RAM: '16GB', storage: '512GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-g990blg4ins/gallery/in-galaxy-s21-fe-g990-464368-sm-g990blg4ins-thumb-537060640?$172_172_PNG$'] },
    { discountPercentage: 35, price: 154499,camera:"108MP | 12MP", productName: 'Galaxy S23 Ultra', rating: 4.8, brand: 'Samsung', RAM: '16GB', storage: '512GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863398?$172_172_PNG$'] },
    { discountPercentage: 35, price: 166500,camera:"108MP | 12MP", productName: 'Galaxy S22 Ultra', rating: 4.8, brand: 'Samsung', RAM: '16GB', storage: '512GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-ultra-s908-413016-sm-s908edrginu-thumb-530969112?$172_172_PNG$'] },

    // A series
    { discountPercentage: 15, price: 16450,camera:"", productName: 'Galaxy F42 5G', rating: 4.1, brand: 'Samsung', RAM: '4GB', storage: '32GB', processor: 'MediaTek', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-e426bzahins/gallery/in-galaxy-f42-5g-8gb-ram-sm-e426bzahins-thumb-514504900?$172_172_PNG$'] },
    { discountPercentage: 20, price: 14620,camera:"48MP | 8MP", productName: 'Galaxy F22', rating: 4.4, brand: 'Samsung', RAM: '6GB', storage: '64GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-e225fzkdins/gallery/in-galaxy-f-sm-e225fzkdins-sm-e---fzkhins-thumb-470145931?$172_172_PNG$'] },
    { discountPercentage: 28, price: 13200,camera:"48MP | 8MP", productName: 'Galaxy F21', rating: 4.9, brand: 'Samsung', RAM: '8GB', storage: '128GB', processor: 'Snapdragon', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-f127gzggins/gallery/in-galaxy-f12-4gb-ram-sm-f127gzggins-thumb-419015725?$172_172_PNG$'] },

    // Z Flip series
    { discountPercentage: 22, price: 98620,camera:"64MP | 8MP", productName: 'Galaxy Z Flip5', rating: 4.2, brand: 'Samsung', RAM: '8GB', storage: '256GB', processor: 'Snapdragon', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-z-flip5-f731-sm-f731blgains-thumb-537223944?$172_172_PNG$'] },
    { discountPercentage: 30, price: 142499,camera:"64MP | 8MP", productName: 'Galaxy Z Fold 4', rating: 4.7, brand: 'Samsung', RAM: '12GB', storage: '512GB', processor: 'Exynos', images: ['https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-fold4-f936-sm-f936bzkdinu-thumb-533084161?$172_172_PNG$'] },

    // Additional phones

];



const addProducts = (req, res) => {
    productModel.insertMany(samsungPhones)
    res.send('Added')
}

const getAllProducts = async (req, res) => {
    console.log("getting data...")
    try {
        let results = await productModel.find()
        res.json({ success: true, data: results }).status(200)
    } catch (error) {
        console.log(error)
    }
}
const getSingleProducts = async (req, res) => {
    console.log("getting data...")
    try {
        let id = req.params.id
        console.log(id)
        let results = await productModel.findOne({productName: id })
        console.log(results)
        res.json({ success: true, data: results }).status(200)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { addProducts, getAllProducts,getSingleProducts }