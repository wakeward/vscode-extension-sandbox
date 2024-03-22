// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import { Credentials } from './credentials';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('hot-source.enum', () => {
		// get env information
		const machineId = vscode.env.machineId;
		const appRoot = vscode.env.appRoot;
		const appHost = vscode.env.appHost;

		// print env information in json format
		console.log(JSON.stringify({ machineId, appRoot, appHost }, null, 2));

		// get all extensions
		const extensions = vscode.extensions.all;
		// get all enabled extensions
		const enabledExtensions = extensions.filter(extension => extension.isActive);

		// get all extensions id in json format
		const extensionIds = enabledExtensions.map(extension => extension.id);
		console.log(JSON.stringify(extensionIds, null, 2));

		// print all extension data in json format
		// console.log(JSON.stringify(enabledExtensions, null, 2));

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
