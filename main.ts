import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { getAPI, Values } from "obsidian-dataview"

/* dataview stuff
const field = getAPI(plugin.app)?.page('sample.md').field;
if (!field) return;

if (Values.isHtml(field)) // do something
else if (Values.isLink(field)) // do something
// ...

getAPI(plugin.app)

*/

// Remember to rename these classes and interfaces!
let userTag = '#quotes';

export default class MyPlugin extends Plugin {
	onload() {
		// search the vault for the userTag


		// display results

		
	}

	onunload() {

	}
}
