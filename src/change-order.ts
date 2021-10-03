const NO_BREAK_SPACE = "&#160;";
const replaceSpace = (s: string) => (s === " " ? NO_BREAK_SPACE : s);

const core = (text: string): HTMLElement => {
  const parent = document.createElement("span");
  parent.style.display = "inline-flex";
  parent.style.flexWrap = "wrap";

  const children = [...text]
    // generate random number to shuffle
    .map((text, order) => ({ order, rand: Math.random(), text: text }))
    // shuffle
    .sort((a, b) => a.rand - b.rand)
    // compose DOM
    .map(({ order, text }) => {
      const span = document.createElement("span");
      span.style.order = order.toString();
      span.innerHTML = replaceSpace(text);
      return span;
    })
    .reduce((prev, curr) => {
      prev.appendChild(curr);
      return prev;
    }, document.createDocumentFragment());

  parent.appendChild(children);
  return parent;
};

// recursive() applies core() to target
const recursive = (target: Element): void => {
  if (target.nodeType !== Node.TEXT_NODE) {
    ([...target.childNodes] as Element[]).forEach(recursive);
    return;
  }

  const text = target.textContent ?? "";
  if (text === "") {
    return;
  }

  target.replaceWith(core(text.trim()));
};

export const init = (selector: string = "[data-no-copy]"): void => {
  const targets = document.querySelectorAll(selector);
  if (targets.length === 0) {
    return;
  }

  targets.forEach(recursive);
};
