async function loadMessage(): Promise<string> {
	return Promise.resolve('hi');
}

function logLater(): void {
	// Missing await on the async call should violate no-floating-promises.
	loadMessage();
}

logLater();
