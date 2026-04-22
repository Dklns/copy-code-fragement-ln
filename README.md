# Copy Code Fragment LN

这是一个 VS Code 插件，用来复制当前文件的相对路径和选中代码的行号范围。

## 功能

- 在编辑器右键菜单中提供 `复制代码片段定位`
- 默认快捷键：
  - Windows / Linux：`Ctrl+Shift+C`
  - macOS：`Cmd+Shift+C`
- 单选区复制结果示例：`src/foo.ts:12-18`
- 多选区复制结果示例：`src/foo.ts: 12-18 20-21 30-35`

## 行为规则

- 复制的路径相对于当前工作区根目录
- 仅在编辑器存在选区时显示右键菜单并允许快捷键触发
- 仅支持当前工作区中的本地文件
- 行号从 `1` 开始计数

## 使用方法

1. 在 VS Code 工作区中打开一个文件
2. 选中一段或多段代码
3. 右键选择 `复制代码片段定位`，或直接按默认快捷键
4. 粘贴即可得到格式化后的定位字符串

## 自定义快捷键

本插件保留了默认快捷键，但你可以使用 VS Code 的标准方式重新绑定。

### 方式一：在快捷键面板中修改

1. 打开 VS Code 命令面板
2. 执行 `Preferences: Open Keyboard Shortcuts`
3. 搜索以下任一关键词：
   - `复制代码片段定位`
   - `Copy Code Fragment Location`
   - `copyCodeFragmentLn.copyLocation`
4. 找到命令后点击修改快捷键即可

### 方式二：直接编辑 `keybindings.json`

可以在 `keybindings.json` 中加入如下配置：

```json
{
  "key": "ctrl+alt+y",
  "command": "copyCodeFragmentLn.copyLocation",
  "when": "editorTextFocus && editorHasSelection && resourceScheme == file"
}
```

说明：

- `key` 可以换成你自己的组合键
- `when` 建议保留，这样命令只会在编辑器聚焦且存在选区时生效
- 用户自定义绑定会覆盖插件提供的默认快捷键

## 本地开发

```bash
npm install
npm test
npm run package
```

在 VS Code 中按 `F5` 可启动 Extension Development Host 进行调试。

## 项目结构

- `src/extension.ts`：扩展入口和命令注册
- `src/command.ts`：命令执行和剪贴板写入
- `src/format.ts`：选区与行号范围格式化逻辑
- `src/test`：单元测试和扩展集成测试

## 发布说明

变更历史见 [CHANGELOG.md](./CHANGELOG.md)。
