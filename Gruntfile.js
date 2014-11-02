module.exports = function(grunt) {
    var appfiles = ['index.js','lib/**/*.js','models/**/*.js', 'test/**/*.js'];

    grunt.initConfig({
        jshint: {
            files: appfiles
        },
        watch: {
            files: appfiles,
            tasks: ['jshint']
        },
        dependo: {
            main: {
                fileName: 'main.html'
            },
            options: {
                targetPath: 'lib/',
                outputPath: './',
                fileName : 'dependencies.html',
                format: 'amd'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dependo');
}