import type { Cat } from "../models/cat.ts";

export const cats: Cat[] = [
  {
    id: 1,
    name: "Bella",
    trait: "Queen of the house",
    image: "https://placecats.com/bella/400/400",
    // liked: false,
  },
  {
    id: 2,
    name: "Neo",
    trait: "Very good kitty",
    image: "https://placecats.com/neo/400/400",
    // liked: true,
  },
  {
    id: 3,
    name: "Millie",
    trait: "Enjoys naps",
    image: "https://placecats.com/millie/400/400",
    // liked: true,
  },
  {
    id: 4,
    name: "Poppy",
    trait: "Loves tuna",
    image: "https://placecats.com/poppy/400/400",
    // liked: false,
  },
  {
    id: 5,
    name: "Louie",
    trait: "Ready to knock things off tables",
    image: "https://placecats.com/louie/400/400",
    // liked: false,
  },
  {
    id: 6,
    name: "Banana",
    trait: "Ready for anything",
    image: "https://placecats.com/neo_banana/400/400",
    // liked: false,
  },
  // Big cats
  {
    id: 7,
    name: "Lion",
    trait: "King of the savanna",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
    // liked: false,
  },
  {
    id: 8,
    name: "Tiger",
    trait: "Loves a good swim",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/500px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg",
    // liked: false,
  },
  {
    id: 9,
    name: "Leopard",
    trait: "Naps in trees",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/500px-African_leopard_male_%28cropped%29.jpg",
    // liked: false,
  },
  {
    id: 10,
    name: "Jaguar",
    trait: "Strongest bite in the family",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/500px-Standing_jaguar.jpg",
    // liked: false,
  },
  {
    id: 11,
    name: "Snow Leopard",
    trait: "Ghost of the mountains",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/500px-Irbis4.JPG",
    // liked: false,
  },
  {
    id: 12,
    name: "Cheetah",
    trait: "Fastest on four legs",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/500px-Male_cheetah_facing_left_in_South_Africa.jpg",
    // liked: false,
  },
  {
    id: 13,
    name: "Cougar",
    trait: "Purrs instead of roars",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/500px-Mountain_Lion_in_Glacier_National_Park.jpg",
    // liked: false,
  },
  {
    id: 14,
    name: "Clouded Leopard",
    trait: "Climbs down trees head-first",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Neofelis_nebulosa%2C_Clouded_leopard.jpg/500px-Neofelis_nebulosa%2C_Clouded_leopard.jpg",
    // liked: false,
  },
  // Domestic breeds
  {
    id: 15,
    name: "Persian",
    trait: "Fluffy and dignified",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg",
    // liked: false,
  },
  {
    id: 16,
    name: "Maine Coon",
    trait: "Gentle giant",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/M%C3%A2le_Black_Silver_Blotched_Tabby.jpeg/500px-M%C3%A2le_Black_Silver_Blotched_Tabby.jpeg",
    // liked: false,
  },
  {
    id: 17,
    name: "Siamese",
    trait: "Very talkative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Siamese_cat_Vaillante.JPG",
    // liked: false,
  },
  {
    id: 18,
    name: "Ragdoll",
    trait: "Goes limp when held",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Ragdoll_from_Gatil_Ragbelas.jpg/500px-Ragdoll_from_Gatil_Ragbelas.jpg",
    // liked: false,
  },
  {
    id: 19,
    name: "Bengal",
    trait: "Tiny wild one",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/500px-Paintedcats_Red_Star_standing.jpg",
    // liked: false,
  },
  {
    id: 20,
    name: "Sphynx",
    trait: "Always seeking warmth",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Sphynx_-_cat._img_031.jpg/500px-Sphynx_-_cat._img_031.jpg",
    // liked: false,
  },
  {
    id: 21,
    name: "British Shorthair",
    trait: "Calm teddy bear",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Mystica_from_British_Empire_Cattery.jpg/500px-Mystica_from_British_Empire_Cattery.jpg",
    // liked: false,
  },
  {
    id: 22,
    name: "Scottish Fold",
    trait: "Sits like a human",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Scottish_Fold_-_CFF_cat_show_Heinola_2008-05-03_IMG_7882.JPG/500px-Scottish_Fold_-_CFF_cat_show_Heinola_2008-05-03_IMG_7882.JPG",
    // liked: false,
  },
  {
    id: 23,
    name: "Abyssinian",
    trait: "Curious explorer",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/500px-Gustav_chocolate.jpg",
    // liked: false,
  },
  {
    id: 24,
    name: "Russian Blue",
    trait: "Shy but loyal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Russian_blue_kitten_%28cropped%29.jpg",
    // liked: false,
  },
  {
    id: 25,
    name: "Norwegian Forest Cat",
    trait: "Built for snow",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Dalaja-Doll-norv%C3%A9gien-ambre-blotched-tabby_avec-blanc_2008_%28cropped%29.jpg/500px-Dalaja-Doll-norv%C3%A9gien-ambre-blotched-tabby_avec-blanc_2008_%28cropped%29.jpg",
    // liked: false,
  },
  {
    id: 26,
    name: "Birman",
    trait: "Wears white socks",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Birmanstrofe.jpg/500px-Birmanstrofe.jpg",
    // liked: false,
  },
  {
    id: 27,
    name: "Savannah",
    trait: "Plays fetch",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/500px-Savannah_Cat_portrait.jpg",
    // liked: false,
  },
  {
    id: 28,
    name: "Devon Rex",
    trait: "Mischievous pixie",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Devon_Rex_Cassini.jpeg/500px-Devon_Rex_Cassini.jpeg",
    // liked: false,
  },
  {
    id: 29,
    name: "Burmese",
    trait: "Velcro lap cat",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG/500px-British_burmese_-_Andel_Alois_at_Cat_show.JPG",
    // liked: false,
  },
  {
    id: 30,
    name: "Turkish Angora",
    trait: "Elegant and playful",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Turkish_Angora_in_Ankara_Zoo_%28AO%C3%87%29.JPG/500px-Turkish_Angora_in_Ankara_Zoo_%28AO%C3%87%29.JPG",
    // liked: false,
  },
  {
    id: 31,
    name: "Exotic Shorthair",
    trait: "Lazy Persian in pajamas",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Ginger_Exotic_Shorthair.jpg/500px-Ginger_Exotic_Shorthair.jpg",
    // liked: false,
  },
  {
    id: 32,
    name: "American Shorthair",
    trait: "Easygoing mouser",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Jewelkatz_Romeo_Of_Stalker-Bars.jpg/500px-Jewelkatz_Romeo_Of_Stalker-Bars.jpg",
    // liked: false,
  },
  {
    id: 33,
    name: "Bombay",
    trait: "Mini black panther",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Bombay_femelle.JPG/500px-Bombay_femelle.JPG",
    // liked: false,
  },
];
