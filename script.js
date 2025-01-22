// Crop information and data
const cropData = {
  Wheat: {
      description: "Wheat is a staple crop used for making flour and bread.",
      video: "https://www.youtube.com/embed/JN0ICendQns",
      precautions: [
          "Ensure timely sowing during October-November.",
          "Irrigate the crop at critical growth stages.",
          "Monitor for rust and other fungal diseases."
      ]
  },
  Rice: {
      description: "Rice is a primary food source for more than half the world's population.",
      video: "https://www.youtube.com/embed/FW_bw9jdrlQ",
      precautions: [
          "Use high-yielding varieties for planting.",
          "Maintain proper water levels in the paddy field.",
          "Apply nitrogen fertilizers in split doses."
      ]
  },
  Maize: {
      description: "Maize is used for food, fodder, and fuel worldwide.",
      video: "https://www.youtube.com/embed/nfMLKP1nXK0",
      precautions: [
          "Plant maize at the correct depth of 3-5 cm.",
          "Keep the soil weed-free for the first 4-6 weeks.",
          "Protect against pests like stem borers."
      ]
  },
  Cotton: {
      description: "Cotton is a fiber crop used in textiles.",
      video: "https://www.youtube.com/embed/eN-TqqBQOAk",
      precautions: [
          "Select pest-resistant cotton varieties.",
          "Practice crop rotation to reduce pest buildup.",
          "Monitor closely for pink bollworm infestation."
      ]
  },
  Soybean: {
      description: "Soybean is used for oil and protein-rich food.",
      video: "https://www.youtube.com/embed/9kW5vm0yj40",
      precautions: [
          "Ensure seed inoculation with Rhizobium culture.",
          "Avoid waterlogging during early growth stages.",
          "Apply phosphorus fertilizers for better yield."
      ]
  }
};

// Display crop details, video, and precautions
function displayCropDetails() {
  const cropSelect = document.getElementById("crop-select");
  const selectedCrop = cropSelect.value;
  const cropDetails = document.getElementById("crop-details");
  const videoContainer = document.getElementById("video-container");
  const precautionList = document.getElementById("precaution-list");

  if (selectedCrop && cropData[selectedCrop]) {
      const crop = cropData[selectedCrop];

      // Display crop description
      cropDetails.textContent = crop.description;

      // Display crop video
      videoContainer.innerHTML = `<iframe src="${crop.video}" width="300" height="200" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      // Display precautions
      precautionList.innerHTML = crop.precautions.map(item => `<li>${item}</li>`).join("");
  } else {
      cropDetails.textContent = "Please select a crop.";
      videoContainer.innerHTML = "";
      precautionList.innerHTML = "";
  }
}
