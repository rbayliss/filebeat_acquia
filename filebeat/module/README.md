Mass.gov Filebeat Module
========================

This is a Filebeat module.  It is responsible for defining the pipelines, inputs, and dashboards for Mass.gov log monitoring.

Testing
--------

This module has a test suite using [Jest](https://jestjs.io/), a Javscript testing tool.  Testing requires an elasticsearch server to be running.

To run tests:
```bash
npm install
npm run test
```
If Elasticsearch is running at somewhere other than `http://localhost:9200`, you should set the ES_HOST environment variable to the proper connection string before testing.

Installation
------------

1. Add this module to the filebeat modules directory (`/usr/share/filebeat/etc/modules` in Docker).
2. Make sure the module is loaded by adding the following to `filebeat.yml`:
    ```yaml
    filebeat.modules:
      - module: acquia
    ```