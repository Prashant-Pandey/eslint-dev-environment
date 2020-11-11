# TypeScript, ES Lint, Prettier

The project uses:

- TypeScript
  - Use `tsc -b` or `.\node_modules\.bin\` to convert TypeScript files to JavaScript
  - All the typescript files reside in ts directory and will be converted to js directory
  - Use "./js/filename.js" to import file to HTML
- ES Lint
  - Use ```eslint .``` or ```.\node_modules\.bin\eslint .``` to check the linting error
- Prettier
  - Use ```prettier --write .``` or ```.\node_modules\.bin\prettier --write .``` to format the files
  - Use ```prettier --check``` to check the format error
**************
# Run the Project
- Use ```npm i``` to install the dependecies
- Use ```npm run lint``` to lint the project
- Use ```npm run build``` to build the project
- Use ```npm run dev``` to run live-server