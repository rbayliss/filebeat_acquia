#!/usr/bin/env bash

set -e

name=$1
category=$2
action=$3
envir=$4
key="$NEWRELIC_INSIGHTS_INSERT_KEY"
account="$NEWRELIC_INSIGHTS_ACCOUNT_ID"

event_json=$(cat <<EOT
[{
  "eventType": "$category",
  "action": "$action",
  "script_name": "$name",
  "envir": "$envir"
}]
EOT
)

echo "$event_json" | POST -H "Content-Type: application/json" -H "X-Insert-Key: ${key}" https://insights-collector.newrelic.com/v1/accounts/${accountId}/events