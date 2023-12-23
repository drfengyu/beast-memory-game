// translate.js

// 替换元素的文本内容为中文翻译
function translateElement(element) {
  if (element.nodeType === Node.TEXT_NODE) {
    const originalText = element.nodeValue.trim();
    const translatedText = translations[originalText];
    if (translatedText) {
      element.nodeValue = translatedText;
    }
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    Array.from(element.childNodes).forEach(childNode => {
      translateElement(childNode);
    });
  }
}

// 遍历网页的所有元素
Array.from(document.body.getElementsByTagName('*')).forEach(element => {
  translateElement(element);
});
