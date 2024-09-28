import type React from "react";

type IconProps = React.JSX.IntrinsicElements["svg"];

export function XBrandIcon(props: IconProps) {
	// Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
	return (
		<svg
			role="img"
			aria-label="x"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			stroke="currentColor"
			{...props}
		>
			<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
		</svg>
	);
}