
const helper = require('./helper');
const pipeline = require('../php_error/ingest/pipeline')

test('It parses a standard error message', helper(
    pipeline,
    `[02-Aug-2018 06:25:04 America/New_York] Uncaught PHP Exception Drupal\\Core\\Database\\InvalidQueryException: "Query condition 'node_field_data.nid IN ()' cannot be empty." at /mnt/www/html/example/docroot/core/lib/Drupal/Core/Database/Query/Condition.php line 103 request_id="v-033f1b7a-95a8-11e8-bc0a-0e6757d6ca58"`
));
