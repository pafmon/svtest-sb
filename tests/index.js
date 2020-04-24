const newman = require('newman')

newman.run({
    collection: require('./apiTests.json'),
    reporters: 'cli'
}, function (err, summary) {
    var failuresCount = summary.run.failures.length;
    if (failuresCount) {
        process.exit(1);
    } else {
        process.exit(0);
    }
});