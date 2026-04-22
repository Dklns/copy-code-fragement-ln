# 实现计划

## 当前目标

- 保留插件默认快捷键
- 明确支持用户通过 VS Code 标准方式自定义快捷键
- 让命令在 Keyboard Shortcuts 中更容易被搜索和重新绑定

## 当前设计

- 继续保留默认快捷键：
  - Windows/Linux：`Ctrl+Shift+C`
  - macOS：`Cmd+Shift+C`
- 不新增“插件设置项里直接填写快捷键”的伪配置
- 通过 README 和命令文案说明用户可在 `Keyboard Shortcuts` 或 `keybindings.json` 中自定义绑定

## 执行步骤

1. 已完成：确认 VS Code 官方快捷键能力边界
2. 已完成：确认采用“保留默认快捷键 + 用户自行重绑定”的方案
3. 已完成：调整命令文案，提升可搜索性
4. 已完成：补充 README 中的快捷键自定义说明与示例
5. 已完成：运行测试，确认功能未回归
