/* global module */

module.exports = function(grunt) {
	var path = require( 'path' ),
		cfg = {
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			checkHooks: {
				command: 'diff --brief .git/hooks/pre-commit tools/git-hooks/pre-commit',
				options: {
					stdout: true
				}
			},
		},
		notify: {
			watch_sass: {
				options: {
					title: 'Compilation done!',
					message: 'Sass, Autoprefixer, and Janus have finished running.'
				}
			}
		},
		phplint: {
			files: [
				'*.php',
				'_inc/*.php',
				'_inc/**/*.php',
				'modules/*.php',
				'modules/**/*.php',
				'views/**/*.php',
				'3rd-party/*.php'
			]
		},
		concat: {
			options: {
			},
			frontEndModules: {
				src: [
					'modules/carousel/jetpack-carousel.css',
					'modules/carousel/jetpack-carousel-ie8fix.css',
					'modules/contact-form/css/grunion.css',
					'modules/gplus-authorship/style.css',
					'modules/infinite-scroll/infinity.css',
					'modules/likes/style.css',
					'modules/related-posts/related-posts.css',
					'modules/sharedaddy/sharing.css',
					'modules/shortcodes/css/slideshow-shortcode.css',
					'modules/shortcodes/css/style.css', // TODO: Should be renamed to shortcode-presentations
					'modules/subscriptions/subscriptions.css',
					'modules/tiled-gallery/tiled-gallery.css',
					'modules/widgets/wordpress-post-widget/style.css',
					'modules/widgets/gravatar-profile.css',
					'modules/widgets/widget-grid-and-list.css',
					'modules/widgets/widgets.css', // TODO Moved to image-widget/style.css
				],
				dest: "css/jetpack.css"
			}
		},
		cssmin: {
			options: {
			},
			frontEndModules: {
				options: {
					banner: '/*!\n'+
							'* Do not modify this file directly.  It is concatenated from individual module CSS files.\n'+
							'*/'
				},
				src: [
					'css/jetpack.css'
				],
				dest: "css/jetpack.css"
			},
			adminModules: {
				options: {
				},
				files: {
					'modules/after-the-deadline/atd.min.css': 'modules/after-the-deadline/atd.css',
					'modules/after-the-deadline/tinymce/css/content.min.css': 'modules/after-the-deadline/tinymce/css/content.css',
					'modules/contact-form/css/menu-alter.min.css': 'modules/contact-form/css/menu-alter.css',
					'modules/custom-css/csstidy/cssparse.min.css': 'modules/custom-css/csstidy/cssparse.css',
					'modules/custom-css/csstidy/cssparsed.min.css': 'modules/custom-css/csstidy/cssparsed.css',
					'modules/custom-css/custom-css/css/codemirror.min.css': 'modules/custom-css/custom-css/css/codemirror.css',
					'modules/custom-css/custom-css/css/css-editor.min.css': 'modules/custom-css/custom-css/css/css-editor.css',
					'modules/custom-css/custom-css/css/use-codemirror.min.css': 'modules/custom-css/custom-css/css/use-codemirror.css',
					'modules/omnisearch/omnisearch.min.css': 'modules/omnisearch/omnisearch.css',
					'modules/omnisearch/omnisearch-jetpack.min.css': 'modules/omnisearch/omnisearch-jetpack.css',
					'modules/post-by-email/post-by-email.min.css': 'modules/post-by-email/post-by-email.css',
					'modules/publicize/assets/publicize.min.css': 'modules/publicize/assets/publicize.css',
					'modules/sharedaddy/admin-sharing.min.css': 'modules/sharedaddy/admin-sharing.css',
					'modules/videopress/videopress-admin.min.css': 'modules/videopress/videopress-admin.css',
					'modules/widget-visibility/widget-conditions/widget-conditions.min.css': 'modules/widget-visibility/widget-conditions/widget-conditions.css',
					'modules/widgets/gallery/css/admin.min.css': 'modules/widgets/gallery/css/admin.css',
				}
			},
		},
		cssjanus: {
			core: {
				options: {
					swapLtrRtlInUrl: false
				},
				expand: true,
				ext: '-rtl.css',
				src: [
					'css/*.css',
					'!css/*-rtl.css',
					'!css/*.min.css',
					'!css/jetpack.css',
					'!css/jetpack-rtl.css',
				]
			},
			coreMin: {
				options: {
					swapLtrRtlInUrl: false
				},
				expand: true,
				ext: '-rtl.min.css',
				src: [
					'css/*.min.css',
					'!css/*-rtl.min.css',
					'!css/jetpack.css',
					'!css/jetpack-rtl.css',
				]
			},
			frontEndModules: {
				options: {
					swapLtrRtlInUrl: false
				},
				expand: true,
				ext: '-rtl.css',
				src: [
					'css/jetpack.css',
					'!css/jetpack-rtl.css'
				]
			},
			adminModules: {
				options: {
					swapLtrRtlInUrl: false
				},
				expand: true,
				ext: '-rtl.min.css',
				src: [
					'modules/after-the-deadline/atd.min.css',
					'modules/after-the-deadline/tinymce/css/content.min.css',
					'modules/contact-form/css/menu-alter.min.css',
					'modules/custom-css/csstidy/cssparse.min.css',
					'modules/custom-css/csstidy/cssparsed.min.css',
					'modules/custom-css/custom-css/css/codemirror.min.css',
					'modules/custom-css/custom-css/css/css-editor.min.css',
					'modules/custom-css/custom-css/css/use-codemirror.min.css',
					'modules/omnisearch/omnisearch.min.css',
					'modules/omnisearch/omnisearch-jetpack.min.css',
					'modules/post-by-email/post-by-email.min.css',
					'modules/publicize/assets/publicize.min.css',
					'modules/sharedaddy/admin-sharing.min.css',
					'modules/videopress/videopress-admin.min.css',
					'modules/widget-visibility/widget-conditions/widget-conditions.min.css',
					'modules/widgets/gallery/css/admin.min.css',
				],
			},
			adminModulesExpanded: {
				options: {
					swapLtrRtlInUrl: false
				},
				expand: true,
				ext: '-rtl.css',
				src: [
					'modules/after-the-deadline/atd.css',
					'modules/after-the-deadline/tinymce/css/content.css',
					'modules/contact-form/css/menu-alter.css',
					'modules/custom-css/csstidy/cssparse.css',
					'modules/custom-css/csstidy/cssparsed.css',
					'modules/custom-css/custom-css/css/codemirror.css',
					'modules/custom-css/custom-css/css/css-editor.css',
					'modules/custom-css/custom-css/css/use-codemirror.css',
					'modules/omnisearch/omnisearch.css',
					'modules/omnisearch/omnisearch-jetpack.css',
					'modules/post-by-email/post-by-email.css',
					'modules/publicize/assets/publicize.css',
					'modules/sharedaddy/admin-sharing.css',
					'modules/videopress/videopress-admin.css',
					'modules/widget-visibility/widget-conditions/widget-conditions.css',
					'modules/widgets/gallery/css/admin.css',
				],
			}
		},
		jshint: {
			options: grunt.file.readJSON('.jshintrc'),
			src: [
				'_inc/*.js',
				'modules/*.js',
				'modules/**/*.js'
			]
		},
		sass: {
			expanded: {
				options: {
					style: 'expanded',
					banner: '/*!\n'+
							'* Do not modify this file directly.  It is compiled Sass code.\n'+
							'* @see: jetpack/_inc/jetpack.scss\n'+
							'*/'
				},
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			},
			minified: {
				options: {
					style: 'compressed',
					sourcemap: true
				},
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		autoprefixer: {
			options: {
				// map: true
			},
			core: {
				options: {
					// Target-specific options go here.
					// browser-specific info: https://github.com/ai/autoprefixer#browsers
					// DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
					map: true,
					browsers: [
						'> 1%',
						'last 2 versions',
						'ff 17',
						'opera 12.1',
						'ie 8',
						'ie 9'
					]
				},
				src: [
					'css/*.css',
					'!css/jetpack.css',
					'!css/jetpack-rtl.css',
				],
			},
			frontEndModules: {
				options: {
					// Target-specific options go here.
					// browser-specific info: https://github.com/ai/autoprefixer#browsers
					// DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
					browsers: [
						'> 1%',
						'last 2 versions',
						'ff 17',
						'opera 12.1',
						'ie 8',
						'ie 9'
					]
				},
				src: 'css/jetpack.css'
			},
			adminModules: {
				options: {
					// Target-specific options go here.
					// browser-specific info: https://github.com/ai/autoprefixer#browsers
					// DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
					browsers: [
						'> 1%',
						'last 2 versions',
						'ff 17',
						'opera 12.1',
						'ie 8',
						'ie 9'
					]
				},
				src: [
					'modules/after-the-deadline/atd.min.css',
					'modules/after-the-deadline/tinymce/css/content.min.css',
					'modules/contact-form/css/menu-alter.min.css',
					'modules/custom-css/csstidy/cssparse.min.css',
					'modules/custom-css/csstidy/cssparsed.min.css',
					'modules/custom-css/custom-css/css/codemirror.min.css',
					'modules/custom-css/custom-css/css/css-editor.min.css',
					'modules/custom-css/custom-css/css/use-codemirror.min.css',
					'modules/omnisearch/omnisearch.min.css',
					'modules/omnisearch/omnisearch-jetpack.min.css',
					'modules/post-by-email/post-by-email.min.css',
					'modules/publicize/assets/publicize.min.css',
					'modules/sharedaddy/admin-sharing.min.css',
					'modules/videopress/videopress-admin.min.css',
					'modules/widget-visibility/widget-conditions/widget-conditions.min.css',
					'modules/widgets/gallery/css/admin.min.css',
				]
			},
		},
		watch: {
			sass: {
				files: [
					'scss/*.scss',
					'scss/**/*.scss'
				],
				tasks: [
					'sass',
					'autoprefixer:core',
					'cssjanus:core',
					'cssjanus:min',
					'notify:watch_sass'
					'cssjanus:coreMin'
				],
				options: {
					spawn: false
				}
			},
			css: { // concatenates modules CSS into css/jetpack.css
				files: [
					'modules/**/*.css',
				],
				tasks: [
					// Front-end module css (jetpack.css)
					'concat:frontEndModules',
					'autoprefixer:frontEndModules',
					'cssmin:frontEndModules',
					'cssjanus:frontEndModules',

					// Admin module css
					'cssmin:adminModules',
					'autoprefixer:adminModules',
					'cssjanus:adminModules',
					'cssjanus:adminModulesExpanded',
				],
				options: {
					spawn: false
				}
			},
			php: {
				files: [
					'*.php',
					'_inc/*.php',
					'_inc/**/*.php',
					'modules/*.php',
					'modules/**/*.php',
					'views/**/*.php',
					'3rd-party/*.php'
				],
				tasks: ['phplint'],
				options: {
					spawn: false
				}
			},
			js: {
				files: [
					'_inc/*.js',
					'modules/*.js',
					'modules/**/*.js'
				],
				tasks: ['jshint'],
				options: {
					spawn: false
				}
			}
		},
		makepot: {
			jetpack: {
				options: {
					domainPath: '/languages',
					exclude: [
						'node_modules',
						'tests',
						'tools'
					],
					mainFile: 'jetpack.php',
					potFilename: 'jetpack.pot',
					i18nToolsPath: path.join( __dirname , '/tools/' )
				}
			}
		},
		addtextdomain: {
			jetpack: {
				options: {
					textdomain: 'jetpack',
				},
				files: {
					src: [
						'*.php',
						'**/*.php',
						'!node_modules/**',
						'!tests/**',
						'!tools/**'
					]
				}
			}
		}
	};

	grunt.initConfig( cfg );

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-phplint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wp-i18n');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-cssjanus');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [
		// Admin css
		'sass',
		'autoprefixer:core',
		'cssjanus:core',
		'cssjanus:coreMin'

		// Front-end module css (jetpack.css)
		'concat:frontEndModules',
		'autoprefixer:frontEndModules',
		'cssmin:frontEndModules',
		'cssjanus:frontEndModules',

		// Admin module css
		'cssmin:adminModules',
		'autoprefixer:adminModules',
		'cssjanus:adminModules',
		'cssjanus:adminModulesExpanded',

		// Precommit stuff
		'shell',
		'phplint',
		'jshint',

		// Starts watch
		'watch'
	]);

	grunt.registerTask('precommit', [
		// Admin css
		'sass',
		'autoprefixer:core',
		'cssjanus:core',
		'cssjanus:coreMin'

		// Front-end module css (jetpack.css)
		'concat:frontEndModules',
		'autoprefixer:frontEndModules',
		'cssmin:frontEndModules',
		'cssjanus:frontEndModules',

		// Admin module css
		'cssmin:adminModules',
		'autoprefixer:adminModules',
		'cssjanus:adminModules',
		'cssjanus:adminModulesExpanded',

		// Precommit stuff
		'shell',
		'phplint',
		'jshint',

		// Precommit stuff
		'shell',
		'phplint',
		'jshint',
	]);
};
