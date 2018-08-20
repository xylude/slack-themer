export const getTheme = ({
	primary,
	text,
	background,
	backgroundElevated
}) => {
	return `
:root {
	/* Modify these to change your theme colors: */
	--primary: ${primary};
	--text: ${text};
	--background: ${background};
	--background-elevated: ${backgroundElevated};
}
div.c-virtual_list__scroll_container {
	background-color: ${background} !important;
}
.p-message_pane .c-message_list:not(.c-virtual_list--scrollbar), .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider {
	z-index: 0;
}
div.c-message__content:hover {
	background-color: ${background} !important;
}

div.c-message:hover {
	background-color: ${background} !important;
}
span.c-message__body, a.c-message__sender_link, span.c-message_attachment__media_trigger.c-message_attachment__media_trigger--caption, div.p-message_pane__foreword__description span
{
	color: ${text} !important;
}
`
}
