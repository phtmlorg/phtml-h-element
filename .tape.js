module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'basic:heading-level': {
		message: 'supports { headingLevel } usage',
		options: {
			headingLevel: 1,
			ariaLevel: false
		}
	},
	'basic:aria-level': {
		message: 'supports { ariaLevel, headingLevel } usage',
		options: {
			headingLevel: 2,
			ariaLevel: 2
		}
	}
};
