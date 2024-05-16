
import TmpScipt from './bin'
import mitter from './mitter'

new TmpScipt()

document.addEventListener('keydown', function (event) {
    // 检查是否按下了 Ctrl 或 Cmd 键
    const isCtrlOrCmd = event.ctrlKey || event.metaKey;
    if (isCtrlOrCmd && event.key === 'u') {
        // 阻止默认行为
        event.preventDefault();
        // 添加你想执行的逻辑
        try {
            const url = window.location.href
            const input = document.createElement('input');
            input.setAttribute('readonly', 'readonly');
            input.setAttribute('value', url);
            document.body.appendChild(input);
            input.setSelectionRange(0, 9999);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            mitter.emit('open', { data: '复制成功', open: true, duration: 1000 })
        } catch (e) { console.error(e) }
    }
});
