install:
		npm ci

test: 
		npm test

lint:
		npx eslint .

lint-fix:
		npx eslint --fix .

publish:
		npm publish --dry-run

test-coverage:
	npm test -- --coverage --coverageProvider=v8
