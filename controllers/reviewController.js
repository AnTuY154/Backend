const reviewModel = require("../models/review");

const reviewController = {

    createReview: async (req, res) => {
        try {
            const { user_id, content, images, rate_star, type, target_id } = req.body;

        const response = await new reviewModel({
            user_id,
            content,
            images,
            rate_star,
            type,
            target_id
        }).save();
        console.log('response', response);
        res.status(200).json(response);
        } catch (error) {
            console.log('error nr', error)
            res.status(500).json(error)
        }
    },

    getAllReview: async (req, res) => {
        try {
            
            const response = await reviewModel.find();
            res.status(200).json(response);

        } catch (error) {
            res.status(500).json('danh sach review loi')
        }
    },

    deleteReview: async (req, res) => {
        try {
            const {id} = req.params;
            await reviewModel.findByIdAndDelete({_id: id});
            res.status(200).json('xoa thanh cong')
        } catch (error) {
            res.status(500).json('xoa loi')
        }
    },

    updateReview: async (req, res) => {
        try {
            
            const {id} = req.params;
            const { user_id, content, images, rate_star, type, target_id } = req.body;
            await reviewModel.findOneAndUpdate({idReview: id}, {
                user_id,
                content,
                images,
                rate_star,
                type,
                target_id
            },{new: true});
            res.status(200).json('cap nhat thanh cong');


        } catch (error) {
            res.status(500).json('cap nhat that bai')
        }
    }
}


module.exports = reviewController;
