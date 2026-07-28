import { ref, watch } from 'vue';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

function applyTheme(theme: ThemePreference): void {
	if (theme === 'system') {
		document.documentElement.removeAttribute('data-theme');
	} else {
		document.documentElement.setAttribute('data-theme', theme);
	}
}

function savePreference(theme: ThemePreference): void {
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// localStorage unavailable
	}
}

export function useTheme() {
	function loadPreference(): ThemePreference {
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

	const preference = ref<ThemePreference>(loadPreference());

	watch(preference, (newPref) => {
		savePreference(newPref);
		applyTheme(newPref);
	});

	function setTheme(theme: ThemePreference): void {
		preference.value = theme;
	}

	return {
		preference,
		setTheme,
	};
}
