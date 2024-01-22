import { Sprite, useApp } from '@pixi/react';
import { FederatedPointerEvent, Graphics, Sprite as OriginSprite, Point, RenderTexture } from 'pixi.js';
import { FC, useState } from 'react';

import { calculateScratchedPercentage } from 'utils/calculatedScratchedPercentage';

const bgImagePath = 'https://pixijs.com/assets/bg_rotate.jpg';
const maskImagePath = 'https://pixijs.com/assets/bg_grass.jpg';

const ScratchCard: FC<Record<string, never>> = () => {
  const app = useApp();

  const [showMask, setShowMask] = useState(true);

  const { width, height } = app.screen;
  const stageSize = { width, height };

  const brush = new Graphics();
  brush.beginFill(0xffffff);
  brush.drawCircle(0, 0, 25);

  const line = new Graphics();

  const renderTexture = RenderTexture.create({ ...stageSize });

  const mask = new OriginSprite(renderTexture);

  let isDragging = false;
  let lastDrawnPoint: Point | null = null;

  const handlePointerMove = ({ global: { x, y } }: FederatedPointerEvent) => {
    if (isDragging) {
      brush.position.set(x, y);
      app.renderer.render(brush, {
        renderTexture,
        clear: false,
        skipUpdateTransform: false
      });

      if (lastDrawnPoint) {
        line.clear().lineStyle({ width: 50, color: 0xffffff }).moveTo(lastDrawnPoint.x, lastDrawnPoint.y).lineTo(x, y);
        app.renderer.render(line, {
          renderTexture,
          clear: false,
          skipUpdateTransform: false
        });
      }
      lastDrawnPoint = lastDrawnPoint || new Point();
      lastDrawnPoint.set(x, y);
    }
  };

  const handlePointerDown = () => (isDragging = true);

  const handlePointerUp = () => {
    isDragging = false;
    lastDrawnPoint = null;

    const pixels = app.renderer.extract.pixels(renderTexture);

    if (calculateScratchedPercentage(pixels, width, height)) setShowMask(false);
  };

  return (
    <>
      <Sprite isMask image={maskImagePath} {...stageSize} />
      <Sprite
        image={bgImagePath}
        {...stageSize}
        mask={showMask ? mask : null}
        onpointermove={handlePointerMove}
        onpointerdown={handlePointerDown}
        onpointerup={handlePointerUp}
        onpointerupoutside={handlePointerUp}
      />
    </>
  );
};

export default ScratchCard;
