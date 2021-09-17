# no-copy

A collection of ideas to disable text copying.

Technically, there is no way to completely disable text copying, since users can modify CSS or stop JavaScript on the client side. There are also UX concerns with disabling it.

[javascript - how to restrict user to copy web content - Stack Overflow](https://stackoverflow.com/questions/2865744/how-to-restrict-user-to-copy-web-content)

This is just a collection of ideas and not intended to be used for serious purposes.

## Change Order (CSS)

Use `display: inline-flex` and `order: xxx`

based on [HTML でコピペできそうでできない要素を作る - mizchi's blog](https://mizchi.hatenablog.com/entry/2019/03/10/015208)

## `user-select: none` (CSS)

## Prevent `copy` Event (JavaScript)

## Replace with image (HTML)

## Draggable (HTML)

```html
<section draggable="true">
  <p>~~~</p>
  <p>~~~</p>
  <p>~~~</p>
</section>
```

[Demo ➡](https://boarwell.github.io/no-copy/demo/draggable/)

When `draggable="true"` is set on an element that has a text, the default browser behavior (in this case, text selection) will be replaced with dragging the element. Thus, the text will not be selected.

[draggable - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)

However, the element can still be selected if text selection starts from other elements. This is also not a perfect solution.
