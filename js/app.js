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

});

// function booking() {
  
//   // const mechanic = document.querySelector("#service_id").value 
//   // const service = document.querySelector("#service_id2").value
//   // const location = document.querySelector("#service_id3").value
//   // const dateOf = document.querySelector("#datepicker").value

// }

$(document).ready(function(){

  var mechanicPrice = $("#mechanic").val();
  var locationPrice = $("#location").val();
  var servicePrice = $("#service").val();
  function Book(mechanic, service, location, initial_date){
    this.mechanicPrice = mechanic;
    this.servicePrice = service;
    this.locationPrice = location;
  }

  // Book();

  Book.prototype.getBookingPrice = function(){
    return this.getMechanicPrice() + this.getLocationPrice();
  };

  Book.prototype.getMechanicPrice = function(){
    if (this.service === "Fixing Bike"){
      if(this.mechanic === "Jim Collins"){
        return 500;
    } else if(this.mechanic === "Jane Auma"){
      return 550;
    }else {
      return 450;
    }
    }else if (this.service === "Repair Tires"){
      if(this.mechanic === "Jim Collins"){
        return 300;
    } else if(this.mechanic === "Jane Auma"){
      return 350;
    }else {
      return 400;
    }
    } else if (this.service === "Washing Bike"){
      if(this.mechanic === "Jim Collins"){
        return 50;
    } else if(this.mechanic === "Jane Auma"){
      return 50;
    }else {
      return 90;
    }
    } else if (this.service === "Tire Pressure") {
      if (this.mechanic === "Jim Collins"){
        return 0;
      } else if (this.mechanic === "Jane Auma"){
        return 0;
      }else{
        return 10;
      }
    } else if(this.service === "Remove Grease"){
      if(this.mechanic === "Jim Collins"){
        return 100;
    } else if(this.mechanic === "Jane Auma"){
      return 150;
    }else {
      return 150;
    }
    } else{
      if(this.mechanic === "Jim Collins"){
        return 3000;
    } else if(this.mechanic === "Jane Auma"){
      return 3500;
    }else {
      return 4500;
    }
    }

  };

  Book.prototype.getLocationPrice = function(){
    if(this.location === "inhouse"){
      return 0;
    }else{
      return 250;
    }
    };

  $("#frmSelectService").submit(function(e){
    e.preventDefault();
    alert("hey there");
  });

  
  });