import { ref } from 'vue';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';

function applyTheme(theme: ThemePreference): void {
	if (typeof document === 'undefined') {
		return;
	}

	document.documentElement.classList.add('no-transition');

	if (theme === 'system') {
		document.documentElement.removeAttribute('data-theme');
	} else {
		document.documentElement.setAttribute('data-theme', theme);
	}

	requestAnimationFrame(() =>
		requestAnimationFrame(() => {
			document.documentElement.classList.remove('no-transition');
		})
	);
}

function loadPreference(): ThemePreference {
	if (typeof window === 'undefined') {
		return 'system';
	}

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			return stored;
		}
	} catch {
		// localStorage unavailable
	}

	return 'system';
}

// Module-level ref so every component that calls useTheme() shares the same state
const preference = ref<ThemePreference>(loadPreference());

export function useTheme() {
	function setTheme(theme: ThemePreference): void {
		preference.value = theme;

		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			// localStorage unavailable
		}

		applyTheme(theme);
	}

	// Keep DOM in sync when the composable is first used
	applyTheme(preference.value);

	return {
		preference,
		setTheme
	};
}
