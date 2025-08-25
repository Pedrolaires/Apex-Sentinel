import * as vscode from "vscode";
import { parseApexCode } from "./parseApex";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extensão ativad');

  let disposable = vscode.commands.registerCommand("apex-sentinel.parse", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("Nenhum editor ativo!");
      return;
    }

    const code = editor.document.getText();
    const tree = parseApexCode(code);

    console.log("AST:", tree.toStringTree());
    vscode.window.showInformationMessage("Parser Apex executado! Veja o console (Help > Toggle Developer Tools).");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
