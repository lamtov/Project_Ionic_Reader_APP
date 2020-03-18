/**
 * Created by tovan on 2/20/2017.
 */
import {Word} from '../models/word';

//id 0 là tiêu đề và nội dung chính
//id 1 trở đi là nội dung từng câu
//text là nội dung text, nội dung trong file mp3
//file name là tên file dùng option để lấy rõ địa chỉ file
export const EVERYDAY_PHRASES: Word[] = [
  {id:0,text:"Những câu nó hàng ngày",filename:"everyday-phrase-title-pro"},
  {id:1,text:"Con khỏe không?",filename:"how-are-you-pro"},
  {id:2,text:"Tạm biệt",filename:"goodbye-pro"},
  {id:3,text:"Cảm ơn con",filename:"thank-you-pro"},
  {id:4,text:"Xin chào",filename:"hello-pro"},
  {id:5,text:"Vui lòng",filename:"please-pro"},
  {id:6,text:"Vâng làm ơn",filename:"yes-please-pro"},
  {id:7,text:"Không cảm ơn",filename:"no-thank-you-pro"},
  {id:8,text:"Không có chi",filename:"you-are-welcome-pro"},
  {id:9,text:"Mình khỏe. Cảm ơn nhé!",filename:"i-am-fine-thank-you-pro"},
  {id:10,text:"Tên tôi là  [Tên bé]",filename:"my-name-is-pro"},
  {id:11,text:"Tôi… tuổi",filename:"i-am-years-old-pro"}
];
export const FAMILY: Word[] = [
  {id:0,text:"Gia đình",filename:"family-title-pro"},
  {id:1,text:"Mẹ",filename:"mommy-pro"},
  {id:2,text:"Ba",filename:"daddy-pro"},
  {id:3,text:"[Tên bé]",filename:"baby-name-pro"},
  {id:4,text:"Bà",filename:"grandma-pro"},
  {id:5,text:"Ông",filename:"grandpa-pro"}

];
export const THE_ALPHABETS: Word[] = [
  {id:0,text:"Bảng chữ cái",filename:"alphabet-title-pro"},
  {id:1,text:"a",filename:"alphabet-a-pro"},
  {id:2,text:"ă",filename:"alphabet-a1-pro"},
  {id:3,text:"â",filename:"alphabet-a2-pro"},
  {id:4,text:"b",filename:"alphabet-b-pro"},
  {id:5,text:"c",filename:"alphabet-c-pro"},
  {id:6,text:"d",filename:"alphabet-d-pro"},
  {id:7,text:"đ",filename:"alphabet-d7-pro"},
  {id:8,text:"e",filename:"alphabet-e-pro"},
  {id:9,text:"ê",filename:"alphabet-e3-pro"},
  {id:10,text:"g",filename:"alphabet-g-pro"},
  {id:11,text:"h",filename:"alphabet-h-pro"},
  {id:12,text:"i",filename:"alphabet-i-pro"},
  {id:13,text:"y",filename:"alphabet-y-pro"},
  {id:14,text:"k",filename:"alphabet-k-pro"},
  {id:15,text:"l",filename:"alphabet-l-pro"},
  {id:16,text:"m",filename:"alphabet-m-pro"},
  {id:17,text:"n",filename:"alphabet-n-pro"},
  {id:18,text:"o",filename:"alphabet-o-pro"},
  {id:19,text:"ô",filename:"alphabet-o4-pro"},
  {id:20,text:"ơ",filename:"alphabet-o6-pro"},
  {id:21,text:"p",filename:"alphabet-p-pro"},
  {id:22,text:"q",filename:"alphabet-q-pro"},
  {id:23,text:"r",filename:"alphabet-r-pro"},
  {id:24,text:"s",filename:"alphabet-s-pro"},
  {id:25,text:"t",filename:"alphabet-t-pro"},
  {id:26,text:"u",filename:"alphabet-u-pro"},
  {id:27,text:"ư",filename:"alphabet-u5-pro"},
  {id:28,text:"v",filename:"alphabet-v-pro"},
  {id:29,text:"x",filename:"alphabet-x-pro"}
];
export const GAME_AUDIO_QUESTION: Word[] = [
  {id:0,text:"Chữ nào là",filename:"game-words-ques-1-pro"},
  {id:1,text:"Bạn hãy chỉ vào chữ",filename:"game-words-ques-2-pro"},
  {id:2,text:"Bạn hãy chọn chữ",filename:"game-words-ques-3-pro"},
  {id:3,text:"Bạn hãy tìm chữ",filename:"game-words-ques-4-pro"}
];
export const GAME_AUDIO_APPLAUSE_CORRECT_ANSWER: Word[] = [
  {id:0,text:"Đúng rồi",filename:"game-right-1-pro"},
  {id:1,text:"Giỏi quá",filename:"game-right-2-pro"},
  {id:2,text:"Rê",filename:"game-right-3-pro"},
  {id:3,text:"Chính xác",filename:"game-right-4-pro"},
  {id:4,text:"Xuất sắc",filename:"game-right-5-pro"},
  {id:5,text:"Bạn làm rất tốt",filename:"game-right-6-pro"}
];
export const GAME_AUDIO_WRONG_ANSWER: Word[] = [
  {id:0,text:"Hãy thử lại nào",filename:"game-wrong-1-pro"},
  {id:1,text:"Lại lần nữa",filename:"game-wrong-2-pro"},
];
export const GAME_LESSON_AUDIO_THE_END: Word[] = [
  // {id:,text:"",filename:""},
];
export const LESSON_TITLES: Word[] = [
  {id:1,text:"Picture Flash",filename:"part_1.jpg"},
  {id:2,text:"Multisensory 1",filename:"part_2.jpg"},
  {id:3,text:"Multisensory 2",filename:"part_3.jpg"},
  {id:4,text:"Pattern Phonics 1",filename:"part_5.jpg"},
  {id:5,text:"Pattern Phonics 2",filename:"part_6.jpg"},
  {id:6,text:"Sight Words",filename:"part_7.jpg"},
  {id:7,text:"Word Split",filename:"part_8.jpg"},
  {id:8,text:"Word Split",filename:"part_4.jpg"}
];
