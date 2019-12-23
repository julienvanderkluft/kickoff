.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install or update Node dependencies
	@echo "Installing project dependencies..."
	@npm install
	@echo "Done."

build: ## Build project.
	@echo "Starting..."
	@gulp build
	@echo "Project is builded."

dev: ## Build project and live watching of files modifications.
	@echo "Starting..."
	@echo "Use 'crtl + c' for stop when watcher is launched."
	@gulp default

prod: ## Build for production, with optimized content.
	@echo "Starting..."
	@gulp build --prod
	@echo "Done."

clean: ## Clean build folder and temporary files.
	@echo "Clean build folder..."
	@gulp clean
	@echo "Done."

clean-hard: ## Clean build folder and installed dependencies.
	@echo "Clean build folder and project dependencies..."
	@gulp clean --hard
	@echo "Done."

# favicons: ## Generate favicons and partial file
# 	@gulp favicons
# 	@echo "Done."
