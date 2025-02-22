const ts = require('typescript');
const path = require('path');

// Get the tsconfig file name from command line arguments
const configFileName = process.argv[2];

if (!configFileName) {
  console.error('Please provide the tsconfig file name as a parameter.');
  process.exit(1);
}

// Resolve the path to the tsconfig file
const configPath = path.resolve(__dirname, configFileName);

// Parse the tsconfig file
const parsedCommandLine = ts.getParsedCommandLineOfConfigFile(configPath, {}, {
  ...ts.sys,
  onUnRecoverableConfigFileDiagnostic: diagnostic => {
    console.error(ts.formatDiagnostic(diagnostic, {
      getCanonicalFileName: (fileName) => fileName,
      getCurrentDirectory: ts.sys.getCurrentDirectory,
      getNewLine: () => ts.sys.newLine,
    }));
    process.exit(1);
  }
});

if (!parsedCommandLine) {
  console.error('Failed to parse tsconfig file');
  process.exit(1);
}

// Create a program with the parsed settings
const program = ts.createProgram({
  rootNames: parsedCommandLine.fileNames,
  options: parsedCommandLine.options,
});

// Emit the compiled files
const emitResult = program.emit();

// Report any diagnostics (errors or warnings)
const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

allDiagnostics.forEach(diagnostic => {
  if (diagnostic.file) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    console.error(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
  } else {
    console.error(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
  }
});

// Check if any files were emitted
const emittedFiles = emitResult.emittedFiles || [];
if (emittedFiles.length > 0) {
  console.log('Emitted files:');
  emittedFiles.forEach(file => console.log(file));
}

// Exit with an appropriate code
const exitCode = emitResult.emitSkipped ? 1 : 0;
console.log(`Process exiting with code '${exitCode}'.`);
process.exit(exitCode);