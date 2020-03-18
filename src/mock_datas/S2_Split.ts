import {WordSplit} from '../models/word_split';

function getRandomColor() : string {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const WORD_SPLIT_9: WordSplit[] = [
  {id: 1, text: "Hông", start: 2.44, duration: 0.68, filename: "bk-hn-hips-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ông', color : getRandomColor()},
  ]},
  {id: 2, text: "Eo", start: 2.44, duration: 0.68, filename: "bk-hn-waist-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'E', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'o', color : getRandomColor()},
  ]},
  {id: 3, text: "Đùi", start: 2.44, duration: 0.68, filename: "bk-hn-thigh-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ùi', color : getRandomColor()},
  ]},
  {id: 4, text: "Trán", start: 2.44, duration: 0.68, filename: "bk-hn-forehead-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'án', color : getRandomColor()},
  ]},
  {id: 5, text: "Bụng", start: 2.44, duration: 0.68, filename: "bk-hn-belly-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ụng', color : getRandomColor()},
  ]},
  {id: 6, text: "Đũa", start: 2.44, duration: 0.68, filename: "bk-hn-chopsticks-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ũa', color : getRandomColor()},
  ]},
  {id: 7, text: "Dao", start: 2.44, duration: 0.68, filename: "bk-hn-knife-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ao', color : getRandomColor()},
  ]},
  {id: 8, text: "Dĩa", start: 2.44, duration: 0.68, filename: "bk-hn-fork-split-woman(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ĩa', color : getRandomColor()},
  ]},
  {id: 9, text: "Thìa", start: 2.44, duration: 0.68, filename: "bk-hn-spoon-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ìa', color : getRandomColor()},
  ]},
  {id: 10, text: "Chai", start: 2.44, duration: 0.68, filename: "bk-hn-bottle-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ai', color : getRandomColor()},
  ]},
  {id: 11, text: "Ly", start: 2.44, duration: 0.68, filename: "bk-hn-glass-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'y', color : getRandomColor()},
  ]},
  {id: 12, text: "Đĩa", start: 2.44, duration: 0.68, filename: "bk-hn-plate-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ĩa', color : getRandomColor()},
  ]},
  {id: 12, text: "Khăn", start: 2.44, duration: 0.68, filename: "bk-hn-napkin-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Kh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăn', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_10: WordSplit[] = [
  {id: 1, text: "Báo", start: 2.44, duration: 0.68, filename: "bk-hn-leopard-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'áo', color : getRandomColor()},
  ]},
  {id: 2, text: "Dơi", start: 2.44, duration: 0.68, filename: "bk-hn-bat-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ơi', color : getRandomColor()},
  ]},
  {id: 3, text: "Nai", start: 2.44, duration: 0.68, filename: "bk-hn-deer-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ai', color : getRandomColor()},
  ]},
  {id: 4, text: "Trăn", start: 2.44, duration: 0.68, filename: "bk-hn-python-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăn', color : getRandomColor()},
  ]},
  {id: 5, text: "Trâu", start: 2.44, duration: 0.68, filename: "bk-hn-buffalo-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âu', color : getRandomColor()},
  ]},
  {id: 6, text: "Nhím", start: 2.44, duration: 0.68, filename: "bk-hn-porcupine-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ím', color : getRandomColor()},
  ]},
  {id: 7, text: "Sao", start: 2.44, duration: 0.68, filename: "bk-hn-stars-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ao', color : getRandomColor()},
  ]},
  {id: 8, text: "Mây", start: 2.44, duration: 0.68, filename: "bk-hn-clouds-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ây', color : getRandomColor()},
  ]},
  {id: 9, text: "Tuyết", start: 2.44, duration: 0.68, filename: "bk-hn-snow-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'uyết', color : getRandomColor()},
  ]},
  {id: 10, text: "Mưa", start: 2.44, duration: 0.68, filename: "bk-hn-rain-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ưa', color : getRandomColor()},
  ]},
  {id: 11, text: "Lửa", start: 2.44, duration: 0.68, filename: "bk-hn-fire-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ửa', color : getRandomColor()},
  ]},
  {id: 12, text: "Gió", start: 2.44, duration: 0.68, filename: "bk-hn-wind-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Gi', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ó', color : getRandomColor()},
  ]}
];

