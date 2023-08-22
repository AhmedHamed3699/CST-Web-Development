const express = require('express');
const app = express();
const router = express.Router();

const users = [
    {name: 'Ahmed' , age: 20},
    {name: 'Hamed' , age: 40},
    {name: 'Gaber' , age: 60},
];

app.use(express.json());
app.use((req , res , next) => {
    users.map(user => {
        if(user.name)
        user.name = user.name.toLowerCase();
    });
    next();
});
app.use('/user', router);

router.route('/').get((req , res) => {
    console.log("GET");
    res.json({users});
})
.post((req , res) => {
    const user = req.body;
    if(!user.name || !user.age) {
        return res.status(500).json({status: 'failed'});
    }
    users.push(user);
    res.json({status: 'success' , users});
});

router.get('/:username' , (req , res) => {
    const username = req.params.username;
    const user = users.find(user => user.name === username);
    if(!user) {
        return res.status(404).json({status: 'failed'});
    }
    res.json({user});
});

app.listen(8081 , () => console.log('listening to server ....'));



