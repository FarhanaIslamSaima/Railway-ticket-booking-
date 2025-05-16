VENV_DIR := .venv

ifeq ($(OS),Windows_NT)
	PYTHON := $(VENV_DIR)/Scripts/python.exe
	UV := $(VENV_DIR)/Scripts/uv.exe
	BLACK := $(VENV_DIR)/Scripts/black.exe
	ISORT := $(VENV_DIR)/Scripts/isort.exe
	FLAKE8 := $(VENV_DIR)/Scripts/flake8.exe
	MYPY := $(VENV_DIR)/Scripts/mypy.exe
	PRECOMMIT := $(VENV_DIR)/Scripts/pre-commit.exe
else
	PYTHON := $(VENV_DIR)/bin/python
	UV := $(VENV_DIR)/bin/uv
	BLACK := $(VENV_DIR)/bin/black
	ISORT := $(VENV_DIR)/bin/isort
	FLAKE8 := $(VENV_DIR)/bin/flake8
	MYPY := $(VENV_DIR)/bin/mypy
	PRECOMMIT := $(VENV_DIR)/bin/pre-commit
endif

DJANGO_SETTINGS := config.settings
export DJANGO_SETTINGS_MODULE := $(DJANGO_SETTINGS)

.PHONY: help venv install sync update-reqs add-pkg add-dev-pkg server shell test migrations makemigrations createsuperuser format lint check clean-venv clean-pyc

help:
	@echo "Available commands:"
	@echo "  venv              Create a new virtual environment using uv"
	@echo "  install           Install all dependencies and pre-commit hooks"
	@echo "  sync              Sync dependencies using uv"
	@echo "  update-reqs       Update requirements files from current environment"
	@echo "  add-pkg           Add a package (make add-pkg PACKAGE=name)"
	@echo "  add-dev-pkg       Add a dev package (make add-dev-pkg PACKAGE=name)"
	@echo "  server            Run the development server"
	@echo "  shell             Run Django shell"
	@echo "  test              Run tests"
	@echo "  migrations        Run migrations"
	@echo "  makemigrations    Make migrations"
	@echo "  createsuperuser   Create a superuser"
	@echo "  format            Format code with black and isort"
	@echo "  lint              Lint code with flake8 and mypy"
	@echo "  check             Check formatting and linting"
	@echo "  clean-venv        Remove virtual environment"
	@echo "  clean-pyc         Remove Python cache files"

venv:
	@if [ -d $(VENV_DIR) ]; then \
		echo "Virtual environment already exists. Use 'make clean-venv' to remove it first."; \
	else \
		echo "Creating virtual environment with uv..."; \
		uv venv $(VENV_DIR); \
		echo "Run 'source $(VENV_DIR)/bin/activate' or '.\\$(VENV_DIR)\\Scripts\\activate' to activate."; \
	fi

install: venv
	@$(UV) pip install -r requirements.txt
	@$(UV) pip install -r requirements-dev.txt
	@$(PRECOMMIT) install

sync:
	@$(UV) pip sync requirements.txt requirements-dev.txt

update-reqs:
	@$(PYTHON) -m pip freeze > requirements.freeze.txt

add-pkg:
	@test -n "$(PACKAGE)" || (echo "Error: PACKAGE variable not set"; exit 1)
	@$(UV) pip install $(PACKAGE)
	@grep -qxF "$(PACKAGE)" requirements.txt || echo "$(PACKAGE)" >> requirements.txt

add-dev-pkg:
	@test -n "$(PACKAGE)" || (echo "Error: PACKAGE variable not set"; exit 1)
	@$(UV) pip install $(PACKAGE)
	@grep -qxF "$(PACKAGE)" requirements-dev.txt || echo "$(PACKAGE)" >> requirements-dev.txt

server:
	@$(PYTHON) manage.py runserver

shell:
	@$(PYTHON) manage.py shell

test:
	@$(PYTHON) -m pytest

migrations:
	@$(PYTHON) manage.py migrate

makemigrations:
	@$(PYTHON) manage.py makemigrations

createsuperuser:
	@$(PYTHON) manage.py createsuperuser

format:
	@$(BLACK) .
	@$(ISORT) .

lint:
	@$(FLAKE8) .
	@$(MYPY) .

check:
	@$(BLACK) . --check
	@$(ISORT) . --check
	@$(FLAKE8) .
	@$(MYPY) .

clean-venv:
	@rm -rf $(VENV_DIR)

clean-pyc:
	@find . -name "*.pyc" -delete
	@find . -name "__pycache__" -type d -exec rm -rf {} +
