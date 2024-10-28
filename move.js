function setup() {
    // Create the canvas
    createCanvas(500,500);
  
    // Set background to black
    background(0);
  
    // Set width of the lines
    strokeWeight(20);
  
    // Set color mode to hue-saturation-brightness (HSB)
    colorMode(RGB);
  
    // Set screen reader accessible description
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    let lineHue = mouseX - mouseY;
    stroke(74, 65, 42);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }