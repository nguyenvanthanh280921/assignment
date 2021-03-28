import Category from '../models/category';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';


export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Không thêm được danh mục"
            })
        }
        // const { name, description, price } = fields;
        // if (!name || !description || !price) {
        //     return res.status(400).json({
        //         error: "Ban can nhap day du thong tin"
        //     })
        // }
        let category = new Category(fields);
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Ban nen upload anh duoi 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.path;
        }
        category.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Ko them dc category"
                })
            }
            res.json(data)
        });
    });
}
export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.category);
}
export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Sửa sản phẩm không thành công"
            })
        }
        // const { name, description, price } = fields;
        // if (!name || !description || !price) {
        //     return res.status(400).json({
        //         error: "Bạn cần nhập đầy đủ thông tin"
        //     })
        // }
        // let product = new Product(fields);
        let category = req.category;
        category = _.assignIn(category, fields);
        //1kb = 1000bit
        //mb = 100000bit
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên upload ảnh dươi 1mb"
                })
            }
            category.photo.data = fs.readFileSync(files.photo.path);
            category.photo.contentType = files.photo.path;
        }
        category.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được sản phẩm"
                })
            }
            res.json(data)
        });
    });
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deletedCategory,
            message: "Sản phẩm đã được xóa thành công"
        })
    })
}
export const list = (req, res) => {
    Category.find((err, data) => {
        if (err) {
            error: "Khong tim thay san pham"
        }
        res.json({ data })
    })
}

