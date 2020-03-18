/**
 * Created by tovan on 2/20/2017.
 */
import {WordSplit} from '../models/word_split';
import {Split} from "../models/split";

function getRandomColor() : string {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const WORDS_SPLIT: WordSplit[] = [
  {id: 1, text: "Ngồi", start: 2.44, duration: 0.68, filename: "bk-hn-sit-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ng', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ồi', color : getRandomColor()},
  ]},
  {id: 2, text: "Đứng",start: 2.80, duration: 0.66, filename: "bk-hn-stand-split-man(2)", wordsSplit: [
    {id: 1, start: 0.00, duration: 0.96, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 1.17, duration: 1.46, text: 'ứng', color : getRandomColor()},
  ]},
  {id: 3, text: "Tóc",start: 1.88, duration: 0.59, filename: "bk-hn-hair-split-man(3)", wordsSplit: [
    {id: 1, start: 0.00, duration: 0.53, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.84, duration: 0.80, text: 'óc', color : getRandomColor()},
  ]},
  {id: 4, text: "Mắt",start: 2.06, duration: 0.56, filename: "bk-hn-eye-split-man(3)", wordsSplit: [
    {id: 1, start: 0.04, duration: 0.51, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.77, duration: 1.05, text: 'ắt', color : getRandomColor()},
  ]},
  {id: 5, text: "Đá",start: 3.50, duration: 0.72, filename: "bk-hn-kick-split-man(2)", wordsSplit: [
    {id: 1, start: 0.05, duration: 0.94, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 1.37, duration: 1.85, text: 'á', color : getRandomColor()},
  ]},
  {id: 6, text: "Ăn",start: 2.17, duration: 0.66, filename: "bk-hn-eat-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.00, duration: 1.14, text: 'Ă', color : getRandomColor()},
    {id: 2, start: 1.05, duration: 1.10, text: 'n', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_1: WordSplit[] = [
  {id: 1, text: "Vỗ", start: 2.44, duration: 0.68, filename: "bk-hn-clap-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỗ', color : getRandomColor()},
  ]},
  {id: 2, text: "Vẫy", start: 2.44, duration: 0.68, filename: "bk-hn-wave-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ẫy', color : getRandomColor()},
  ]},
  {id: 3, text: "Đá", start: 2.44, duration: 0.68, filename: "bk-hn-kick-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'á', color : getRandomColor()},
  ]},
  {id: 4, text: "Chỉ", start: 2.44, duration: 0.68, filename: "bk-hn-point-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỉ', color : getRandomColor()},
  ]},
  {id: 5, text: "Cười", start: 2.44, duration: 0.68, filename: "bk-hn-smile-pro-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ười', color : getRandomColor()},
  ]},
  {id: 6, text: "Ăn", start: 2.44, duration: 0.68, filename: "bk-hn-eat-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ă', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'n', color : getRandomColor()},
  ]},
  {id: 7, text: "Đứng", start: 2.44, duration: 0.68, filename: "bk-hn-stand-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ứng', color : getRandomColor()},
  ]},
  {id: 8, text: "Ngồi", start: 2.44, duration: 0.68, filename: "bk-hn-sit-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ng', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ồi', color : getRandomColor()},
  ]},
  {id: 9, text: "Tóc", start: 2.44, duration: 0.68, filename: "bk-hn-hair-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'óc', color : getRandomColor()},
  ]},
  {id: 10, text: "Mắt", start: 2.44, duration: 0.68, filename: "bk-hn-eye-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắt', color : getRandomColor()},
  ]},
  {id: 11, text: "Mũi", start: 2.44, duration: 0.68, filename: "bk-hn-nose-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ũi', color : getRandomColor()},
  ]},
  {id: 12, text: "Tai", start: 2.44, duration: 0.68, filename: "bk-hn-ear-split-woman(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ai', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_2: WordSplit[] = [
  {id: 1, text: "Môi", start: 2.44, duration: 0.68, filename: "bk-hn-lip-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ôi', color : getRandomColor()},
  ]},
  {id: 2, text: "Cằm", start: 2.44, duration: 0.68, filename: "bk-hn-chin-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ằm', color : getRandomColor()},
  ]},
  {id: 3, text: "Miệng", start: 2.44, duration: 0.68, filename: "bk-hn-mouth-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'iệng', color : getRandomColor()},
  ]},
  {id: 4, text: "Lưỡi", start: 2.44, duration: 0.68, filename: "bk-hn-tongue-split-woman(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ưỡi', color : getRandomColor()},
  ]},
  {id: 5, text: "Răng", start: 2.44, duration: 0.68, filename: "bk-hn-tooth-pro-woman", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăng', color : getRandomColor()},
  ]},
  {id: 6, text: "Chó", start: 2.44, duration: 0.68, filename: "bk-hn-dog-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ó', color : getRandomColor()},
  ]},
  {id: 7, text: "Mèo", start: 2.44, duration: 0.68, filename: "bk-hn-cat-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'èo', color : getRandomColor()},
  ]},
  {id: 8, text: "Ngựa", start: 2.44, duration: 0.68, filename: "bk-hn-horse-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ng', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ựa', color : getRandomColor()},
  ]},
  {id: 9, text: "Lợn", start: 2.44, duration: 0.68, filename: "bk-hn-pig-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ợn', color : getRandomColor()},
  ]},
  {id: 10, text: "Chim", start: 2.44, duration: 0.68, filename: "bk-hn-bird-split-child(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'im', color : getRandomColor()},
  ]},
  {id: 11, text: "Vịt", start: 2.44, duration: 0.68, filename: "bk-hn-duck-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ịt', color : getRandomColor()},
  ]},
  {id: 12, text: "Lừa", start: 2.44, duration: 0.68, filename: "bk-hn-donkey-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ừa', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_3: WordSplit[] = [
  {id: 1, text: "Cá", start: 2.44, duration: 0.68, filename: "bk-hn-fish-split-woman(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'á', color : getRandomColor()},
  ]},
  {id: 2, text: "Chuột", start: 2.44, duration: 0.68, filename: "bk-hn-mouse-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'uột', color : getRandomColor()},
  ]},
  {id: 3, text: "Gà", start: 2.44, duration: 0.68, filename: "bk-hn-chicken-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'à', color : getRandomColor()},
  ]},
  {id: 4, text: "Thỏ", start: 2.44, duration: 0.68, filename: "bk-hn-rabbit-split-woman(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỏ', color : getRandomColor()},
  ]},
  {id: 5, text: "Dê", start: 2.44, duration: 0.68, filename: "bk-hn-goat-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ê', color : getRandomColor()},
  ]},
  {id: 6, text: "Cừu", start: 2.44, duration: 0.68, filename: "bk-hn-sheep-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ừu', color : getRandomColor()},
  ]},
  {id: 7, text: "Cam", start: 2.44, duration: 0.68, filename: "bk-hn-orange-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'am', color : getRandomColor()},
  ]},
  {id: 8, text: "Vàng", start: 2.44, duration: 0.68, filename: "bk-hn-yellow-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'àng', color : getRandomColor()},
  ]},
  {id: 9, text: "Nâu", start: 2.44, duration: 0.68, filename: "bk-hn-brown-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âu', color : getRandomColor()},
  ]},
  {id: 10, text: "Đỏ", start: 2.44, duration: 0.68, filename: "bk-hn-red-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỏ', color : getRandomColor()},
  ]},
  {id: 11, text: "Hồng", start: 2.44, duration: 0.68, filename: "bk-hn-pink-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ồng', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_4: WordSplit[] = [
  {id: 1, text: "Tím", start: 2.44, duration: 0.68, filename: "bk-hn-purple-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ím', color : getRandomColor()},
  ]},
  {id: 2, text: "Đen", start: 2.44, duration: 0.68, filename: "bk-hn-black-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'en', color : getRandomColor()},
  ]},
  {id: 3, text: "Trắng", start: 2.44, duration: 0.68, filename: "bk-hn-white-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắng', color : getRandomColor()},
  ]},
  {id: 4, text: "Bò", start: 2.44, duration: 0.68, filename: "bk-hn-crawl-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ò', color : getRandomColor()},
  ]},
  {id: 5, text: "Nhảy", start: 2.44, duration: 0.68, filename: "bk-hn-jump-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ảy', color : getRandomColor()},
  ]},
  {id: 6, text: "Khóc", start: 2.44, duration: 0.68, filename: "bk-hn-cry-split-man(3)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Kh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'óc', color : getRandomColor()},
  ]},
  {id: 7, text: "Đọc", start: 2.44, duration: 0.68, filename: "bk-hn-read-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ọc', color : getRandomColor()},
  ]},
  {id: 8, text: "Hôn", start: 2.44, duration: 0.68, filename: "bk-hn-kiss-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ôn', color : getRandomColor()},
  ]},
  {id: 9, text: "Ôm", start: 2.44, duration: 0.68, filename: "bk-hn-hug-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ô', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'm', color : getRandomColor()},
  ]},
  {id: 10, text: "Múa", start: 2.44, duration: 0.68, filename: "bk-hn-dance-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'M', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'úa', color : getRandomColor()},
  ]},
  {id: 11, text: "Thổi", start: 2.44, duration: 0.68, filename: "bk-hn-blow-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổi', color : getRandomColor()},
  ]},
  {id: 12, text: "Gật", start: 2.44, duration: 0.68, filename: "bk-hn-nod-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ật', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_5: WordSplit[] = [
  {id: 1, text: "Đầu", start: 2.44, duration: 0.68, filename: "bk-hn-head-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ầu', color : getRandomColor()},
  ]},
  {id: 2, text: "Tay", start: 2.44, duration: 0.68, filename: "bk-hn-arm-split-woman", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ay', color : getRandomColor()},
  ]},
  {id: 3, text: "Chân", start: 2.44, duration: 0.68, filename: "bk-hn-leg-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ân', color : getRandomColor()},
  ]},
  {id: 4, text: "Cổ", start: 2.44, duration: 0.68, filename: "bk-hn-neck-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổ', color : getRandomColor()},
  ]},
  {id: 5, text: "Rốn", start: 2.44, duration: 0.68, filename: "bk-hn-belly button-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ốn', color : getRandomColor()},
  ]},
  {id: 6, text: "Vai", start: 2.44, duration: 0.68, filename: "bk-hn-shoulder-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ai', color : getRandomColor()},
  ]},
  {id: 7, text: "Bóng", start: 2.44, duration: 0.68, filename: "bk-hn-ball-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'óng', color : getRandomColor()},
  ]},
  {id: 8, text: "Sách", start: 2.44, duration: 0.68, filename: "bk-hn-book-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ách', color : getRandomColor()},
  ]},
  {id: 9, text: "Váy", start: 2.44, duration: 0.68, filename: "bk-hn-skirt-pro-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'áy', color : getRandomColor()},
  ]},
  {id: 10, text: "Dép", start: 2.44, duration: 0.68, filename: "bk-hn-slippers-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ép', color : getRandomColor()},
  ]},
  {id: 11, text: "Giày", start: 2.44, duration: 0.68, filename: "bk-hn-shoes-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Gi', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ày', color : getRandomColor()},
  ]},
  {id: 12, text: "Tất", start: 2.44, duration: 0.68, filename: "bk-hn-socks-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ất', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_6: WordSplit[] = [
  {id: 1, text: "Táo", start: 2.44, duration: 0.68, filename: "bk-hn-apple-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'T', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'áo', color : getRandomColor()},
  ]},
  {id: 2, text: "Cam", start: 2.44, duration: 0.68, filename: "bk-hn-orange-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'am', color : getRandomColor()},
  ]},
  {id: 3, text: "Chuối", start: 2.44, duration: 0.68, filename: "bk-hn-banana-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'uối', color : getRandomColor()},
  ]},
  {id: 4, text: "Dâu", start: 2.44, duration: 0.68, filename: "bk-hn-strawberry-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'D', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âu', color : getRandomColor()},
  ]},
  {id: 5, text: "Chanh", start: 2.44, duration: 0.68, filename: "bk-hn-lemon-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'anh', color : getRandomColor()},
  ]},
  {id: 6, text: "Nho", start: 2.44, duration: 0.68, filename: "bk-hn-grapes-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'o', color : getRandomColor()},
  ]},
  {id: 7, text: "Lê", start: 2.44, duration: 0.68, filename: "bk-hn-pear-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ê', color : getRandomColor()},
  ]},
  {id: 8, text: "Thơm", start: 2.44, duration: 0.68, filename: "bk-hn-pineapple-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ơm', color : getRandomColor()},
  ]},
  {id: 9, text: "Giường", start: 2.44, duration: 0.68, filename: "bk-hn-bed-split-woman(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Gi', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ường', color : getRandomColor()},
  ]},
  {id: 10, text: "Bàn", start: 2.44, duration: 0.68, filename: "bk-hn-table-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'àn', color : getRandomColor()},
  ]},
  {id: 11, text: "Chổi", start: 2.44, duration: 0.68, filename: "bk-hn-broom-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổi', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_7: WordSplit[] = [
  {id: 1, text: "Nôi", start: 2.44, duration: 0.68, filename: "bk-hn-crib-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ôi', color : getRandomColor()},
  ]},
  {id: 2, text: "Chăn", start: 2.44, duration: 0.68, filename: "bk-hn-blanket-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăn', color : getRandomColor()},
  ]},
  {id: 3, text: "Gối", start: 2.44, duration: 0.68, filename: "bk-hn-pillow-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ối', color : getRandomColor()},
  ]},
  {id: 4, text: "Thăm", start: 2.44, duration: 0.68, filename: "bk-hn-rug-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ăm', color : getRandomColor()},
  ]},
  {id: 5, text: "Cũi", start: 2.44, duration: 0.68, filename: "bk-hn-playpen-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ũi', color : getRandomColor()},
  ]},
  {id: 6, text: "Gương", start: 2.44, duration: 0.68, filename: "bk-hn-mirror-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ương', color : getRandomColor()},
  ]},
  {id: 7, text: "Chạy", start: 2.44, duration: 0.68, filename: "bk-hn-run-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Ch', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ạy', color : getRandomColor()},
  ]},
  {id: 8, text: "Quỳ", start: 2.44, duration: 0.68, filename: "bk-hn-kneel-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Qu', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỳ', color : getRandomColor()},
  ]},
  {id: 9, text: "Đi", start: 2.44, duration: 0.68, filename: "bk-hn-walk-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'i', color : getRandomColor()},
  ]},
  {id: 10, text: "Trứng", start: 2.44, duration: 0.68, filename: "bk-hn-egg-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Tr', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ứng', color : getRandomColor()},
  ]},
  {id: 11, text: "Cơm", start: 2.44, duration: 0.68, filename: "bk-hn-rice-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ơm', color : getRandomColor()},
  ]},
  {id: 12, text: "Bột", start: 2.44, duration: 0.68, filename: "bk-hn-oatmeal-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ột', color : getRandomColor()},
  ]},
  {id: 13, text: "Súp", start: 2.44, duration: 0.68, filename: "bk-hn-soup-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'S', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'úp', color : getRandomColor()},
  ]},
];

