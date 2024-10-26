"use client";

import { AppProgressBar } from "next-nprogress-bar";
import type { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{children}
			<AppProgressBar
				height="4px"
				color="#fffd00"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</>
	);
};

export default Providers;
