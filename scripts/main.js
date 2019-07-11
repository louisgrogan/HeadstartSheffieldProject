var listOfALevels = [
  'Mathematics',
  'Further Mathematics',
  'Computer Science',
  'Physics'
];

var listOfGrades = [
  'A*',
  'A',
  'B',
  'C',
  'D',
  'E'
];

var counter = 0;

function createALevel() {
  var alevel = $('<div class="alevel input-group row c-' + counter + '"></div>');
  var subjectSelect = $('<select class="custom-select col-8 subject-select"></select>');
  subjectSelect.append($('<option selected>Subject</option>'));
  for (i = 0; i < listOfALevels.length; i++) {
    subjectSelect.append($('<option value="' + listOfALevels[i] + '">' + listOfALevels[i] + '</option>'));
  }
  var gradeSelect = $('<select class="custom-select col-2 grade-select"></select>');
  gradeSelect.append($('<option selected>Predicted grade</option>'));
  for (i = 0; i < listOfGrades.length; i++) {
    gradeSelect.append($('<option value="' + listOfGrades[i] + '">' + listOfGrades[i] + '</option>'));
  }
  var spacer
  var removeSubject = $('<button class="btn btn-danger col-1 offset-1 remove-subject" onclick="removeALevel(' + counter + ')">Remove</button>');
  alevel.append(subjectSelect);
  alevel.append(gradeSelect);
  alevel.append(removeSubject);
  $('.alevel-container').append(alevel);
  $('.show-prefs').removeClass('hidden');
  counter += 1;
}

function removeALevel(c) {
  $('.c-' + c).remove();
  if ($('.alevel').length == 0) {
    $('.show-prefs').addClass('hidden');
  }
}
