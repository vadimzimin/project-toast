import React from "react";

function useEscapeKey({ onKeydown }) {
	React.useEffect(() => {
		const handleKeydown = (e) => {
			if (e.key === "Escape") {
				onKeydown();
			}
		}

		window.addEventListener("keydown", handleKeydown);

		return () => window.removeEventListener("keydown", handleKeydown);
	}, [onKeydown]);

	return {};
}

export default useEscapeKey;