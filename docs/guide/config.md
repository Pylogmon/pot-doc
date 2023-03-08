# 配置

首次运行会自动弹出设置页面，如果没有弹出，请点击托盘图标-设置进行设置

按照需求填写之后点击右下角保存设置即可。

注意：保存设置之后重启生效，没重启之前只是将设置写入了文件（后续可能会实现热重载，可能吧）

## 快捷键设置

直接输入快捷键名称即可

格式：[Key1]+[Key2]+[Key3]...
如：Ctrl+D，Ctrl+Shift+D

## 设置无效

如果设置了不可用的快捷键，或者设置文件经过手动修改后出现格式问题，应用会无法启动，这时候需要手动删除设置文件后再重新启动应用。

设置文件路径：

- Linux `~/.config/cn.pylogmon.pot/config.json`
- Windows `C:\User\{用户名}\AppData\Roming\cn.pylogmon.pot\config`

<CommentService />