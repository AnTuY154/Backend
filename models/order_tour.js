const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderTourSchema = new mongoose.Schema({
    user_id: Number,
    tour_id: Number,
    voucher_id: Number,
    total_person: Number,
    total_price: Number,
    // status: 
    // status varchar //CREATED || ONGOING || ENDED: trạng thái chuyến đi (mới tạo || đang diễn ra || kết thúc)
    payment_state: String,
    date_start: String,
    date_end: String
})

orderTourSchema.plugin(AutoIncrement, {inc_field: 'idOrderTour'});
module.exports = mongoose.model("OrderTour", orderTourSchema)