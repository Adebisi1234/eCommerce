#!/usr/bin/sh

temporal server start-dev --headless --log-level fatal & gunicorn --timeout 0 'Backend.app:create_app()' & python3 ./Backend/application/temporal/run_worker.py
