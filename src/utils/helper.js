export function parseHTMLText(html) {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, "text/html");
  return parsed.body.textContent;
}

export function removeTags(str) {
  if (!str) return false;
  return str.replace(/(<([^>]+)>|&#?\w+;)/gi, "");
}

