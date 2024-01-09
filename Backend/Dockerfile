FROM curlimages/curl as builder

WORKDIR /
RUN curl -sSf https://temporal.download/cli.sh | sh


FROM node:lts-bookworm

COPY --from=builder /home/curl_user/.temporalio/bin/temporal /bin/temporal

EXPOSE 7233
EXPOSE 8233

ENTRYPOINT ["temporal", "server", "start-dev", "--ip" , "0.0.0.0"]