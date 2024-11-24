// Update brightness value
document.getElementById('brightness-slider').addEventListener('input', function () {
    const brightness = this.value;
    document.getElementById('brightness-value').innerText = brightness;
    console.log('Brightness: ' + brightness);
  });
  
  // Update contrast value
  document.getElementById('contrast-slider').addEventListener('input', function () {
    const contrast = this.value;
    document.getElementById('contrast-value').innerText = contrast;
    console.log('Contrast: ' + contrast);
  });
  
  // Apply lighting preset
  function applyPreset(preset) {
    console.log(`Applying ${preset} preset.`);
    // You can customize this part to update brightness/contrast values based on preset
    if (preset === 'morning') {
      document.getElementById('brightness-slider').value = 80;
      document.getElementById('contrast-slider').value = 60;
    } else if (preset === 'evening') {
      document.getElementById('brightness-slider').value = 40;
      document.getElementById('contrast-slider').value = 50;
    } else if (preset === 'movie') {
      document.getElementById('brightness-slider').value = 30;
      document.getElementById('contrast-slider').value = 70;
    } else if (preset === 'party') {
      document.getElementById('brightness-slider').value = 100;
      document.getElementById('contrast-slider').value = 90;
    }
  }
  
  // Update color temperature
  document.getElementById('color-temperature-slider').addEventListener('input', function () {
    const temp = this.value;
    document.getElementById('color-temperature-value').innerText = `${temp}K`;
    console.log('Color Temperature: ' + temp);
  });
  
  // Handle schedule setting
  function setSchedule() {
    const scheduleTime = document.getElementById('schedule-time').value;
    console.log('Schedule set for: ' + scheduleTime);
  }
  
  // Color picker functionality
  function updateColor() {
    const color = document.getElementById('color-wheel').value;
    console.log('Selected Color: ' + color);
  }
  