# laravel-minimum-chat-sample

## 手順メモ
1. laravelインストール
```
composer create-project laravel/laravel app-base
```

途中出てくる選択肢は以下を選択
```

 ┌ Would you like to install a starter kit? ────────────────────┐
 │ No starter kit                                               │
 └──────────────────────────────────────────────────────────────┘

 ┌ Which testing framework do you prefer? ──────────────────────┐
 │ Pest                                                         │
 └──────────────────────────────────────────────────────────────┘

 ┌ Would you like to initialize a Git repository? ──────────────┐
 │ No                                                           │
 └──────────────────────────────────────────────────────────────┘
```
```
 ┌ Which database will your application use? ───────────────────┐
 │ SQLite                                                       │
 └──────────────────────────────────────────────────────────────┘

 ┌ Would you like to run the default database migrations? ──────┐
 │ Yes                                                          │
 └──────────────────────────────────────────────────────────────┘
```
※ WebSocket 通信で間接的に使用するジョブキュー用のテーブルである jobs テーブルも作成される。

2. プロジェクト構成の整理
```
shopt -s dotglob && mv app-base/* .
```
```
rm -rf .github
```

3. プロジェクトの起動確認
```
php artisan serve
```
`http://127.0.0.1:8000` でアクセスできたらOK

4. Lravel Revervのセットアップ
Lravel Revervは今年リリースされた Laravel 11 と一緒に登場した、 Laravel 公式の WebSocket サーバ機能

```
php artisan install:broadcasting
```

選択肢は以下
```
 ┌ Would you like to install Laravel Reverb? ───────────────────┐
 │ Yes                                                          │
 └──────────────────────────────────────────────────────────────┘
```
```
 ┌ Would you like to install and build the Node dependencies required for broadcasting? ┐
 │ Yes                                                                                  │
 └──────────────────────────────────────────────────────────────────────────────────────┘
```
※ `laravel-echo` と `pusher-js` がインストールされる

5. ジョブキュー起動
```
php artisan queue:work
```

6. Laravel Reverve起動
```
php artisan reverb:start --debug
```