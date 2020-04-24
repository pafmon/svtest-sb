const newman = require('newman')

newman.run({
    collection: require('./apiTests.json'),
    reporters: 'cli'
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
});