import type { I18nText } from "@/lib/i18n-pick";

/**
 * /players 하단에 노출하는 학부모 대표 후기(제주 전국대회 응원기).
 * ko/en 기준이며 나머지 언어는 추가 번역으로 채운다(없으면 en 폴백).
 */
export type FeatureSection = { icon: string; heading: I18nText; paras: I18nText[] };

export const PARENT_FEATURE: {
  eyebrow: string;
  title: I18nText;
  intro: I18nText[];
  sections: FeatureSection[];
  quote: I18nText;
  closing: I18nText[];
} = {
  eyebrow: "Parents' Voice",
  title: {
    ko: "[학부모 후기] 테니스 라켓 대신 응원 피켓을 들고, GCM과 함께 제주도로 향한 특별한 3박 4일 🎾",
    en: "[Parent's Review] Holding a cheer sign instead of a racket — a special 4-day trip to Jeju with GCM 🎾",
  },
  intro: [
    {
      ko: "아이가 평소 매일 참여하던 GCM 정규 테니스 훈련을 잠시 쉬고, 아주 특별한 여정을 다녀왔습니다. 바로 우리 GCM 코치님 두 분이 출전하시는 제주 전국대회 현장에 3박 4일 동안 직접 찾아가 응원하기 위해서였습니다.",
      en: "Our child took a short break from the daily GCM training routine for a very special journey — to spend four days and three nights in Jeju, cheering on two of our GCM coaches competing at a national tournament.",
    },
    {
      ko: "'매일 해야 하는 정규 훈련을 쉬고, 멀리 제주도까지 응원을 하러 가는 것이 과연 맞을까?' 처음에는 학부모로서 고민도 있었습니다. 하지만 3박 4일의 일정을 마치고 돌아온 지금, 이 선택이야말로 GCM이 지향하는 '진짜 교육'의 가치를 온전히 확인한 소중한 시간이었음을 느낍니다.",
      en: "\"Is it really right to skip the daily routine and travel all the way to Jeju just to cheer?\" As a parent, I did hesitate at first. But now, back from those four days, I feel this choice was a precious time that fully confirmed the value of the 'real education' GCM stands for.",
    },
  ],
  sections: [
    {
      icon: "🥇",
      heading: {
        ko: "현장에서 직접 확인한 GCM 코치진의 열정과 스포츠맨십",
        en: "The passion and sportsmanship of the GCM coaches, seen first-hand",
      },
      paras: [
        {
          ko: "이번 대회에는 GCM 아카데미의 오성국 코치님과 김주빈 코치님께서 출전하셨습니다. 오성국 코치님께서는 멋진 경기력으로 값진 동메달을 획득하셨고, 아이와 함께 진심으로 축하하며 벅찬 기쁨을 나눌 수 있었습니다.",
          en: "At this tournament, GCM Academy's Coach Oh Seong-gook and Coach Kim Ju-bin competed. Coach Oh played wonderfully and earned a well-deserved bronze medal, and my child and I were able to celebrate together and share an overwhelming joy.",
        },
        {
          ko: "또 김주빈 코치님께서는 상대가 국가대표이자 아시안게임 금메달리스트라는 강력한 선수임에도 불구하고, 끝까지 물러서지 않고 매 포인트 최선을 다해 경기에 임하셨습니다. 그 모습은 현장에서 지켜보던 모든 관중은 물론, 저와 아이의 가슴속에도 깊은 울림과 감동을 주었습니다.",
          en: "And even though his opponent was a formidable player — a national team member and an Asian Games gold medalist — Coach Kim never backed down, giving his all on every single point to the very end. That sight moved not only all the spectators watching, but struck a deep chord in my child and me as well.",
        },
        {
          ko: "승리의 기쁨도 값지지만, 강한 상대 앞에서도 포기하지 않고 자신의 경기를 끝까지 펼쳐 나가는 코치님의 모습은 백 마디 말보다 더 강력한 교육이었습니다. 결과를 넘어 도전하는 태도, 끈기, 그리고 진짜 스포츠맨십을 온몸으로 보여주시는 코치님이 곁에 계신다는 사실에 깊은 감사와 자부심을 느끼게 되었습니다.",
          en: "The joy of winning is precious, but a coach who refuses to give up before a strong opponent and plays out his own game to the end was a more powerful lesson than a hundred words. I came to feel deep gratitude and pride that our child has, right beside him, coaches who embody with their whole being an attitude of challenge beyond results, perseverance, and true sportsmanship.",
        },
      ],
    },
    {
      icon: "🎾",
      heading: {
        ko: "코치이자 현역 선수, '플레잉 코치님'과 함께하는 훈련의 진짜 가치",
        en: "The true value of training with a 'playing coach' — a coach who is also an active player",
      },
      paras: [
        {
          ko: "이번 경험을 통해 우리 GCM이 가진 가장 큰 강점인 '플레잉 코치' 시스템의 진가를 다시 한번 실감했습니다. GCM의 코치님들은 단순히 가르치는 분들이 아니라, 지금도 코트 위에서 치열하게 뛰며 시합을 뛰는 선수 겸 코치이십니다.",
          en: "Through this experience I once again realized the true worth of GCM's greatest strength — its 'playing coach' system. GCM's coaches are not simply instructors; they are still player-coaches who compete fiercely on court to this day.",
        },
        {
          ko: "말과 기술로 설명해 주시는 가르침도 중요하지만, 코치님 스스로 경기장에서 막막함과 압박감을 이겨내며 선수로서 부딪히고 성장하는 과정을 직접 보여주는 것은 차원이 다른 교육입니다.",
          en: "Teaching through words and technique matters, of course, but a coach showing in person how he overcomes uncertainty and pressure on the court — confronting and growing as a player himself — is education on an entirely different level.",
        },
        {
          ko: "매일 자신을 지도해 주시는 코치님이 코트 위에서 끊임없이 도전하는 모습을 보며, 아이는 코치님에 대한 존경심과 신뢰를 더욱 깊게 다지게 되었습니다. 책이나 말로 배우는 것보다, 온몸으로 뛰는 스승의 모습을 보고 자란다는 것—이것이야말로 GCM을 선택한 제 결정에 가장 큰 확신을 주는 이유입니다.",
          en: "Watching the coach who guides him every day keep challenging himself on court, my child's respect and trust for his coach grew even deeper. Growing up watching a mentor who competes with his whole body, rather than learning only from books or words — this is exactly what gives me the greatest confidence in my decision to choose GCM.",
        },
      ],
    },
    {
      icon: "👁️",
      heading: {
        ko: "시야를 넓히는 살아있는 배움, GCM이 만드는 성장의 기회",
        en: "Living learning that broadens horizons — the growth opportunities GCM creates",
      },
      paras: [
        {
          ko: "테니스 실력을 키우기 위해서는 매일 반복 훈련하는 과정도 중요하지만, 좋은 선수가 되기 위해서는 경기 운영을 관찰하고 분석하며 시야를 넓히는 경험이 반드시 필요하다는 것을 GCM에서 배워왔습니다.",
          en: "Daily repetitive training matters for building tennis skills, but to become a good player one also needs the experience of observing and analyzing match play to widen one's perspective — something we have learned at GCM.",
        },
        {
          ko: "이번 여정 동안 아이는 GCM 코치님들의 경기뿐만 아니라 우리나라를 대표하는 유명 선수들의 경기를 가까이서 관람하고, 직접 만나 이야기를 나누는 특별한 기회도 가졌습니다.",
          en: "During this trip, my child had the special chance not only to watch the GCM coaches' matches up close, but also to see matches of the country's top players and even meet and talk with them in person.",
        },
        {
          ko: "선수들의 움직임과 전술, 중요한 순간의 판단을 눈으로 직접 확인하는 과정은 아이에게 단순한 관람을 넘어 '살아있는 공부'가 되었습니다. 아이들에게 단순 기술 훈련을 넘어 코트 안팎에서 다각도로 성장할 수 있는 판을 열어주는 GCM의 교육적 방향성에 또 한 번 감탄했습니다.",
          en: "Seeing with his own eyes the players' movement, tactics, and decisions in crucial moments became, for my child, 'living study' beyond mere spectating. I was once again amazed by GCM's educational direction, which opens a stage for children to grow from many angles both on and off the court — far beyond simple skills training.",
        },
      ],
    },
    {
      icon: "🤝",
      heading: {
        ko: "든든한 GCM 어드바이저 팀과 함께여서 더 안심되는 곳",
        en: "A place made more reassuring by GCM's dependable advisory team",
      },
      paras: [
        {
          ko: "무엇보다 이번 3박 4일은 아이와 코치님들, 그리고 GCM과의 관계를 더욱 단단하게 만들어 주었습니다.",
          en: "Above all, these four days made the bond between my child, the coaches, and GCM even stronger.",
        },
        {
          ko: "한 포인트 한 포인트 마음을 모아 응원하고 승패의 순간을 함께 나누며, 아이의 마음속에는 코치님을 향한 깊은 애정과 믿음이 쌓였습니다. 힘든 순간에도 믿고 따라갈 수 있는 스승이 있다는 것은 아이의 테니스 인생에 가장 든든한 버팀목이 될 것입니다.",
          en: "Cheering with all our hearts on every single point and sharing the moments of winning and losing together, a deep affection and trust toward his coaches took root in my child's heart. Having mentors he can believe in and follow even through hard moments will be the firmest support in his tennis life.",
        },
        {
          ko: "훈련을 며칠 쉬는 것은 일시적인 공백일 수 있지만, 제주도에서 얻은 감동과 동기부여는 그 무엇과도 바꿀 수 없는 소중한 자산이 되었습니다.",
          en: "Skipping a few days of training may be a momentary gap, but the inspiration and motivation gained in Jeju became a precious asset that nothing could replace.",
        },
      ],
    },
  ],
  quote: {
    ko: "기술만 가르치는 곳은 많지만, 아이의 태도와 마음까지 함께 키워주는 곳은 흔치 않습니다.",
    en: "There are many places that teach only skills, but few that nurture a child's attitude and heart as well.",
  },
  closing: [
    {
      ko: "아이들에게 단단한 본보기가 되어주시는 현장의 플레잉 코치진, 그리고 학업·진로진학·멘토링까지 아이의 성장을 다각도로 뒷받침해 주는 든든한 GCM의 어드바이저 팀이 있기에 학부모로서 앞으로의 성장이 더욱 기대되고 안심이 됩니다.",
      en: "With playing coaches who serve as solid role models on the ground, and GCM's dependable advisory team supporting our child's growth from every angle — academics, career and admissions, and mentoring — I feel, as a parent, even more excited and reassured about the growth ahead.",
    },
    {
      ko: "값진 동메달을 획득하신 오성국 코치님께 다시 한번 축하를 드리며, 결과와 상관없이 포기하지 않는 멋진 경기를 보여주신 코치님들과 이 모든 배움의 기회를 가능하게 해준 GCM 테니스 아카데미에 진심으로 감사드립니다. ❤️🎾",
      en: "Congratulations once again to Coach Oh Seong-gook on his well-deserved bronze medal, and my heartfelt thanks to the coaches who showed such admirable play without ever giving up — regardless of the result — and to GCM Tennis Academy for making all of these learning opportunities possible. ❤️🎾",
    },
  ],
};
