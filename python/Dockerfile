FROM curlimages/curl as builder

WORKDIR /
RUN curl -sSf https://temporal.download/cli.sh | sh


FROM python:3.12.2-bookworm
COPY --from=builder /home/curl_user/.temporalio/bin/temporal /bin/temporal

WORKDIR /app


COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt


COPY . .


EXPOSE 7233
EXPOSE 8233
EXPOSE 6001

CMD [ "./start.sh" ]
