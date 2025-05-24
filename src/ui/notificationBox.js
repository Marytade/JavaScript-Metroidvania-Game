export function makeNotificationBox(k, content) {
  const container = k.make([
    k.rect(480, 100),
    k.color(k.Color.fromHex("#300800")),
    k.fixed(),
    k.pos(k.center()),
    k.area(),
    k.anchor("center"),
    {
      close() {
        k.destroy(this);
      },
    },
  ]);
  container.add([
    k.text(content, {
      font: "glyphmesss",
      size: 32,
    }),
    k.color(k.Color.fromHex("#f3bd51")),
    k.area(),
    k.anchor("center"),
  ]);

  return container;
}