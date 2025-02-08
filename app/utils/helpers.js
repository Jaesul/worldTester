export function truncateText(text, charLen, symbol) {
    return text.length > charLen ? text.substring(0, charLen) + symbol : text;
}

