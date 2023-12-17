$(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
      var checkedCheckboxes = $('input[type="checkbox"]:checked');
      if (checkedCheckboxes.length >= 3) {
        $('input[type="checkbox"]').not(':checked').prop('disabled', true);
      }
    });
  });