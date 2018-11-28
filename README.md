# IgetEditor

<p align="center">
  <a href="https://github.com/sibiraj-s/iget-editor">
   <img src="https://raw.githubusercontent.com/sibiraj-s/iget-editor/master/src/assets/icons/iget-editor.png" alt="IgetEditor">
  </a>
</p>
<p align="center">A Simple WYSIWYG Editor for Angular 6 Applications.</p>
<p align="center">
  <a href="https://travis-ci.org/sibiraj-s/iget-editor">
    <img alt="Build Status" src="https://travis-ci.org/sibiraj-s/iget-editor.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/iget-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/iget-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/iget-editor">
    <img alt="npm" src="https://img.shields.io/npm/dm/iget-editor.svg">
  </a>
  <a href="https://github.com/sibiraj-s/iget-editor/blob/master/LICENSE">
    <img alt="licence" src="https://img.shields.io/npm/l/iget-editor.svg">
  </a>
</p>

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install iget-editor --save
# or
yarn add iget-editor
```

### Usage

Import `iget-editor` module

```typescript
import { IgetEditorModule } from 'iget-editor';

@NgModule({
  imports: [ IgetEditorModule ]
})
```

Import [font-awesome](https://github.com/FortAwesome/Font-Awesome) into your application

Then in HTML

```html
<iget-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></iget-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

#### PeerDependencies

`iget-editor` depeneds on the following libraries to work.

* [Font-Awesome v4.7.0](https://github.com/FortAwesome/Font-Awesome/tree/fa-4)
* [Ngx-Bootstrap](https://github.com/valor-software/ngx-bootstrap)

## Compatibility

All Evergreen-Browsers are supported

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera

## Demo

Demo at stackblitz [iget-editor](https://iget-editor.stackblitz.io/)

## Documentation

Documentation is auto-generated using [compodoc][compodoc], and can be viewed here: [https://sibiraj-s.github.io/iget-editor/](https://sibiraj-s.github.io/iget-editor/)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://sibiraj-s.github.io/
[wiki]:https://github.com/sibiraj-s/iget-editor/wiki/IgetEditor
[compodoc]: https://compodoc.github.io/website/
