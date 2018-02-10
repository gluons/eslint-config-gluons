/**
 * Transform rules object for displaying in page.
 *
 * @export
 * @param {object} rules Rules
 * @returns {object[]}
 */
export default function transformRules(rules) {
	return Object.keys(rules).map(name => {
		let value = rules[name];
		if (Array.isArray(value)) {
			if (value.length == 1) {
				return {
					name,
					value: value[0]
				};
			} else if (value.length == 2) {
				return {
					name,
					value: value[0],
					options: value[1]
				};
			} else {
				return {
					name,
					value: value[0],
					options: value.slice(1)
				};
			}
		} else {
			return {
				name,
				value
			};
		}
	});
}
