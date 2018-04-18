export default function getElementPosition(el) {
  let box = el.getBoundingClientRect();

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

  let clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
  let clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;

  return {top: Math.round(top), left: Math.round(left)};
}
