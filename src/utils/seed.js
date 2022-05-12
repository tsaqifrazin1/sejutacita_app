const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = createTestUser;

async function createTestUser() {
    // create test user if the db is empty
    if (( await User.countDocuments({})) === 0) {
        const admin = new User({
            firstname: 'test',
            lastname: 'admin',
            email: 'admin@mail.com',
            password: '12345678',
            role: "admin"
        });
        const user = new User({
            firstname: 'test',
            lastname: 'user',
            email: 'user@mail.com',
            password: '12345678',
            role: "user"
        });
        await admin.save();
        await user.save()
    }
}