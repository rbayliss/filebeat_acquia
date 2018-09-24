
ARG filebeat_tag=6.3.0

FROM docker.elastic.co/beats/filebeat:${filebeat_tag}

COPY ./module /usr/share/filebeat/module/acquia
COPY ./acquia.yml /usr/share/filebeat/modules.d/acquia.yml
