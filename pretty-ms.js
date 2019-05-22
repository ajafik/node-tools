const prettyMilliseconds = require('pretty-ms');
let log = console.log;

log(prettyMilliseconds(1337000000));
//=> '15d 11h 23m 20s'

prettyMilliseconds(1337);
//=> '1.3s'

prettyMilliseconds(133);
//=> '133ms'

// `compact` option
prettyMilliseconds(1337, {compact: true});
//=> '~1s'

// `verbose` option
prettyMilliseconds(1335669000, {verbose: true});
//=> '15 days 11 hours 1 minute 9 seconds'

// `formatSubMilliseconds` option
prettyMilliseconds(100.400080, {formatSubMilliseconds: true})
//=> '100ms 400µs 80ns'

// Can be useful for time durations
prettyMilliseconds(new Date(2014, 0, 1, 10, 40) - new Date(2014, 0, 1, 10, 5))
//=> '35m'