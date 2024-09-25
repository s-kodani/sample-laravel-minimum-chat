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

5. コード書き換え
laravel側とjs少し追記

6. Laravel Reverve起動
```
php artisan reverb:start --debug
```

7. vite ローカルサーバ起動
```
npm run dev
```

## READMEサンプルメモ
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:gcFK4EDHmxcKV+358IUSia0YLxjOJoWTzw34Mzd+hU4=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=reverb
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"

REVERB_APP_ID=655421
REVERB_APP_KEY=wkyrdcq2hqcbfwobvj2o
REVERB_APP_SECRET=xybzrycvi4jaocswjxaq
REVERB_HOST="localhost"
REVERB_PORT=8080
REVERB_SCHEME=http

VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
VITE_REVERB_HOST="${REVERB_HOST}"
VITE_REVERB_PORT="${REVERB_PORT}"
VITE_REVERB_SCHEME="${REVERB_SCHEME}"

```