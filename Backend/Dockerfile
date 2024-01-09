FROM curlimages/curl as builder

WORKDIR /
RUN curl -sSf https://temporal.download/cli.sh | sh


FROM node:lts-bookworm

COPY --from=builder /home/curl_user/.temporalio/bin/temporal /bin/temporal

WORKDIR /backend

COPY . .
RUN npm i


EXPOSE 7233
EXPOSE 8233
EXPOSE 6001

CMD [ "npm", "run", "dev:temporal" ]
