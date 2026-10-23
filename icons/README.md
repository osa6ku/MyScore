# Golf Score App Icons (iPhone / Pixel 両対応)

元デザイン: A案(ボール×棒グラフ+赤旗)をフラットに再描画し、端まで色のある正方形マスターから書き出しています。
角丸は画像に焼き込んでいません。各OSが自分のマスクで切り抜くため、左右・上下で角丸の大きさが揃い、二重に丸くなることもありません。

## ファイル
- icon-master-1024.png ... 原本(正方形・全面塗り)
- icon.svg ... 編集可能なベクター版
- apple-touch-icon-180.png ... iPhone/iPad のホーム画面用 (180x180)。iOSが角丸を付けます
- pwa-icon-192.png / pwa-icon-512.png ... PWA用 (purpose: any)
- maskable-icon-512.png ... Android/Pixel用 maskable。図柄を80%に縮小しセーフゾーン内(中央80%)に収めています
- android-adaptive-foreground-432.png ... Android アダプティブアイコン前景(透明背景、図柄72%)
- android-adaptive-background-432.png ... 同 背景(全面ティール #00967F)。背景色だけでも指定可
- icon-rounded-preview-512.png ... 角丸プレビュー専用。全ての角で同じ半径(画面幅の約22.4%)を使い、左右対称を数値検証済み(差分0)
- favicon-48.png

## 使い方
- iPhone: <link rel="apple-touch-icon" href="apple-touch-icon-180.png">
- PWA: manifest-icons-snippet.json の icons 配列を manifest に取り込む
- Pixel(アダプティブ): foreground/background を res/mipmap-anydpi-v26 の adaptive-icon で参照、または maskable をそのまま使用

## 色
- 背景/バー: #00967F
- 旗: #EE2724
