<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'reglos_wp5' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'reglos_wp5' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'pdkib41jaa' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'mysql10052.xserver.jp' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mB {3!0>jErb&6,,B*Rq%1EQ+1*-c_0f(4FuI#w>,5cbjWbr0T_c[$Zc]13{m~|z' );
define( 'SECURE_AUTH_KEY',  'BPMk6BO1: _Z>3L}O)bv$_/4~UW,jWQZIpN&,7@oECmYOg.^NUSC-Vexo`Bos0K8' );
define( 'LOGGED_IN_KEY',    '-_-x^.htM~}CQs<01/VV/!3FVXoLK`765Nk|ri-V!sc20H,JTpW p9]&7R1Uk,(e' );
define( 'NONCE_KEY',        'LgnS%Z?:2Kmf*qc,`Kv1w~B-T%wI!H+@g(64X]k>CsJE(iPhu4-l|<M(~q)#gTp3' );
define( 'AUTH_SALT',        ';|YIY}1 !Wb$RI.R[aUxTuvZcA9DLh`:FjZZGO)V!]%NVsU!fk-Fq}Vc@Pc-RLp,' );
define( 'SECURE_AUTH_SALT', 'v?-d 4@R!_y3kdJhNO$38lYgWz[>g{)AEq`Dc70:)I*=v>(4^qpeWG?0)Lrq-4Xg' );
define( 'LOGGED_IN_SALT',   'xm`Y<f&r<Ve&kF6SFY/Hre1uKe`>A%3}g0o*hPXz!{c4zr/bm,0En}HnA4gV%zkQ' );
define( 'NONCE_SALT',       'AYdL#1a$DseEDUj)fQzBTo~h2UD*kKT!Xws&gf&}>(|%5_cD|TAUTKh8K 8 n+_w' );
define( 'WP_CACHE_KEY_SALT','/9dj~rFJ7-FL0kSIXr87e9mW*/*%|I]FJqBw.tDRW7W{ Jqd>$NxKOvLMb_&e[m+' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
