$(document).ready(function(){

let dropdown = $('#list-countries');
dropdown.empty();
dropdown.append('<option selected="true" disabled>Choose Country</option>');
dropdown.prop('selectedIndex', 0);

// Populate dropdown with list of countries
const countries_list = "json/country.json";
$.getJSON(countries_list, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry).text(entry));
  })
});

// Populate list of concepts
$('#list-concepts').empty();
const concepts_list = "json/concepts.json";
$.getJSON(concepts_list, function (data) {
  $.each(data, function (key,entry) {
    $.each(entry, function(pos, element) {
      $('#list-concepts').append(
              $('<li>').append(
               $('<input>').attr({type:'checkbox',value:element, class:'form-control', name:'concepts'})).append(
                $('<span>').text('  ' + element)));
    })
  })
});

// Populate list of tools
$('#list-tools').empty();
const tools_list = "json/tools.json";
$.getJSON(tools_list, function (data) {
  $.each(data, function (key,entry) {
    $.each(entry, function(pos, element) {
      $('#list-tools').append(
              $('<li>').append(
               $('<input>').attr({type:'checkbox',value:element, class:'form-control', name:'tools'})).append(
                $('<span>').text('  ' + element)));
    })
  })
});




});
