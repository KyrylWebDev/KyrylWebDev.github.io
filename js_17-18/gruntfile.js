module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: 'js/*.js',

                dest: 'js/build/production.js',
            },
            dist: {
                src: [
                    'css/reset.css',
                    'css/loader-styles.css',
                    'css/style.css'
                ],
                dest: 'css/build/all-styles.css'
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/build',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/build',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['js/libs/*.js','js/script.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/*.css'],
                tasks: ['concat', 'cssmin'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','uglify','cssmin']);

};
