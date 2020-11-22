## 使用自动实时编译

Ctrl + Shift + B 运行构建任务

选择 tsc: 监视 - tsconfig.json ，回车运行之后，编辑的代码保存之后，就会自动编译。

编译成js后再根据node指令来执行

## 直接执行ts

调用命令ts-node app.ts(全局安装的情况下), 如果一切正常的话,我们应该可以看到想要的输出了.
```
npm install ts-node -g
```

## 调试 TypeScript

在项目的根目录下，执行下面的命令：
```
npm install -D ts-node
```
在 VScode 调试中，添加配置：
```
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      //"sourceMaps": true
      "args": [
        "${workspaceFolder}/src/index.ts"
      ]
    }
  ]
}
```