export const navigatorCopyText = (text: string) => navigator.clipboard.writeText(text).then(r => r);
