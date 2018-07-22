/**
 * Transform rules object for displaying in page.
 *
 * @export
 * @param {{ [key: string]: any }} rules Rules
 * @param {string} [prefix] Rule prefix
 * @returns {{ name: string, realName: string, value: string, options?: any }[]}
 */
export default function transformRules(rules, prefix) {
	return Object.keys(rules).map(name => {
		let realName = prefix ? name.replace(`${prefix}/`, '') : name;
		let value = rules[name];

		if (Array.isArray(value)) {
			if (value.length == 1) {
				return {
					name,
					realName,
					value: value[0]
				};
			} else if (value.length == 2) {
				return {
					name,
					realName,
					value: value[0],
					options: value[1]
				};
			} else {
				return {
					name,
					realName,
					value: value[0],
					options: value.slice(1)
				};
			}
		} else {
			return {
				name,
				realName,
				value
			};
		}
	});
}
