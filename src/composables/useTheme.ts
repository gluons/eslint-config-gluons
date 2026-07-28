import { ref, watch, onMounted, onUnmounted } from 'vue';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

function getSystemTheme(): 'light' | 'dark' {
	if (typeof window === 'undefined') {
		return 'light';
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

function getStoredPreference(): ThemePreference | null {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			return stored;
		}
	} catch {
		// localStorage unavailable
	}
	return null;
}

function applyTheme(theme: ThemePreference): void {
	const resolved = theme === 'system' ? getSystemTheme() : theme;
	document.documentElement.setAttribute('data-theme', resolved);
}

export function useTheme() {
	const preference = ref<ThemePreference>(getStoredPreference() ?? 'system');

	let mediaQuery: MediaQueryList | null = null;

	function handleSystemChange(): void {
		if (preference.value === 'system') {
			applyTheme('system');
		}
	}

	watch(preference, (newPref) => {
		try {
			localStorage.setItem(STORAGE_KEY, newPref);
		} catch {
			// localStorage unavailable
		}
		applyTheme(newPref);
	});

	onMounted(() => {
		// Apply theme immediately on mount (inline script in index.html handles initial paint)
		applyTheme(preference.value);

		// Listen for system preference changes
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleSystemChange);
	});

	onUnmounted(() => {
		if (mediaQuery) {
			mediaQuery.removeEventListener('change', handleSystemChange);
		}
	});

	function setTheme(theme: ThemePreference): void {
		preference.value = theme;
	}

	return {
		preference,
		setTheme,
	};
}
