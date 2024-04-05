#!/usr/bin/sh

temporal server start-dev & gunicorn --timeout 0 'Backend.app:create_app()' & python3 ./Backend/application/temporal/run_worker.py
