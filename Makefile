.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install or update Node dependencies
	@echo "Installing Node dependencies..."
	@npm install

build: ## Basic build project.
	@gulp build

dev: ## Basic build project and live watching of files modifications.
	@echo "Use 'crtl + c' for stop."
	@gulp watch

prod: ## Build for production, with optimized content. And create a zipfile of it.
	@gulp build --prod && gulp zip

clean: ## Clean build folder and temporary files.
	@echo "Clean build folder and temporary files..."
	@gulp clean:soft

clean-hard: ## Clean build folder and installed dependencies.
	@echo "Clean build folder and installed dependencies..."
	@gulp clean:hard
