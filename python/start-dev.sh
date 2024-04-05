#!/usr/bin/env bash

flask --app ./Backend/app.py run --debug & python3 ./Backend/application/temporal/run_worker.py & temporal server start-dev
