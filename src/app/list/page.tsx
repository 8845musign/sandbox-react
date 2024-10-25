"use client";

import type { MouseEvent } from "react";

import { useQueryState } from "nuqs";

export default function List() {
	const [name, setName] = useQueryState("name");

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setName(null);
	};

	return (
		<>
			<input value={name || ""} onChange={(e) => setName(e.target.value)} />
			<button type="reset" onClick={handleClick}>
				クリア
			</button>
			<p>{name || "誰か"}さん</p>
		</>
	);
}
