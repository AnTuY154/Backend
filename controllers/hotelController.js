const Hotel = require('../models/hotel');
var mongoose = require('mongoose')

const hotelController = {
    createHotel: async (req, res) => {
        try {
          const  {name, image, description, type, address, address_detail, rate, price} = req.body;
            const hotelcreate = await new Hotel({
                name,
                image,
                description,
                type,
                address,
                address_detail,
                rate,
                price
            });

            const response = await hotelcreate.save();
            res.status(200).json(response);
        } catch (error) {
            console.log('error hotel create', error);
            res.status(500).json(error)
        }
    },

    deleteHotel: async (req, res) => {
        try {
            const {id} = req.params;
            const response = await Hotel.findByIdAndDelete({_id: id});
            res.status(200).json('delete hotel success');
        } catch (error) {
            console.log('error delete hotel', error);
            res.status(500).json(error)
        }
    },

    updateHotel: async (req, res) => {
        try {
            const  {name, image, description, type, address, address_detail, rate, price } = req.body;
            const {id} = req.params;
            console.log('id', name, image, description, type, address, address_detail, rate)
            const response = await Hotel.findOneAndUpdate({idHotel: id }, {
                name,
                image,
                description,
                type,
                address,
                address_detail,
                rate,
                price
            }, { new: true })
            console.log('response new', response);
            res.status(200).json('cap nhat thanh cong')
        } catch (error) {
            console.log('error try', error)
            res.status(500).json(error)
        }
    },

    getAllHotel: async (req, res) => {
        try {
            const response = await Hotel.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getID: async (req, res) => {
        try {
            const {id} = req.params;
          const response=  await Hotel.findById({_id: id});
          res.status(200).json(response);
          
        } catch (error) {
            res.status(500).json(error)            
        }
    }
}

module.exports = hotelController;