#!/usr/bin/env bash

temporal server start-dev & gunicorn 'Backend.app:create_app()' & python3 ./Backend/application/temporal/run_worker.py
