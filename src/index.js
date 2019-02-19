import phtml from 'phtml';

export default new phtml.Plugin('phtml-h-element', opts => {
	const name = 'name' in Object(opts) ? String(opts.name) : 'h';
	const sections = 'sections' in Object(opts)
		? [].concat(Array.from(opts.sections || []))
	: ['article', 'aside', 'nav', 'section'];
	const headingLevel = Object(opts).headingLevel
		? Number(opts.headingLevel)
	: false;
	const ariaLevel = 'ariaLevel' in Object(opts)
		? Number(opts.ariaLevel)
			? Number(opts.ariaLevel)
		: false
	: 1;

	return {
		Element(node) {
			if (node.type === 'element' && node.name === name) {
				if (!headingLevel && !ariaLevel) {
					return;
				}

				const currentLevel = getCurrentLevelFromNode(node, sections);

				if (headingLevel) {
					node.name = `h${Math.min(currentLevel + headingLevel - 1, 6)}`;
				}

				if (ariaLevel) {
					node.attrs.add('role', 'heading');
					node.attrs.add('aria-level', String(currentLevel + ariaLevel - 1));
				}
			}
		}
	};
});

function getCurrentLevelFromNode(node, sections) {
	let closest = node.parent;
	let currentLevel = 1;

	while (closest) {
		if (sections.includes(closest.name)) {
			++currentLevel;
		}

		closest = closest.parent;
	}

	return currentLevel
}
