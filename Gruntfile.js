module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
          options: {
              preserveComments: false,
              compress: {
                  drop_console: true
              },
              banner: '/*! compress js file date : ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
          },
          files: [{
              expand: true,
              cwd: 'src/',
              src: '**/*.js',
              dest: 'build/'
          }]
      }
    },
    htmlmin: {
        build: {
            options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
            },  
            files: [{
                expand: true,
                cwd: 'src/',
                src: '**/*.html',
                dest: 'build/'
            }]
        }
    }
  });
  
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 加载包含 "htmlmin" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify', 'htmlmin']);
};