export const WORD_SPLIT_11: WordSplit[] = [
  {id: 1, text: "Đẩy", start: 2.44, duration: 0.68, filename: "bk-hn-push-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ẩy', color : getRandomColor()},
  ]},
  {id: 2, text: "Gãi", start: 2.44, duration: 0.68, filename: "bk-hn-scratch-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ãi', color : getRandomColor()},
  ]},
  {id: 3, text: "Với", start: 2.44, duration: 0.68, filename: "bk-hn-reach-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ới', color : getRandomColor()},
  ]},
  {id: 4, text: "Lắc", start: 2.44, duration: 0.68, filename: "bk-hn-shake-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắc', color : getRandomColor()},
  ]},
  {id: 5, text: "Tâng", start: 2.44, duration: 0.68, filename: "bk-hn-bounce-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âng', color : getRandomColor()},
  ]},
  {id: 6, text: "Mang", start: 2.44, duration: 0.68, filename: "bk-hn-carry-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ang', color : getRandomColor()},
  ]},
  {id: 7, text: "Đánh", start: 2.44, duration: 0.68, filename: "bk-hn-hit-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ánh', color : getRandomColor()},
  ]},
  {id: 8, text: "Chạm", start: 2.44, duration: 0.68, filename: "bk-hn-touch-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ạm', color : getRandomColor()},
  ]},
  {id: 9, text: "Móc", start: 2.44, duration: 0.68, filename: "bk-hn-wallhook-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'óc', color : getRandomColor()},
  ]},
  {id: 10, text: "Hộp", start: 2.44, duration: 0.68, filename: "bk-hn-box-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ộp', color : getRandomColor()},
  ]},
  {id: 11, text: "Túi", start: 2.44, duration: 0.68, filename: "bk-hn-bag-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'úi', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_12: WordSplit[] = [
  {id: 1, text: "Núi", start: 2.44, duration: 0.68, filename: "bk-hn-mountain-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'úi', color : getRandomColor()},
  ]},
  {id: 2, text: "Cây", start: 2.44, duration: 0.68, filename: "bk-hn-tree-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ây', color : getRandomColor()},
  ]},
  {id: 3, text: "Cỏ", start: 2.44, duration: 0.68, filename: "bk-hn-grass-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỏ', color : getRandomColor()},
  ]},
  {id: 4, text: "Rừng", start: 2.44, duration: 0.68, filename: "bk-hn-forest-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ừng', color : getRandomColor()},
  ]},
  {id: 5, text: "Hoa", start: 2.44, duration: 0.68, filename: "bk-hn-flower-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'oa', color : getRandomColor()},
  ]},
  {id: 6, text: "Đồi", start: 2.44, duration: 0.68, filename: "bk-hn-hill-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổi', color : getRandomColor()},
  ]},
  {id: 7, text: "Thác", start: 2.44, duration: 0.68, filename: "bk-hn-waterfall-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ác', color : getRandomColor()},
  ]},
  {id: 8, text: "Đất", start: 2.44, duration: 0.68, filename: "bk-hn-soil-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ất', color : getRandomColor()},
  ]},
  {id: 9, text: "Kéo", start: 2.44, duration: 0.68, filename: "bk-hn-pull-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'K', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'éo', color : getRandomColor()},
  ]},
  {id: 10, text: "Ruồi", start: 2.44, duration: 0.68, filename: "bk-hn-fly-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'uồi', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_13: WordSplit[] = [
  {id: 1, text: "Dế", start: 2.44, duration: 0.68, filename: "bk-hn-cricket-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ế', color : getRandomColor()},
  ]},
  {id: 2, text: "Gián", start: 2.44, duration: 0.68, filename: "bk-hn-cockroach-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Gi', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'án', color : getRandomColor()},
  ]},
  {id: 3, text: "Giun", start: 2.44, duration: 0.68, filename: "bk-hn-worm-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Gi', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'un', color : getRandomColor()},
  ]},
  {id: 4, text: "Kiến", start: 2.44, duration: 0.68, filename: "bk-hn-ant-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'K', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'iến', color : getRandomColor()},
  ]},
  {id: 5, text: "Nhện", start: 2.44, duration: 0.68, filename: "bk-hn-spider-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ện', color : getRandomColor()},
  ]},
  {id: 6, text: "Rết", start: 2.44, duration: 0.68, filename: "bk-hn-centipede-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ết', color : getRandomColor()},
  ]},
  {id: 7, text: "Đu", start: 2.44, duration: 0.68, filename: "bk-hn-swing-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'u', color : getRandomColor()},
  ]},
  {id: 8, text: "Lái", start: 2.44, duration: 0.68, filename: "bk-hn-ride-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ái', color : getRandomColor()},
  ]},
  {id: 9, text: "Bơi", start: 2.44, duration: 0.68, filename: "bk-hn-swim-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ơi', color : getRandomColor()},
  ]},
  {id: 10, text: "Trượt", start: 2.44, duration: 0.68, filename: "bk-hn-slide-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ượt', color : getRandomColor()},
  ]},
  {id: 11, text: "Lăn", start: 2.44, duration: 0.68, filename: "bk-hn-roll-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăn', color : getRandomColor()},
  ]},
  {id: 12, text: "Leo", start: 2.44, duration: 0.68, filename: "bk-hn-climb-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'eo', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_14: WordSplit[] = [
  {id: 1, text: "Mực", start: 2.44, duration: 0.68, filename: "bk-hn-squid-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ực', color : getRandomColor()},
  ]},
  {id: 2, text: "Sứa", start: 2.44, duration: 0.68, filename: "bk-hn-jellyfish-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ứa', color : getRandomColor()},
  ]},
  {id: 3, text: "Lươn", start: 2.44, duration: 0.68, filename: "bk-hn-eel-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ươn', color : getRandomColor()},
  ]},
  {id: 4, text: "Mặt", start: 2.44, duration: 0.68, filename: "bk-hn-face-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ặt', color : getRandomColor()},
  ]},
  {id: 5, text: "Má", start: 2.44, duration: 0.68, filename: "bk-hn-cheek-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'á', color : getRandomColor()},
  ]},
  {id: 6, text: "Lưng", start: 2.44, duration: 0.68, filename: "bk-hn-back-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ưng', color : getRandomColor()},
  ]},
  {id: 7, text: "Rau", start: 2.44, duration: 0.68, filename: "bk-hn-vegetables-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'au', color : getRandomColor()},
  ]},
  {id: 8, text: "Mỳ", start: 2.44, duration: 0.68, filename: "bk-hn-noodles-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỳ', color : getRandomColor()},
  ]},
  {id: 9, text: "Đậu", start: 2.44, duration: 0.68, filename: "bk-hn-beans-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ậu', color : getRandomColor()},
  ]},
  {id: 10, text: "Cá", start: 2.44, duration: 0.68, filename: "bk-hn-fish-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'á', color : getRandomColor()},
  ]},
  {id: 11, text: "Thịt", start: 2.44, duration: 0.68, filename: "bk-hn-steak-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ịt', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_15: WordSplit[] = [
  {id: 1, text: "Mái", start: 2.44, duration: 0.68, filename: "bk-hn-roof-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổ', color : getRandomColor()},
  ]},
  {id: 2, text: "Cổng", start: 2.44, duration: 0.68, filename: "bk-hn-gate-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Kh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỉ', color : getRandomColor()},
  ]},
  {id: 3, text: "Cửa", start: 2.44, duration: 0.68, filename: "bk-hn-door-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'oi', color : getRandomColor()},
  ]},
  {id: 4, text: "Tường", start: 2.44, duration: 0.68, filename: "bk-hn-wall-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ấu', color : getRandomColor()},
  ]},
  {id: 5, text: "Trần", start: 2.44, duration: 0.68, filename: "bk-hn-ceiling-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắn', color : getRandomColor()},
  ]},
  {id: 6, text: "Đào", start: 2.44, duration: 0.68, filename: "bk-hn-peach-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'áo', color : getRandomColor()},
  ]},
  {id: 7, text: "Dừa", start: 2.44, duration: 0.68, filename: "bk-hn-coconut-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âng', color : getRandomColor()},
  ]},
  {id: 8, text: "Khế", start: 2.44, duration: 0.68, filename: "bk-hn-starfruit-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ả', color : getRandomColor()},
  ]},
  {id: 9, text: "Xoài", start: 2.44, duration: 0.68, filename: "bk-hn-mango-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắt', color : getRandomColor()},
  ]},
  {id: 10, text: "Chơi", start: 2.44, duration: 0.68, filename: "bk-hn-play-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ém', color : getRandomColor()},
  ]},
  {id: 11, text: "Đếm", start: 2.44, duration: 0.68, filename: "bk-hn-count-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắm', color : getRandomColor()},
  ]},
  {id: 12, text: "Trốn", start: 2.44, duration: 0.68, filename: "bk-hn-find-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ưa', color : getRandomColor()},
  ]},
  {id: 13, text: "Tìm", start: 2.44, duration: 0.68, filename: "bk-hn-choose-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ấy', color : getRandomColor()},
  ]},
  {id: 14, text: "Chọn", start: 2.44, duration: 0.68, filename: "bk-hn-choose-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ặt', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_16: WordSplit[] = [
  {id: 1, text: "Sói", start: 2.44, duration: 0.68, filename: "bk-hn-pebbles-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ói', color : getRandomColor()},
  ]},
  {id: 2, text: "Sóng", start: 2.44, duration: 0.68, filename: "bk-hn-wave-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'óng', color : getRandomColor()},
  ]},
  {id: 3, text: "Cát", start: 2.44, duration: 0.68, filename: "bk-hn-sand-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'át', color : getRandomColor()},
  ]},
  {id: 4, text: "Biển", start: 2.44, duration: 0.68, filename: "bk-hn-sea-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'iển', color : getRandomColor()},
  ]},
  {id: 5, text: "Bùn", start: 2.44, duration: 0.68, filename: "bk-hn-mud-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ùn', color : getRandomColor()},
  ]},
  {id: 6, text: "Thạch", start: 2.44, duration: 0.68, filename: "bk-hn-jello-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ạch', color : getRandomColor()},
  ]},
  {id: 7, text: "Nước", start: 2.44, duration: 0.68, filename: "bk-hn-water-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ước', color : getRandomColor()},
  ]},
  {id: 8, text: "Sữa", start: 2.44, duration: 0.68, filename: "bk-hn-milk-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ữa', color : getRandomColor()},
  ]},
  {id: 9, text: "Trà", start: 2.44, duration: 0.68, filename: "bk-hn-tea-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'à', color : getRandomColor()},
  ]},
  {id: 10, text: "Kem", start: 2.44, duration: 0.68, filename: "bk-hn-ice-cream-split--man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'K', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'em', color : getRandomColor()},
  ]},
  {id: 11, text: "Bánh", start: 2.44, duration: 0.68, filename: "bk-hn-cake-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ánh', color : getRandomColor()},
  ]},
];

export const LIST_2_WORD_SPLIT = [
  WORD_SPLIT_9,
  WORD_SPLIT_10,
  WORD_SPLIT_11,
  WORD_SPLIT_12,
  WORD_SPLIT_13,
  WORD_SPLIT_14,
  WORD_SPLIT_15,
  WORD_SPLIT_16,
];
