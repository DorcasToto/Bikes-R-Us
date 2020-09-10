$("document").ready(function () {
  $("#datepicker").datepicker({
    firstDay: 1,
    showButtonPanel: true,
    currentText: "Today",
    closeText: "Close",
    constrainInput: true,
    defaultDate: 3,
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd/mm/yy",
  });
  $("#timepicker").timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});