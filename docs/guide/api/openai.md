# OpenAI
> 教程来源于[划词翻译](https://hcfy.app/)，一个很棒的网页翻译插件

> 文档内容可能会过时，请以 OpenAI 官网说明为准。

## 价格
OpenAI API（gpt-3.5-turbo）一次性提供 5 美元的免费额度，而它的价格为 0.002 美元 / 1000 tokens，其中 1000 tokens 大约为 750 个英文单词。有关 “token” 的详细解释见 OpenAI 文档：[Managing tokens](https://platform.openai.com/docs/guides/chat/managing-tokens)

> 注意：OpenAI 提供的免费额度是会在三个月后过期清零的，具体过期时间可以在 [https://platform.openai.com/account/usage](https://platform.openai.com/account/usage) 查看。

## 申请步骤
### 第一步：准备一个 OpenAI 账号
请自行准备一个 OpenAI 账号。

### 第二步：创建 Secret Key
打开 https://platform.openai.com/account/api-keys，如果没登录的话会让你登录
点击【Create new secret key】按钮，会出现一个弹窗，里面显示了 Secret Key
复制 Secret Key
### 第三步：在pot中填写 OpenAI 的 Secret Key
将 Secret Key 填写进pot的【设置页】-【接口设置】-【Open AI ApiKey】即可。

## 关于Open AI api连接不上的解决方案

### 方法1：通过Cloudflare反向代理
参考 [使用 Cloudflare Workers 解决 OpenAI 和 ChatGPT 的 API 无法访问的问题](https://github.com/noobnooc/noobnooc/discussions/9)

pot 已经提供了自定义域名的设置，在设置中填写你自己的域名即可。

### 方法2：待补充

## 相关链接
[OpenAI 开放平台](https://platform.openai.com/) 

[GhatGPT API（gpt-3.5-turbo）定价文档](https://openai.com/pricing)


<CommentService />