const newman = require('newman')

return newman.run({
    collection: require('./apiTests.json'),
    reporters: 'cli',
});