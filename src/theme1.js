// https://codemirror.net/demo/theme.html#liquibyte
// check extra plugins/addons like "paranthesis matching"
module.exports = ({
  color_bgEditor,
  color_bgLinebar,
  color_seperator
}) => `
.cm-s-liquibyte.CodeMirror {
	background-color: #000;
	color: #fff;
	line-height: 1.2em;
	font-size: 1em;
}
.cm-s-liquibyte .CodeMirror-focused .cm-matchhighlight {
	text-decoration: underline;
	text-decoration-color: #0f0;
	text-decoration-style: wavy;
}
.cm-s-liquibyte .cm-trailingspace {
	text-decoration: line-through;
	text-decoration-color: #f00;
	text-decoration-style: dotted;
}
.cm-s-liquibyte .cm-tab {
	text-decoration: line-through;
	text-decoration-color: #404040;
	text-decoration-style: dotted;
}
.cm-s-liquibyte .CodeMirror-gutters { background-color: #262626; border-right: 1px solid #505050; padding-right: 0.8em; }
.cm-s-liquibyte .CodeMirror-gutter-elt div { font-size: 1.2em; }
.cm-s-liquibyte .CodeMirror-guttermarker {  }
.cm-s-liquibyte .CodeMirror-guttermarker-subtle {  }
.cm-s-liquibyte .CodeMirror-linenumber { color: #606060; padding-left: 0; }
.cm-s-liquibyte .CodeMirror-cursor { border-left: 1px solid #eee; }

.cm-s-liquibyte span.cm-comment     { color: #008000; }
.cm-s-liquibyte span.cm-def         { color: #ffaf40; font-weight: bold; }
.cm-s-liquibyte span.cm-keyword     { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-builtin     { color: #ffaf40; font-weight: bold; }
.cm-s-liquibyte span.cm-variable    { color: #5967ff; font-weight: bold; }
.cm-s-liquibyte span.cm-string      { color: #ff8000; }
.cm-s-liquibyte span.cm-number      { color: #0f0; font-weight: bold; }
.cm-s-liquibyte span.cm-atom        { color: #bf3030; font-weight: bold; }

.cm-s-liquibyte span.cm-variable-2  { color: #007f7f; font-weight: bold; }
.cm-s-liquibyte span.cm-variable-3, .cm-s-liquibyte span.cm-type { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-property    { color: #999; font-weight: bold; }
.cm-s-liquibyte span.cm-operator    { color: #fff; }

.cm-s-liquibyte span.cm-meta        { color: #0f0; }
.cm-s-liquibyte span.cm-qualifier   { color: #fff700; font-weight: bold; }
.cm-s-liquibyte span.cm-bracket     { color: #cc7; }
.cm-s-liquibyte span.cm-tag         { color: #ff0; font-weight: bold; }
.cm-s-liquibyte span.cm-attribute   { color: #c080ff; font-weight: bold; }
.cm-s-liquibyte span.cm-error       { color: #f00; }

.cm-s-liquibyte div.CodeMirror-selected { background-color: rgba(255, 0, 0, 0.25); }

.cm-s-liquibyte span.cm-compilation { background-color: rgba(255, 255, 255, 0.12); }

.cm-s-liquibyte .CodeMirror-activeline-background { background-color: rgba(0, 255, 0, 0.15); }

/* Default styles for common addons */
.cm-s-liquibyte .CodeMirror span.CodeMirror-matchingbracket { color: #0f0; font-weight: bold; }
.cm-s-liquibyte .CodeMirror span.CodeMirror-nonmatchingbracket { color: #f00; font-weight: bold; }
.CodeMirror-matchingtag { background-color: rgba(150, 255, 0, .3); }
/* Scrollbars */
/* Simple */
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div:hover, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div:hover {
	background-color: rgba(80, 80, 80, .7);
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div, .cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {
	background-color: rgba(80, 80, 80, .3);
	border: 1px solid #404040;
	border-radius: 5px;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-vertical div {
	border-top: 1px solid #404040;
	border-bottom: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal div {
	border-left: 1px solid #404040;
	border-right: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-vertical {
	background-color: #262626;
}
.cm-s-liquibyte div.CodeMirror-simplescroll-horizontal {
	background-color: #262626;
	border-top: 1px solid #404040;
}
/* Overlay */
.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div, div.CodeMirror-overlayscroll-vertical div {
	background-color: #404040;
	border-radius: 5px;
}
.cm-s-liquibyte div.CodeMirror-overlayscroll-vertical div {
	border: 1px solid #404040;
}
.cm-s-liquibyte div.CodeMirror-overlayscroll-horizontal div {
	border: 1px solid #404040;
}`
