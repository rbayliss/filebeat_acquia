
const helper = require('./helper');
const pipeline = require('../drupal_syslog/ingest/pipeline')

test('It parses a standard drupal syslog message"', helper(
    pipeline,
    `Aug  4 06:25:15 127.0.0.1 example[1234]: https://example.com|1533363915|page not found|127.0.0.1|https://example.com/foo/bar|https://example.com/bar/foo|0||/foo/bar request_id="v-262cbe4a-97af-11e8-9226-0e6757d6ca58"`
));

test('It parses a PHP fatal error in the syslog', helper(
    pipeline,
    `Aug  4 06:25:15 127.0.0.1 example[1234]: Foo the bar in the baz. request_id="v-262cbe4a-97af-11e8-9226-0e6757d6ca58"`
))