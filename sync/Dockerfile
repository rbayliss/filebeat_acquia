
FROM alpine

# Add ssh/rsync
RUN apk update && apk add --no-cache bash rsync openssh jq curl

# Setup sync script with crontab.
ADD crontab /var/spool/cron/crontabs/logsync
ADD scripts /usr/local/logsync
RUN adduser -D --uid 1000 logsync && \
  chmod +x /var/spool/cron/crontabs/logsync

CMD ["crond", "-d",  "8", "-f"]
