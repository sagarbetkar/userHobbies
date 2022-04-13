import { Hobby } from '../models/Hobby';
import { User } from '../models/User';
import express from 'express';

export const hobbyController = {
    createHobby: async (req: express.Request, res: express.Response) => {
        if(req.body.name && req.body.passionLevel && req.body.year) {
            const hoddy = new Hobby({
                name: req.body.name,
                passionLevel: req.body.passionLevel,
                year: req.body.year
            });
           try {
                let result1 = await hoddy.save();
                let result2 = await User.findByIdAndUpdate({_id: req.params.userId}, {$push: {hobbies: [result1._id]}}).exec();
                return res.json({
                    data: result1,
                    message: 'Hobby created & added successfully',
                    status: 200
                })
            } catch(err) {
                return res.json({
                    message: 'Hobby creation failed',
                    status: 500
                });
            }
        } else {
            res.json({
              message: 'Incomplete Inputs',
              status: 200
            });
        }
    },
    getHobbies: (req: express.Request, res: express.Response) => { 
        Hobby.find({}, (err, hobbies) => {
            if (err) {
                res.json({
                    message: 'Server error, Please try after some time.',
                    status: 500
                });
            }
            if (hobbies.length != 0) {
                res.json({
                    data: hobbies,
                    message: 'All hobbies fetched',
                    status: 200
                });
            } else {
                res.json({
                    data: [],
                    message: 'No data found',
                    status: 200
                });
            }
        })
    },
    updateHobby: (req: express.Request, res: express.Response) => { 
        if(req.body.name && req.body.passionLevel && req.body.year) {
            Hobby.findByIdAndUpdate({ _id: req.params.id }, { name: req.body.name, passionLevel: req.body.passionLevel, year: req.body.year }, {new: true}, (err, hobby) => {
                if (err) {
                    res.json({
                        message: 'Server error, Please try after some time.',
                        status: 500
                    });
                }
                if(hobby) {
                    res.json({
                        data: hobby,
                        message: 'Hobby updated successfully',
                        status: 200
                    });
                } else {
                    res.json({
                        message: 'No data found',
                        status: 200
                    });
                }
            })
        } else {
            res.json({
              message: 'Incomplete Inputs',
              status: 200
            });
        }
    },
    deleteHobby: async (req: express.Request, res: express.Response) => {
        try {
            let result1 = await Hobby.deleteOne({ _id: req.params.id });
            let result2 = await User.findByIdAndUpdate({ _id: req.params.userId }, { $pull: { hobbies:  req.params.id  } }, { new: true });
             return res.json({
                    data: result1,
                    message: 'Hobby deleted successfully',
                    status: 200
                })
        } catch (error) {
            res.json({
                    message: 'Server error, Please try after some time.',
                    status: 500
                });
        }
    }
}