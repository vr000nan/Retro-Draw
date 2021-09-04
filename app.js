// Module One

function makeGrid() {
  for (index = 0; index < 64; index++) {
    const newDiv = $("<div>").attr("class", "cell");

    $(".grid").append(newDiv);
  }
}
makeGrid();

function makePalette() {
  const PALETTE = [
    '#ffffff',
    "#ffc0cb",
    '#ff8095',
    '#ff3355',
    '#e60026',
    '#99001a',
    '#4d000d',
    '#000000',
  ];

  for (let i = 0; i < PALETTE.length; i++) {
    const nextColor = PALETTE[i];

    const newButton = $("<button>");
    newButton.css("background", nextColor);
    $(".palette").append(newButton);
  }

  $(".palette button").first().addClass("active");
}

makePalette();

// Module Two

function onPaletteClick() {
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
  let activeColor = $(".palette .active").css("background-color");
  let cellColor = $(this).css("background-color");

  if (activeColor === cellColor) {
    $(this).css("background-color", "");
  } else {
    $(this).css("background-color", activeColor);
  }
}
$(".grid .cell").click(onGridClick);

// Module Three

function onClearClick() {
  $(".controls .clear").click(onClearClick);
  $(".grid .cell").css("background-color", "");
}

onClearClick();

function onFillAllClick() {
  let color = $(".palette .active").css("background-color");
  $(".grid .cell").css("background-color", color);
}
$(".controls .fill-all").click(onFillAllClick);

function onFillEmptyClick() {
  const elements = $(".grid .cell");
  let color = $(".palette .active").css("background-color");
  let noColor = "rgba(0, 0, 0, 0)";
  

  for (let i = 0; i < elements.length; i++) {
    let gridElement = $(elements[i]);
    
    if (gridElement.css("backgroundColor") === noColor) {
        gridElement.css('background-color', color)

    }
  };
}
$(".controls .fill-empty").click(onFillEmptyClick);

// Stretch Goals
