const NO_BREAK_SPACE = "&#160;";
const replaceSpace = (s) => (s === " " ? NO_BREAK_SPACE : s);
const core = (text) => {
    const parent = document.createElement("span");
    parent.style.display = "inline-flex";
    parent.style.flexWrap = "wrap";
    const children = [...text]
        .map((text, order) => ({ order, rand: Math.random(), text: text }))
        .sort((a, b) => a.rand - b.rand)
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
const recursive = (target) => {
    var _a;
    if (target.nodeType !== Node.TEXT_NODE) {
        [...target.childNodes].forEach(recursive);
        return;
    }
    const text = (_a = target.textContent) !== null && _a !== void 0 ? _a : "";
    if (text === "") {
        return;
    }
    target.replaceWith(core(text.trim()));
};
export const init = (selector = "[data-no-copy]") => {
    const targets = document.querySelectorAll(selector);
    if (targets.length === 0) {
        return;
    }
    targets.forEach(recursive);
};