export const WORD_SPLIT_8: WordSplit[] = [
  {id: 1, text: "Hổ", start: 2.44, duration: 0.68, filename: "bk-hn-tiger-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'H', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ổ', color : getRandomColor()},
  ]},
  {id: 2, text: "Khỉ", start: 2.44, duration: 0.68, filename: "bk-hn-monkey-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Kh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ỉ', color : getRandomColor()},
  ]},
  {id: 3, text: "Voi", start: 2.44, duration: 0.68, filename: "bk-hn-elephant-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'V', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'oi', color : getRandomColor()},
  ]},
  {id: 4, text: "Gấu", start: 2.44, duration: 0.68, filename: "bk-hn-bear-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'G', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ấu', color : getRandomColor()},
  ]},
  {id: 5, text: "Rắn", start: 2.44, duration: 0.68, filename: "bk-hn-snake-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'R', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắn', color : getRandomColor()},
  ]},
  {id: 6, text: "Cáo", start: 2.44, duration: 0.68, filename: "bk-hn-fox-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'áo', color : getRandomColor()},
  ]},
  {id: 7, text: "Nâng", start: 2.44, duration: 0.68, filename: "bk-hn-lift-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'âng', color : getRandomColor()},
  ]},
  {id: 8, text: "Thả", start: 2.44, duration: 0.68, filename: "bk-hn-drop-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Th', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ả', color : getRandomColor()},
  ]},
  {id: 9, text: "Bắt", start: 2.44, duration: 0.68, filename: "bk-hn-catch-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'B', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắt', color : getRandomColor()},
  ]},
  {id: 10, text: "Ném", start: 2.44, duration: 0.68, filename: "bk-hn-throw-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ém', color : getRandomColor()},
  ]},
  {id: 11, text: "Nắm", start: 2.44, duration: 0.68, filename: "bk-hn-hold-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'N', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ắm', color : getRandomColor()},
  ]},
  {id: 12, text: "Đưa", start: 2.44, duration: 0.68, filename: "bk-hn-give-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Đ', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ưa', color : getRandomColor()},
  ]},
  {id: 12, text: "Lấy", start: 2.44, duration: 0.68, filename: "bk-hn-take-split-man(1)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'L', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ấy', color : getRandomColor()},
  ]},
  {id: 12, text: "Nhặt", start: 2.44, duration: 0.68, filename: "bk-hn-pick-split-man(2)", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'Nh', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ặt', color : getRandomColor()},
  ]},
  {id: 12, text: "Cầm", start: 2.44, duration: 0.68, filename: "bk-hn-hold-split-man", wordsSplit: [
    {id: 1, start: 0.07, duration: 0.55, text: 'C', color : getRandomColor()},
    {id: 2, start: 0.82, duration: 1.39, text: 'ầm', color : getRandomColor()},
  ]},
];

export const LIST_1_WORD_SPLIT = [
  WORD_SPLIT_1,
  WORD_SPLIT_2,
  WORD_SPLIT_3,
  WORD_SPLIT_4,
  WORD_SPLIT_5,
  WORD_SPLIT_6,
  WORD_SPLIT_7,
  WORD_SPLIT_8,
];


