import { User } from '../models/User';

export const userController = {
    createUser: (req: any, res: any) => {
        if(req.body.name) {
            const user = new User({
                name: req.body.name
            });
            user.save((err, t) => {
                if (err) {
                    return res.json({
                        message: 'User creation failed',
                        status: 500
                    });
                } else {
                    res.json({
                        data: t,
                        message: 'User added successfully',
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
    getUsers: (req: any, res: any) => {
        let query = User.find().populate('hobbies');
        query.exec((err, users) => {
            if (err) {
            res.json({
                message: 'Server error, Please try after some time.',
                status: 500
            });
        }
        if (users.length != 0) {
            res.json({
                data: users,
                message: 'All users fetched',
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
    updateUser: (req: any, res: any) => { 
        if(req.body.name) {
        User.findByIdAndUpdate({_id: req.params.id}, {name: req.body.name}, {new: true}, (err, user) => {
            if (err) {
                res.json({
                    message: 'Server error, Please try after some time.',
                    status: 500
                });
            }
            if(user) {
                res.json({
                    data: user,
                    message: 'User updated successfully',
                    status: 200
                });
            } else {
                res.json({
                    message: 'No data found',
                    status: 200
                });
            }
        }).populate('hobbies')
    }
    },
    deleteUser: (req: any, res: any) => {
        User.deleteOne({id: req.params.id}, (err: any, user: any) => {
            if (err) {
                res.json({
                    message: 'Server error, Please try after some time.',
                    status: 500
                });
            }
            if(user) {
                res.json({
                    data: user,
                    message: 'Task deleted successfully',
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