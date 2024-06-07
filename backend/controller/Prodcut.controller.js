import { Product } from '../model/Product.model.js'

export const createProduct = async (req, res) => {
    const product = new Product(req.body)

    try {
        const response = await product.save()
        return res.status(200).json("Success")
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const fetchAllProducts = async (req, res) => {
    let condition = {}
    if (!req.query.admin) {
        condition.deleted = { $ne: true }
    }

    let query = Product.find(condition);
    let totalProductsQuery = Product.find(condition);

    console.log(req.query.category);

    if (req.query.category) {
        query = query.find({ category: { $in: req.query.category.split(',') } });
        totalProductsQuery = totalProductsQuery.find({
            category: { $in: req.query.category.split(',') },
        });
    }
    if (req.query.brand) {
        query = query.find({ brand: { $in: req.query.brand.split(',') } });
        totalProductsQuery = totalProductsQuery.find({ brand: { $in: req.query.brand.split(',') } });
    }
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order });
    }

    const totalDocs = await totalProductsQuery.count().exec();

    if (req.query._page && req.query._limit) {
        const pageSize = req.query._limit;
        const page = req.query._page;
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    try {
        const docs = await query.exec();
        res.set('X-Total-Count', totalDocs)
        return res.status(200).json({
            success:true,
            data:docs
        });
    } catch (err) {
        // return res.status(404).json(err);
        console.log(err)
    }
};