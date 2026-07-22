import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const RenderTarget = {
  current: () => 'preview',
  canvas: 'canvas',
  export: 'export',
  thumbnail: 'thumbnail',
  preview: 'preview',
};

const PERSPECTIVE = 1000;
const DEPTH_SPACING = 10;

const DEFAULT_IMAGES = [
  {
    src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/eec164e9-23f8-4f87-b48a-a208fa806100/w=800',
  },
  {
    src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800',
  },
  {
    src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800',
  },
  {
    src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/7d4d2641-d6a8-4fef-e85c-b12ed100d500/w=800',
  },
];

const CARD_LABELS = ['Gym', 'Basketball', 'Running', 'Gaming'];

function SwipeCardStack({
  images = DEFAULT_IMAGES,
  cardWidth = 408,
  cardHeight = 301,
  cardRadius = 18,
  swipeThreshold = 50,
  tiltAngle = -45,
  tiltAngleStart = 0,
  xOffset = 200,
  transition = { type: 'spring', stiffness: 300, damping: 30 },
  style,
}) {
  const imgs = useMemo(
    () => (Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES),
    [images]
  );

  const actualCardCount = imgs.length > 0 ? imgs.length : 3;

  const [cards, setCards] = useState(() =>
    Array.from({ length: actualCardCount }, (_, index) => ({
      id: index + 1,
      content: `Card ${index + 1}`,
      imageIndex: index,
    }))
  );
  const [isPressed, setIsPressed] = useState(false);
  const [shouldReturnToCenter, setShouldReturnToCenter] = useState(false);

  useEffect(() => {
    setCards((prevCards) => {
      if (prevCards.length !== actualCardCount) {
        return Array.from({ length: actualCardCount }, (_, index) => ({
          id: index + 1,
          content: `Card ${index + 1}`,
          imageIndex: index,
        }));
      }

      return prevCards;
    });
  }, [actualCardCount]);

  const handlePointerDown = () => setIsPressed(true);
  const handlePointerUp = () => setIsPressed(false);

  const handleDragEnd = (info) => {
    setIsPressed(false);
    const { offset } = info;
    const distance = Math.sqrt(offset.x * offset.x + offset.y * offset.y);

    if (distance > swipeThreshold) {
      setCards((prevCards) => {
        const [topCard, ...restCards] = prevCards;
        return [...restCards, topCard];
      });
      return;
    }

    setShouldReturnToCenter(true);
    window.setTimeout(() => setShouldReturnToCenter(false), 1000);
  };

  const getCardStyle = (index) => {
    const totalCards = cards.length;
    const stackOffset = index * 8;
    const scaleValue = 1 - index * 0.05;
    const rotationValue =
      totalCards > 1
        ? tiltAngleStart + (index / (totalCards - 1)) * (tiltAngle - tiltAngleStart)
        : tiltAngleStart;
    const xOffsetValue = totalCards > 1 ? (index / (totalCards - 1)) * xOffset : 0;
    const depthOffset = index * DEPTH_SPACING;
    const isTopCard = index === 0;
    const shouldReturn = isTopCard && shouldReturnToCenter;

    return {
      zIndex: cards.length - index,
      scale: scaleValue,
      x: shouldReturn ? 0 : xOffsetValue,
      y: shouldReturn ? 0 : -stackOffset,
      rotate: shouldReturn ? 0 : rotationValue,
      z: -depthOffset,
      opacity: 1,
    };
  };

  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const radiusPx = (cardRadius / 90) * (Math.min(cardWidth, cardHeight) / 2);

  return (
    <div
      style={{
        ...style,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        perspective: `${PERSPECTIVE}px`,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: cardWidth,
          height: cardHeight,
        }}
      >
        {cards.map((card, index) => {
          const isTopCard = index === 0;
          const cardStyle = getCardStyle(index);
          const cardImage = imgs[card.imageIndex];

          return (
            <motion.div
              key={card.id}
              drag={isTopCard && !isCanvas}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              onMouseDown={isTopCard && !isCanvas ? handlePointerDown : undefined}
              onMouseUp={isTopCard && !isCanvas ? handlePointerUp : undefined}
              onDragEnd={isTopCard && !isCanvas ? (_event, info) => handleDragEnd(info) : undefined}
              animate={cardStyle}
              transition={{
                x: isCanvas ? { duration: 0 } : transition,
                y: isCanvas ? { duration: 0 } : transition,
                rotate: isCanvas ? { duration: 0 } : transition,
                scale: isCanvas ? { duration: 0 } : transition,
                zIndex: { duration: 0.3, ease: 'easeOut' },
                z: { duration: 0.3, ease: 'easeOut' },
              }}
              initial={isCanvas ? cardStyle : false}
              whileDrag={{ scale: 1.05, rotate: tiltAngleStart, zIndex: 1000 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: cardImage ? 'transparent' : 'rgba(243, 239, 255, 0.8)',
                borderRadius: radiusPx,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: '300',
                fontFamily: 'system-ui',
                color: '#9967FF',
                cursor: isTopCard && !isCanvas ? (isPressed ? 'grabbing' : 'grab') : 'default',
                userSelect: 'none',
                backgroundImage: cardImage ? `url(${cardImage.src})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                border: cardImage ? 'none' : '1.5px solid #9967FF',
              }}
            >
              {!cardImage && (
                <p
                  style={{
                    fontSize: 14,
                    color: '#9967FF',
                    padding: 20,
                    textAlign: 'center',
                  }}
                >
                  {card.content} — Add images in Content
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function OutsideIDE() {
  return (
    <section id="outside-the-ide" className="scroll-mt-24 border-y border-zinc-200/70 py-24 dark:border-zinc-800">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Life beyond the desk"
              title="Outside the IDE"
              description="When I'm not coding, I enjoy staying active and exploring new experiences. Whether it's hitting the gym, playing basketball, going for a run, or immersing myself in gaming, I find balance and inspiration in these activities."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {CARD_LABELS.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] rounded-[2rem] border border-zinc-200/70 bg-white/70 p-4 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.35)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-5">
              <div className="aspect-[408/301] overflow-hidden rounded-[1.5rem]">
                <SwipeCardStack cardWidth={408} cardHeight={301} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}