const newman = require('newman')

newman.run({
    collection: require('./apiTests.json'),
    reporters: 'cli'
}, function (err) {
    if (err) {
        process.exit(1);
    }
    console.log('collection run complete!');
    process.exit(0);
});