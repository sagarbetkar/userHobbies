import { Hobby } from '../models/Hobby';
import { User } from '../models/User';

export const hobbyController = {
    createHobby: async (req: any, res: any) => {
        if(req.body) {
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
    getHobbies: (req: any, res: any) => { 
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
    updateHobby: (req: any, res: any) => { 
        if(req.body) {
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
        }
    },
    deleteHobby: (req: any, res: any) => {
        Hobby.deleteOne({id: req.params.id}, (err: any, hobby: any) => {
            if (err) {
                res.json({
                    message: 'Server error, Please try after some time.',
                    status: 500
                });
            }
            if(hobby) {
                res.json({
                    data: hobby,
                    message: 'Hobby deleted successfully',
                    status: 200
                });
            } else {
                res.json({
                    message: 'No data found',
                    status: 200
                });
            }
        })
    }
}