AFRAME.registerComponent("markerhandler", {
    init: async function () {
      this.el.addEventListener("markerFound", () => {
        console.log("Marker Found");
        this.handleMarkerFound();
      });
      this.el.addEventListener("markerLost", ()=>{
        console.log("market lost");
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function(){
      var buttonSelect = document.getElementById("button-div");
      buttonSelect.style.display = "flex";
      var buttonOrder = document.getElementById("order-button");
      var buttonRate = document.getElementById("summary-button");
  
      buttonOrder.addEventListener("click",()=>{
        swal({
          icon: "./assets/thumbsUp.jpg",
          title: "Order Placed",
          text: "Thank You.\n Your Order has been placed.",
        })
      })
      buttonRate.addEventListener("click",()=>{
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "In Development. Will Be featured in the next version",
        })
      })
    },
    handleMarkerLost: function(){
      var buttonSelect = document.getElementById("button-div");
      buttonSelect.style.display = "none";
    },
  
  })