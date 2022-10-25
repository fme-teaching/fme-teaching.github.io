$(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var afterFilter = function(result, jQ){
    $('#total_courses').text(result.length);

    var checkboxes  = $("#course_concepts_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = $(this), count = 0

      if(result.length > 0){
        count = jQ.where({ 'course_concepts': c.val() }).count;
      }
      c.next().text(c.val() + ' (' + count + ')')
    });

    var checkboxes  = $("#course_tools_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = $(this), count = 0

      if(result.length > 0){
        count = jQ.where({ 'course_tools': c.val() }).count;
      }
      c.next().text(c.val() + ' (' + count + ')')
    });

    var checkboxes  = $("#course_countries_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = $(this), count = 0

      if(result.length > 0){
        count = jQ.where({ 'course_country': c.val() }).count;
      }
      c.next().text(c.val() + ' (' + count + ')')
    });

  }

  var FJS = FilterJS(courses, '#courses', {
    template: '#course-template',
    search: { ele: '#searchbox' },
    //search: {ele: '#searchbox', fields: ['course_tools']}, // With specific fields
    callbacks: {
      afterFilter: afterFilter 
    },
    pagination: {
      container: '#pagination',
      visiblePages: 5,
      perPage: {
        values: [24, 48, 96],
        container: '#per_page'
      },
    }
  });

  FJS.addCriteria({field: 'course_year_level', ele: '#course_year_level_filter', all: 'all'});
  FJS.addCriteria({field: 'course_concepts', ele: '#course_concepts_criteria input:checkbox'});
  FJS.addCriteria({field: 'course_tools', ele: '#course_tools_criteria input:checkbox'});
  FJS.addCriteria({field: 'course_country', ele: '#course_countries_criteria input:checkbox'});

  window.FJS = FJS;
});

function initSliders(){
  $('#course_concepts_criteria :checkbox').prop('checked', true);
  $('#all_course_concepts').on('click', function(){
    $('#course_concepts_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });

  $('#course_tools_criteria :checkbox').prop('checked', true);
  $('#all_course_tools').on('click', function(){
    $('#course_tools_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });

  $('#course_countries_criteria :checkbox').prop('checked', true);
  $('#all_course_countries').on('click', function(){
    $('#course_countries_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
