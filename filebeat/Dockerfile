ARG filebeat_tag=6.3.0

FROM docker.elastic.co/beats/filebeat:${filebeat_tag}

COPY ./module /usr/share/filebeat/module/acquia
COPY ./filebeat.yml /usr/share/filebeat/filebeat.yml
