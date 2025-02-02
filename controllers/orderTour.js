const orderTour = require("../models/order_tour");

const orderController = {
    createOrderTour: async (req, res) => {
        try {
            const {user_id, tour_id, voucher_id, total_person, total_price, status, payment_state, date_start, date_end} = req.body;
            const response = await new orderTour({
                user_id,
                tour_id,
                voucher_id,
                total_person,
                total_price,
                status,
                payment_state,
                date_start,
                date_end
            }).save();
            console.log('response new', response);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getAllOrderTour: async (req, res) => {
        try {
            const response = await orderTour.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteOrderTour: async (req, res) => {
        try {
            const {id} = req.params;
            const response = await orderTour.findByIdAndDelete({_id: id});
            res.status(200).json('xoa order tour thanh cong');

        } catch (error) {
            res.status(500).json(error)
        }
    },

    updateOrderTour: async (req, res) => {
        try {
            const {id} = req.params;
            const {user_id, tour_id, voucher_id, total_person, total_price, status, payment_state, date_start, date_end} = req.body;
            await orderTour.findOneAndUpdate({idOrderTour: id }, {
                user_id,
                tour_id,
                voucher_id,
                total_person,
                total_price,
                status,
                payment_state,
                date_start,
                date_end
            }, {new: true})
            res.status(200).json('cap nhat order tour thanh cong')

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = orderController;