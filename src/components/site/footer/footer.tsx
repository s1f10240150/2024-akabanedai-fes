import { InstagramBrandIcon } from "@/components/icons/instagram-brand";
import { XBrandIcon } from "@/components/icons/x-brand";
import Link from "next/link";
import styles from "./footer.module.css";

const navigation = [
	{
		title: "赤羽台祭とは",
		href: undefined,
	},
	{
		title: "企画一覧",
		href: undefined,
	},
	{
		title: "タイムテーブル",
		href: undefined,
	},
	{
		title: "公式グッズ販売",
		href: undefined,
	},
	{
		title: "企画コンテスト",
		href: undefined,
	},
	{
		title: "ご来場の皆様へ",
		href: undefined,
	},
];

export function Footer() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.sitemap}>
				<a href="/" className={styles.top}>
					第八回 赤羽台祭
				</a>
				<ul className={styles.links}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<a href={href}>{title}</a>
							) : (
								<span className={styles.disabled}>{title}</span>
							)}
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.contact}>
				<p className={styles.email}>
					<span>お問い合わせ先</span>
					<span>support[at]akabanedai-fes.com</span>
				</p>
				<div className={styles.sns}>
					<a
						href="https://x.com/akabanedaifes/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<XBrandIcon className={styles.icon} />
					</a>
					<a
						href="https://www.instagram.com/akabanedaifes/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramBrandIcon className={styles.icon} />
					</a>
				</div>
				<Link href="/privacy-policy">プライバシーポリシー</Link>
			</div>
			<p>&copy;2024 赤羽台祭実行委員会</p>
		</footer>
	);
}