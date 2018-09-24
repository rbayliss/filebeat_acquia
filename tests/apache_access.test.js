
const helper = require('./helper');
const pipeline = require('../apache_access/ingest/pipeline')

test('It parses a basic accesslog', helper(
    pipeline,
    `127.0.0.1 - - [02/Aug/2018:06:25:04 +0000] "GET /foo HTTP/1.1" 200 123 "/foo/referrer" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" vhost=example.prod.acquia-sites.com host=example.com hosting_site=example pid=123 request_time=123 forwarded_for="127.0.0.2, 127.0.0.3" request_id="v-c99d7b12-961c-11e8-b2a9-0e6757d6ca58"`
));

test('It parses an accesslog with no IP, no referer, and no bytes', helper(
    pipeline,
    `- - - [02/Aug/2018:06:25:04 +0000] "GET /foo HTTP/1.1" 200 - "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" vhost=example.prod.acquia-sites.com host=example.com hosting_site=example pid=123 request_time=123 forwarded_for="127.0.0.2, 127.0.0.3" request_id="v-c99d7b12-961c-11e8-b2a9-0e6757d6ca58"`
));