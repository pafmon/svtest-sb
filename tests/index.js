const newman = require('newman')

newman.run({
    collection: require('./apiTests.json'),
    reporters: 'cli',
});