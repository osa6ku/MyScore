# ⛳️ マイスコア v1.0 PWA (GitHub Pages 新設用パッケージ)

Pixel 10a (Android Chrome) および iPhone 17 (iOS Safari) の「ホーム画面に追加」で、**専用アイコン（`72 SCORE`）付きの全画面ネイティブ風アプリ（PWA：アドレスバー非表示）** としてインストールするためのディレクトリです。

---

## 📌 なぜ GitHub Pages ラッパーが必要か？
Google Apps Script (`script.google.com/macros/s/.../exec`) はセキュリティ仕様上、ページ全体を Google の外部 `<iframe>` 内に包んで配信します。そのため、`script.google.com` のURLを直接スマホで「ホーム画面に追加」しても、OS側が内部の `manifest.json` や `apple-touch-icon`、Service Worker (`sw.js`) を認識できず、ただのブラウザショートカット（URLバーが表示される状態）になってしまいます。

この `pwa/` フォルダ内の6ファイルを **GitHub Pages** に配置し、その GitHub Pages の URL をスマホで開いて「ホーム画面に追加（アプリをインストール）」を行うことで、以下が100%有効になります：
1. **ご指定の `72 SCORE` アイコン** がホーム画面に高解像度で表示される
2. **ブラウザのURLアドレスバーが完全に消え、全画面（Standalone PWA）** で起動する
3. 新規GASの本番URL（`AKfycbxRNBWIhRi_lUI9jnzHMb48-w5ElyAz_vf2Bt-pF2D1q8d8_Kjdm1me77fYK3_PX1uo`）が最初から埋め込まれているため、**URL入力不要で即座にマイスコア v1.0 が起動**する

---

## 🚀 GitHub Pages 新設手順（約1分）

1. GitHub で新しい公開リポジトリ（例: `myscore`）を作成します。
2. この `pwa/` フォルダ内の **以下6ファイル** をそのままリポジトリ直下にアップロード（Add file ➔ Upload files）して Commit します：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
3. リポジトリの **Settings ➔ Pages** を開き、**Branch: `main` (`/root`) ➔ Save** を押します。
4. 1分ほどで発行される `https://<あなたのGitHubユーザー名>.github.io/myscore/` を **Pixel 10a** または **iPhone 17** で開き、「ホーム画面に追加（アプリをインストール）」を実行してください。
