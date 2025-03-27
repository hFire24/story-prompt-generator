const characters = ['Accelerator (Toaru Series)',
  'Adam Blade',
  'Ai Hinatsuru',
  'Akane (Music Enjoyers)',
  'Akari Akaza',
  'Akari Mizunashi',
  'Alice Margatorid',
  'Amy Rose',
  'Angie (Princess Principal)',
  'Anya Forger',
  'Anzu Futaba',
  'Aoba Suzukaze',
  'Arataka Reigen',
  'Aria Kanzaki (Aria the Scarlet Ammo)',
  'Ash Ketchum (Pokémon)',
  'Ayu Tsukimiya',
  'Ayumu Kasuga',
  'Azusa Aizawa (I’ve Been Killing Slimes for 300 Years and Maxed Out My Level)',
  'Beatrice (Re:Zero)',
  'Big the Cat',
  'Blanc',
  'Bocchi (Bocchi the Rock!)',
  'Bocchi (Hitoriobocchi)',
  'Bonnie (Pokemon)',
  'Brock (Pokemon)',
  'Bulma',
  'Byakuren Hijiri',
  'the Chao (Sonic)',
  'Chibi Moon',
  'Chika Fujiwara',
  'Chino Kafuu',
  'Chiyo Mihama',
  'Chocolat (NouCome)',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Cirno',
  'Clemont (Pokemon)',
  'Cliff (Music Enjoyers)',
  'Cocoa Hoto',
  'Cream the Rabbit',
  'Daiyousei (Touhou)',
  'Danielle (Music Enjoyers)',
  'Dr. Eggman',
  'E-123 Omega',
  'Edward Elric',
  'Elaina (Wandering Witch)',
  'Elf Yamada',
  'Emilico (Shadows House)',
  'Emma (The Promised Neverland)',
  'Enju Aihara (Black Bullet)',
  'Erina (Rabi-Ribi)',
  'Erio Touwa (Denpa Onna to Seishun Otoko)',
  'Ernesti (Knight’s & Magic)',
  'Ethan (Music Enjoyers)',
  'Etna',
  'Etna',
  'Etna',
  'Etna (Disgaea)',
  'Faris Nyannyan (Steins;Gate)',
  'Fate Testarossa',
  'Felix (Music Enjoyers)',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flandre Scarlet',
  'Flonne',
  'Flonne',
  'Flonne',
  'Flonne',
  'Fran (Reincarnated as a Sword)',
  'Futaba Igarashi (My Senpai is Annoying)',
  'Futari Gotoh (Bocchi the Rock!)',
  'Fuuko Ibuki (Clannad)',
  'Fuyuki Hinata (Sgt. Frog)',
  'Gabriel Tenma White (Gabriel Dropout)',
  'Goku (Kid)',
  'Hakua Shiodome (Shomin Sample)',
  'Hana Shirosaki (Wataten!)',
  'Hanako (Music Enjoyers)',
  'Harumi Takeda (My Senpai is Annoying)',
  'Hat Kid (A Hat In Time)',
  'Hatsune Miku',
  'Hayate the Combat Butler',
  'Hibiki (KanColle)',
  'Hinamori Amu',
  'Hinata Hakamada (Ro-Kyu-Bu!)',
  'Hinata Hoshino (Wataten!)',
  'Hong Meiling',
  'Honoka Kousaka (Love Live!)',
  'Ikaros (Heaven\'s Lost Property)',
  'Kaban (Kemono Friends)',
  'Kagami Hiiragi',
  'Kagari (Rewrite)',
  'Kanade Amakusa (NouCome)',
  'Kanna Kamui (Dragon Maid)',
  'Kaos (Comic Girls)',
  'Karen Kujou',
  'Keima Katsuragi (The World God Only Knows)',
  'Knuckles',
  'Kobato Hasegawa',
  'Kogasa Tatara',
  'Koishi Komeiji',
  'Komari (Little Busters!)',
  'Konata Izumi',
  'Kongming (Ya Boy Kongming!)',
  'Koromo Amae (Saki)',
  'Kud (Little Busters!)',
  'Kusuo Saiki (The Disastrous Life of Saiki K)',
  'L (Death Note)',
  'Laharl',
  'Laharl',
  'Laharl',
  'Laharl',
  'Last Order',
  'Light Yagami',
  'Lillie (Pokémon Sun and Moon)',
  'Lola (Music Enjoyers)',
  'Lotte (Lotte no Omocha!)',
  'Madoka Kaname (Puella Magi Madoka Magica)',
  'Mafuyu Hoshikawa (Blend S)',
  'Mahiro Oyama',
  'Maika Sakuranomiya (Blend S)',
  'Mao Amatsuka (GJ-Bu)',
  'Maple (BOFURI)',
  'Maria (Hayate the Combat Butler)',
  'Marisa Kirisame',
  'Mark (Music Enjoyers)',
  'Mayushii (Steins;Gate)',
  'Mia Luna Tearmoon',
  'Mihari Oyama',
  'Mikoto Misaka',
  'Miles "Tails" Prower',
  'Misuzu Kamio (Air)',
  'Miyako Hoshino (Wataten!)',
  'Mizuki Usami',
  'Mob (Mob Psycho 100)',
  'Momoka Nishizawa',
  'Mystia Lorelei',
  'Nadeshiko (Yuru Camp)',
  'Nagi Sanzen\'in',
  'Nagisa Furukawa',
  'Nanahira',
  'Nanoha Takamachi',
  'Natsumi Hinata (Sgt. Frog)',
  'Nazrin',
  'Nene Yashiro',
  'Nepgear',
  'Neptune',
  'Nina Ichihara (iDOLM@STER)',
  'Noa Himesaka (Wataten!)',
  'Noel (Sora no Method)',
  'Nolan (Music Enjoyers)',
  'Norman (The Promised Neverland)',
  'Orin',
  'Patchouli Knowledge',
  'Peashy (Neptunia)',
  'Phoenix Wright',
  'Pleinair',
  'Ram (Neptunia)',
  'Ram (Re:Zero)',
  'Ray (The Promised Neverland)',
  'Reg (Made in Abyss)',
  'Reimu Hakurei',
  'Reimu Hakurei',
  'Reimu Hakurei',
  'Reimu Hakurei',
  'Rem (Re:Zero)',
  'Remilia Scarlet',
  'Remilia Scarlet',
  'Remilia Scarlet',
  'Remilia Scarlet',
  'Renge Miyauchi',
  'Riki Naoe (Little Busters!)',
  'Rikka Takanashi',
  'Riko (Made in Abyss)',
  'Riko Mine',
  'Rintaro Okabe (Steins;Gate)',
  'Rinne Ohara (ISLAND)',
  'Rom (Neptunia)',
  'Rouge the Bat',
  'Roxy Migurdia',
  'Rudeus Greyrat',
  'Rumia (Touhou)',
  'Rurumo (Magimoji Rurumo)',
  'Sagiri Izumi',
  'Sailor Moon',
  'Sakura Kinomoto',
  'Sakuya Izayoi',
  'Sanae Kochiya',
  'Sanae Kochiya',
  'Sanae Kochiya',
  'Sanae Kochiya',
  'Satania (Gabriel Dropout)',
  'Scott (Music Enjoyers)',
  'Sena Kashiwazaki (Haganai)',
  'Senko-san',
  'Serena (Pokémon)',
  'Serval (Kemono Friends)',
  'Shadow the Hedgehog',
  'Shido Itsuka (Date a Live)',
  'Shimarin (Yuru Camp)',
  'Shinobu Oshino',
  'Shinomiya Kaguya',
  'Shiro (No Game No Life)',
  'Shirogane (Kaguya-sama)',
  'Princess Syalis',
  'Sonic the Hedgehog',
  'Sophie Twilight',
  'Sora (No Game No Life)',
  'Souji Mitsuka (Gonna be the twin-tail!!)',
  'Souta Takanashi (Working!!)',
  'Squid Girl',
  'Subaru Hasegawa (Ro-Kyu-Bu!)',
  'Subaru Natsuki (Re:Zero)',
  'Subaru Uchimaki (This Art Club Has a Problem!)',
  'Suwako Moriya',
  'Takagi-san',
  'Team Rocket',
  'Team Rocket',
  'Team Rocket',
  'Teto Kasane',
  'Tewi Inaba',
  'Tohru (Dragon Maid)',
  'Tomoka Minato (Ro-Kyu-Bu!)',
  'Tomoko Kuroki (Watamote)',
  'Tooru Ichi (A-Channel)',
  'Tooru Kirishima',
  'Tsumiki Miniwa',
  'Tuxedo Mask (Sailor Moon)',
  'Umaru Doma',
  'Utsuho Reiuji',
  'Vegeta',
  'Victorique de Blois (Gosick)',
  'Yaeka Sakuragi',
  'Yoshino (Date a Live)',
  'Youmu Konpaku',
  'Yui Hirasawa',
  'Yukari Yakumo',
  'Yuki Nagato',
  'Yuki Takeya',
  'Yuna (Kuma Kuma Kuma Bear)',
  'Yuno (Hidamari Sketch)',
  'Yuu Ishigami',
  'Yuuji Kazami (Grisaia)',
  'Yuyuko Saigyouji'];