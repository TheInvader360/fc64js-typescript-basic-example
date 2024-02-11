import 'fc64js';

fc64Init(romInit, romLoop);

//const romPalette = [0x000000, 0x55415f, 0x646964, 0xd77355, 0x508cd7, 0x64b964, 0xe6c86e, 0xdcf5ff]; // db8
//fc64Init(romInit, romLoop, romPalette);

let x = 60;
let y = 60;
let color = 4;

function romInit() {
  drawPixel(3, 3, COL_WHT);
}

function romLoop() {
  if (isJustPressed(BTN_A) && color > 1) {
    color--;
  }
  if (isJustReleased(BTN_B) && color < 6) {
    color++;
  }
  drawPixel(x, y, COL_BLK);
  if (isPressed(BTN_U) && y > 0) {
    y--;
  }
  if (isPressed(BTN_D) && y < GFX_H - 1) {
    y++;
  }
  if (isPressed(BTN_L) && x > 0) {
    x--;
  }
  if (isPressed(BTN_R) && x < GFX_W - 1) {
    x++;
  }
  drawPixel(x, y, color);
}

