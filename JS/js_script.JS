
// 获取按钮元素
const toTopBtn = document.getElementById('toTopBtn');

// 滚动事件处理函数
function handleScroll() {
    // 获取当前滚动距离（兼容写法）
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    // 滚动距离大于 0 则显示按钮，否则隐藏
    if (scrollTop > 0) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
}

// 监听滚动事件（使用 passive 提高滚动性能）
window.addEventListener('scroll', handleScroll, { passive: true });

// 页面加载时立刻执行一次，确保初始状态正确
handleScroll();

// 点击按钮平滑回到顶部
toTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

