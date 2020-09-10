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
  function Book(mechanic, service, location){
    this.mechanic = mechanic;
    this.service = service;
    this.location = location;
  }



  Book.prototype.getBookingPrice = function(){
    return this.getMechanicPrice() + this.getLocationPrice();
  };

  Book.prototype.getMechanicPrice = function(){
    if (this.service === "Fixing Bike") {
        return 500;
      }else if(this.service === "Repair Tires") {
        return 300;
      }else if(this.service === "Washing Bike"){
        return 150;
      }else if(this.service === "Tire Pressure"){
        return 50;
      }else if(this.service === "Remove Grease") {
        return 200;
      }else{
        return 2000;
      }
    };
  Book.prototype.getLocationPrice = function(){
    if (this.location === "inhouse"){
      return 0;
    }else{
      return 200;
    }
  };
    // if (this.servicePrice === "Fixing Bike"){
    //   if(this.mechanicPrice === "Jim Collins"){
    //     return 500;
    // } else if(this.mechanicPrice === "Jane Auma"){
    //   return 550;
    // }else {
    //   return 450;
    // }
    // }else if (this.servicePrice === "Repair Tires"){
    //   if(this.mechanicPrice === "Jim Collins"){
    //     return 300;
    // } else if(this.mechanicPrice === "Jane Auma"){
    //   return 350;
    // }else {
    //   return 400;
    // }
    // } else if (this.servicePrice === "Washing Bike"){
    //   if(this.mechanicPrice === "Jim Collins"){
    //     return 50;
    // } else if(this.mechanicPrice === "Jane Auma"){
    //   return 50;
    // }else {
    //   return 90;
    // }
    // } else if (this.servicePrice === "Tire Pressure") {
    //   if (this.mechanicPrice === "Jim Collins"){
    //     return 0;
    //   } else if (this.mechanicPrice === "Jane Auma"){
    //     return 0;
    //   }else{
    //     return 10;
    //   }
    // } else if(this.servicePrice === "Remove Grease"){
    //   if(this.mechanicPrice === "Jim Collins"){
    //     return 100;
    // } else if(this.mechanicPrice === "Jane Auma"){
    //   return 150;
    // }else {
    //   return 150;
    // }
    // } else{
    //   if(this.mechanicPrice === "Jim Collins"){
    //     return 3000;
    // } else if(this.mechanicPrice === "Jane Auma"){
    //   return 3500;
    // }else {
    //   return 4500;
    // }
    // }

  //};

  // Book.prototype.getLocationPrice = function(){
  //   if(this.locationPrice === "inhouse"){
  //     return 0;
  //   }else{
  //     return 250;
  //   }
  //   };

  
  $(".submit-btn").click(function(e){
    e.preventDefault();
    // alert("Hello Andale your mechanic price is " + book.getBookingPrice());
    var mechanicPrice = $("#service_id").val();
    var locationPrice = $("#service_id3").val();
    var servicePrice = $("#service_id2").val();
  
  
   var book  = new Book(mechanicPrice, servicePrice, locationPrice);
    console.log(book.getBookingPrice());
  });

});