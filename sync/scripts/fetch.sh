#!/usr/bin/env bash

set -e

site=$1
site_env=$2
pattern=$3
log_dir="${LOG_DIR:-./var/logs}"

# Debug helpers:
# echo "Site is $site"
# echo "Env is $site_env"
# echo "Pattern is $pattern"
# echo "Log dir is $log_dir"

servers=$(curl --fail -s --show-error -u "$AC_API_USER:$AC_API_TOKEN" "https://cloudapi.acquia.com/v1/sites/prod:$site/envs/$site_env/servers.json")
webs=$(echo "$servers" | jq -r 'map(select(.services.web.status == "online"))')

for key in $(echo "$webs" | jq -r 'keys | @sh'); do
  name=$(echo "$webs" | jq -r ".[$key].name")
  fqdn=$(echo "$webs" | jq -r ".[$key].fqdn")

  rsync -e "ssh -o StrictHostKeyChecking=no -i /run/secrets/acquia_private_key" -avz --inplace "${site}.${site_env}@${fqdn}:/var/log/sites/${site}.${site_env}/logs/${name}/${pattern}" "${log_dir}/${name}/"
done
