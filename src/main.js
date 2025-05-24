import { k } from "./kaboomLoader.js";
import { room1 } from "./scenes/room1.js";
import { room2 } from "./scenes/room2.js";
import { setBackgroundColor } from "./scenes/roomUtils.js";
import { makeNotificationBox } from "./ui/notificationBox.js";

async function main() {
  const room1Data = await (await fetch("./maps/room1.json")).json();
  const room2Data = await (await fetch("./maps/room2.json")).json();

  k.scene("room1", (previousSceneData) => {
    room1(k, room1Data, previousSceneData);
   });

   k.scene("room2", (previousSceneData) => {
    room2(k, room2Data, previousSceneData);
   });
}

main();

k.scene("intro", () => {
  setBackgroundColor(k, "#300800");
  k.add(
    makeNotificationBox(
      k,
      "ʚ🕹️                             LIGHT OF HEAVEN- DEMO                           🕹️ɞ\nʚ〰〰〰〰〰〰〰〰〰────୨ৎ────〰〰〰〰〰〰〰〰〰ɞ\n \n                           Hello! My name is Makio ꒰(˶• ᴗ •˶)꒱  \n\n    You are Seraphine, a fallen angel with no memory. \n        Collect all Makio Tokens, defeat the Guardian, \n        and unlock your lost powers to escape Earth! \n\n Use ARROW keys to move, SPACE to jump, C to attack.\n\n                                   Press ENTER to start!!!"
    )
  );
  k.onKeyPress("enter", () => {
    // makes audio will be enabled before the game starts
    const context = new AudioContext();
    context.resume();
    k.go("room1", { exitName: null });
  });
});

k.scene("final-exit", () => {
  setBackgroundColor(k, "#300800");
  k.add(
    makeNotificationBox(
      k,
      "CONGRATS!! You made it to Heaven! \n Or did you? hehehe!!! ꒰(｡ •̀ ᴗ •́ ｡)꒱ \n \n       - Thanks for playing!" 
    )
  );
});

k.go("intro"); 