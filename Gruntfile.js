module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            main: {
                files: [

                    {src: 'node_modules/angular/angular.js', dest: 'public/javascript/dependencies/angular/angular.js'},

                    {src: 'node_modules/lumx/core/js/lumx.js', dest: 'public/javascript/dependencies/lumx/lumx.js'},

                    {src: 'node_modules/jquery/dist/jquery.js', dest: 'public/javascript/dependencies/jquery/jquery.js'},

                    {src: 'node_modules/moment/min/moment-with-locales.js', dest: 'public/javascript/dependencies/moment/moment-with-locales.js'},

                    {src: 'node_modules/velocity/bin/velocity', dest: 'public/javascript/dependencies/velocity/velocity.js'},

                    {src: 'node_modules/lumx/core/scss/lumx.css', dest: 'public/stylesheets/dependencies/lumx/lumx.css'}



                ],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};

