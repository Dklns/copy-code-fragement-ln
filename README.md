# Copy Code Fragment LN

一个 VS Code 插件，用来复制当前文件的相对路径和选中代码的行号范围。

## 功能

- 右键菜单提供“复制代码片段定位”
- 默认快捷键：`Ctrl+Shift+C`
- 单选区输出：`src/foo.ts:12-18`
- 多选区输出：`src/foo.ts: 12-18 20-21 30-35`

## 行为规则

- 相对路径基于工作区根目录
- 仅在编辑器有选区时显示右键菜单并允许快捷键触发
- 仅支持本地工作区内的文件
- 行号使用 1 基

## 本地开发

```bash
npm install
npm test
```

然后在 VS Code 中打开项目，按 `F5` 启动扩展开发宿主窗口。

## 项目结构

- `src/extension.ts`：扩展入口和命令注册
- `src/command.ts`：命令执行与剪贴板写入
- `src/format.ts`：路径与行号格式化逻辑
- `src/test`：单元测试和扩展集成测试
