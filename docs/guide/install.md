# 安装
## Linux
### Debian
在 [Release](https://github.com/Pylogmon/pot/releases) 下载最新deb包安装

> **注意：低版本系统请下载 `pot_<version>_amd64_universal.deb` 否则会因为`glibc`版本过低无法运行**

### Arch
已提供 [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation) 包

## Windows
在 [Release](https://github.com/Pylogmon/pot/releases) 下载最新msi安装包安装
## 手动安装

### 所需工具
- rust 1.67.0
- pnpm
- nodejs 19
### 编译步骤

1. 克隆仓库
```bash
git clone https://github.com/Pylogmon/pot.git
```

2. 安装构建依赖
```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf
```

3. 开始编译
```bash
cd pot

pnpm install # 安装前端依赖

pnpm tauri build # 编译打包
```
4. 安装
编译完成之后，可以在`src-tauri/target/Release/bundle`目录下找到队友平台的安装包

<CommentService />