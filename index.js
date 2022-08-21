const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px


hero.addEventListener('mousemove', function (e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  // 触发的节点是event.target
  // offsetX 和 offsetY 是相对于触发节点的坐标
  if (this !== e.target) {
    // 虽然是hero添加的事件，但是容器内子节点也可以触发
    // 子节点触发时坐标要加上触发节点本身的偏移量才是相对于hero本身的偏移量
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // 同时设置多个textShadow
  text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
});
