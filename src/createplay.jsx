import React, { useState, useMemo , useEffect} from "react";
import SidebarPlayist from "./sidebarplayist";
import { Link } from "react-router-dom";

export default function CreatePlay(){
    const songs = [
        { id: 1, Title: ' Standing Next to You (Usher Remix)', Artist: 'Jung kook, USHER ' , Album : ' Standing Next to You (Usher Remix)', Duration : "3:49 " , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/30/eb/96/30eb96f1-7660-bef0-3cb8-ed75f216dc2b/196922734229_Cover.jpg/1200x1200bf-60.jpg ' , music : '/music/hotkorea/정국 (Jung Kook), Usher ‘Standing Next to You - Usher Remix’ Official Performance Video.mp3 '},
        { id: 2, Title: 'Standing Next To You', Artist: 'Jung Kook ' , Album : 'GOLDEN ', Duration : " 3:37" , Day : ' 1 days ago' , img : ' https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f2/54/08/f254081d-c7e2-6cd6-f7c5-dedb56fd95bd/196922710582_Cover.jpg/1200x1200bb.jpg ' , music : ' /music/kpop/정국 (Jung Kook) Standing Next to You Official MV.mp3 '},
        { id: 3, Title: '3D(ft. Jack Harlow)', Artist: 'Jung kook, Jack Harlow ' , Album : ' 3D(ft. Jack Harlow)', Duration : " 3:50" , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jungkook_-_3D.png ' , music : '/music/hotkorea/3D.mp3 '},
        { id: 4, Title: 'Seven (ft. Latto)', Artist: 'Jung kook, Latto ' , Album : 'Seven (ft. Latto) ', Duration : "3:04 " , Day : ' 1 day ago' , img : 'https://m.media-amazon.com/images/M/MV5BNDAzYjUzMTEtZDk3YS00OGY1LTgyNTQtNmMzNzg5MTM0NGFjXkEyXkFqcGdeQXVyNDYzNDg2MTM@._V1_.jpg  ' , music : '/music/hotkorea/Seven (feat. Latto) - Clean Ver..mp3 '},
        { id: 5, Title: 'Yes or No', Artist: 'Jung Kook ' , Album : ' GOLDEN', Duration : " 2:27" , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f2/54/08/f254081d-c7e2-6cd6-f7c5-dedb56fd95bd/196922710582_Cover.jpg/1200x1200bb.jpg ' , music : '/music/kpop/Yes or No.mp3  '},
        { id: 1, Title: 'La Diabla ', Artist: 'Xavi ' , Album : 'La Diabla ', Duration : "2:52 " , Day : ' 1 day ago' , img : 'https://images.genius.com/562f7d3489294b634cfc06217a373b23.1000x1000x1.png  ' , music : '/music/hitusa/Xavi - La Diabla (Official Video).mp3 '},
        { id: 2, Title: 'yes, and?', Artist: 'Ariana Grande ' , Album : 'yes, and? ', Duration : "3:34 " , Day : ' 1 day ago' , img : ' https://static.wikia.nocookie.net/arianagrande/images/9/96/Eternal_Sunshine_Cover_1.jpg/revision/latest?cb=20240112051417 ' , music : '/music/hitusa/Ariana Grande - yes, and_.mp3 '},
        { id: 3, Title: 'greedy', Artist: 'Tate McRae ' , Album : 'THINK LATER ', Duration : " 2:11" , Day : '1 days ago ' , img : ' https://i1.sndcdn.com/artworks-OfGdxPzkOTbhCKlH-SGoBFQ-t500x500.jpg' , music : '/music/hitusa/Tate McRae - greedy (Official Video).mp3  '},
        { id: 4, Title: 'Lovin On Me', Artist: 'Jack Harlow ' , Album : ' Lovin On Me', Duration : " 2:18" , Day : ' 1 days ago' , img : ' https://i1.sndcdn.com/artworks-yehziW4wQNoafySp-Pete0g-t500x500.jpg ' , music : ' /music/hitusa/Jack Harlow - Lovin On Me [Official Music Video].mp3 '},
        { id: 5, Title: ' One Of the Girls', Artist: 'Jennie,Lily Rose, The Weeknd  ' , Album : 'The Idol ', Duration : " 4:40" , Day : '1 days ago ' ,img : 'https://images.genius.com/55e1d2b5376243566e951f899768cd3e.1000x1000x1.jpg ', music : '/music/hitusa/The Weeknd, JENNIE & Lily Rose Depp - One Of The Girls (Official Audio).mp3 '},
        { id: 1, Title: 'La Diabla ', Artist: 'Xavi ' , Album : 'La Diabla ', Duration : "2:52 " , Day : ' 1 day ago' , img : 'https://images.genius.com/562f7d3489294b634cfc06217a373b23.1000x1000x1.png  ' , music : '/music/hitusa/Xavi - La Diabla (Official Video).mp3 '},
        { id: 2, Title: 'greedy', Artist: 'Tate McRae ' , Album : 'THINK LATER ', Duration : " 2:11" , Day : '1 days ago ' , img : ' https://i1.sndcdn.com/artworks-OfGdxPzkOTbhCKlH-SGoBFQ-t500x500.jpg' , music : '/music/hitusa/Tate McRae - greedy (Official Video).mp3  '},
        { id: 3, Title: 'Lovin On Me', Artist: 'Jack Harlow ' , Album : ' Lovin On Me', Duration : " 2:18" , Day : ' 1 days ago' , img : ' https://i1.sndcdn.com/artworks-yehziW4wQNoafySp-Pete0g-t500x500.jpg ' , music : ' /music/hitusa/Jack Harlow - Lovin On Me [Official Music Video].mp3 '}, 
        { id: 4, Title: ' One Of the Girls', Artist: 'Jennie,Lily Rose, The Weeknd  ' , Album : 'The Idol ', Duration : " 4:40" , Day : '1 days ago ' ,img : 'https://images.genius.com/55e1d2b5376243566e951f899768cd3e.1000x1000x1.jpg ', music : '/music/hitusa/The Weeknd, JENNIE & Lily Rose Depp - One Of The Girls (Official Audio).mp3 '},
        { id: 5, Title: 'yes, and?', Artist: 'Ariana Grande ' , Album : 'yes, and? ', Duration : "3:34 " , Day : ' 1 day ago' , img : ' https://static.wikia.nocookie.net/arianagrande/images/9/96/Eternal_Sunshine_Cover_1.jpg/revision/latest?cb=20240112051417 ' , music : '/music/hitusa/Ariana Grande - yes, and_.mp3 '},
        { id: 1, Title: 'Satranga(From "ANIMAL")', Artist: 'Arijit Singh, Shreyas Poornik' , Album : 'Satranga(From "ANIMAL") ', Duration : "4:31 " , Day : ' 1 day ago' , img : 'https://www.manatelangana.news/wp-content/uploads/2023/10/rr-2.jpg ' , music : ' /music/hithindi/ANIMAL_ SATRANGA(Song) Ranbir Kapoor,Rashmika_Sandeep V_Arijit,Shreyas P,Siddharth-Garima _Bhushan K.mp3'},
        { id: 2, Title: 'Husn', Artist: 'Anuv Jain' , Album : 'Husn ', Duration : " 3:37" , Day : ' 1 days ago' , img : 'https://images.hungama.com/c/1/dc3/d94/106345461/106345461_300x300.jpg ' , music : '/music/hithindi/Anuv Jain - HUSN (Official Video).mp3'},
        { id: 3, Title: 'Oh Mahi(From "DUNKI")', Artist: 'Pritam, Arijith Singh.' , Album : 'Oh Mahi(From "DUNKI") ', Duration : "3:53 " , Day : '1 days ago ' , img : ' https://filmfare.wwmindia.com/content/2023/dec/dunki-drop-5-41702296413.jpg' , music : '  /music/hithindi/Dunki Drop 5_ O Maahi _ Shah Rukh Khan _ Taapsee Pannu _ Pritam _ Arijit Singh _ Irshad Kamil.mp3'},
        { id: 4, Title: 'What Jhumka?(From "Rocky Aur Ra..', Artist: 'Pritam, Arijith Singh' , Album : 'What Jhumka?(From "Rocky Aur Ra..', Duration : " 3:33" , Day : '1 days ago ' , img : 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/What-Jhumka-Rocky-Aur-Rani-Kii-Prem-Kahaani-Ranveer-Singh-Alia-Bhatt.jpg ' , music : '/music/hithindi/Darshan Raval - Saajan Ve(Official 4K Video).mp3'},
        { id: 5, Title: ' Chaleya(From "Jawan")', Artist: 'Anirudh Ravichander, Arijith Singh' , Album : 'Chaleya(From "Jawan") ', Duration : " 3:20" , Day : '1 days ago ' , img : ' https://stat5.bollywoodhungama.in/wp-content/uploads/2023/08/Jawan-Chaleya-Hindi-Shah-Rukh-Khan-Nayanthara-1-2-480x360.jpg' , music : ' /music/hithindi/AUR - SHIKAYAT - Raffey - Usama - Ahad (Official Music Video).mp3'},
        { id: 1, Title: 'Seven (ft. Latto)', Artist: 'Jung kook, Latto ' , Album : 'Seven (ft. Latto) ', Duration : "3:04 " , Day : ' 1 day ago' , img : 'https://m.media-amazon.com/images/M/MV5BNDAzYjUzMTEtZDk3YS00OGY1LTgyNTQtNmMzNzg5MTM0NGFjXkEyXkFqcGdeQXVyNDYzNDg2MTM@._V1_.jpg  ' , music : '/music/hotkorea/Seven (feat. Latto) - Clean Ver..mp3 '},
        { id: 2, Title: ' Perfect Night', Artist: 'LE SSERAFIM ' , Album : 'Perfect Night ', Duration : " 2:42" , Day : ' 1 days ago' , img : ' https://i.scdn.co/image/ab67616d0000b2735e352f6eccf8cb96d0b247cc ' , music : ' /music/hotkorea/lesserafim.mp3 '},
        { id: 3, Title: ' Standing Next to You (Usher Remix)', Artist: 'Jung kook, USHER ' , Album : ' Standing Next to You (Usher Remix)', Duration : "3:49 " , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/30/eb/96/30eb96f1-7660-bef0-3cb8-ed75f216dc2b/196922734229_Cover.jpg/1200x1200bf-60.jpg ' , music : '/music/hotkorea/정국 (Jung Kook), Usher ‘Standing Next to You - Usher Remix’ Official Performance Video.mp3 '},
        { id: 4, Title: 'To. X', Artist: 'TAEYEON ' , Album : 'To. X- The 5th Mini Album ', Duration : " 2:57" , Day : '1 days ago ' , img : ' https://newsimg.koreatimes.co.kr/2023/11/27/58def44f-6f67-4abb-be1f-4fb79a8e38ec.jpg' , music : '/music/hotkorea/TAEYEON 태연.mp3 '},
        { id: 5, Title: 'Closer Than This ', Artist: 'Jimin ' , Album : ' Closer Than This  ', Duration : " 4:24" , Day : '1 days ago ' , img : ' https://images.genius.com/4ae9840c5a123ff8aeac789c9b26117f.1000x1000x1.png ' , music : '/music/hotkorea/지민 (Jimin).mp3 '},
        { id: 6, Title: '3D(ft. Jack Harlow)', Artist: 'Jung kook, Jack Harlow ' , Album : ' 3D(ft. Jack Harlow)', Duration : " 3:50" , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jungkook_-_3D.png ' , music : '/music/hotkorea/3D.mp3 '},
        { id: 7, Title: 'Love Me Again ', Artist: 'V ' , Album : 'Layover  ', Duration : " 3:17" , Day : '1 days ago ' , img : ' https://images.genius.com/56c8a3c40ef113f3ce588046fa82ed8d.1000x1000x1.png' , music : '/music/hotkorea/V.mp3  '},
        { id: 1, Title: 'Kalapakkara', Artist: 'Jakes Bejoy, Shreya Goshal ' , Album : 'Kalapakkara ', Duration : "4:31 " , Day : ' 1 day ago' , img : ' https://c.saavncdn.com/153/Kalapakkaara-From-King-of-Kotha-Malayalam-2023-20230728151014-500x500.jpg ' , music : '/music/hitmala/King of Kotha - Kalapakkaara Lyric Video _ Dulquer Salmaan _ Abhilash Joshiy _ Jakes Bejoy.mp3 '},
        { id: 2, Title: 'SAMBAR', Artist: 'ThiruMali,Fejo ' , Album : ' SAMBAR', Duration : " 3:37" , Day : ' 1 days ago' , img : 'https://c.saavncdn.com/538/SAMBAR-Malayalam-2023-20231128053644-500x500.jpg  ' , music : ' /music/hitmala/Sambar (Official Video) - ThirumaLi x Thudwiser X Fejo X Dabzee _ Mrz Thoppi _ Def Jam India.mp3 '},
        { id: 3, Title: 'Parudeesa', Artist: ' Srinath basi, vinayaka sasikumar' , Album : ' Parudeesa(From "BheeshmaParvam)', Duration : "3:53 " , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b2736427830e630464aa6fb4283a ' , music : '/music/hitmala/Parudeesa Video Song _ Bheeshma Parvam _ Mammootty _ Amal Neerad _ Sushin Shyam _ Sreenath Bhasi.mp3 '},
        { id: 4, Title: 'Neela Nilave', Artist: 'Sam C s, Kapil Kapilan ' , Album : 'Neela Nilave ', Duration : " 4:33" , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/70/bc/d4/70bcd4e7-d5d4-0fe6-7c88-24a8f7e14c66/197189826290.jpg/600x600bf-60.jpg ' , music : '/music/hitmala/Neela Nilave - Video Song _ RDX _ Kapil Kapilan _ Sam CS _ Shane Nigam,Antony Varghese,Neeraj Madhav.mp3  '},
        { id: 5, Title: 'Thanne thanne ', Artist: 'Rajesh Murugesan, vijay Yesudas ' , Album : ' Gold ', Duration : " 3:20" , Day : '1 days ago ' , img : ' https://c.saavncdn.com/898/Gold-Malayalam-2022-20221201161939-500x500.jpg ' , music : '/music/hitmala/Thanne Thanne Video Song _ Gold Movie _ Prithviraj _ Nayanthara _ Alphonse Puthren _Rajesh Murugesan.mp3  '},
        { id: 1, Title: 'One Love', Artist: 'Shubh ' , Album : 'One Love ', Duration : "2:31 " , Day : ' 1 day ago' , img : ' https://images.genius.com/2721486f83874d407d1dcd84a2d6cdea.1000x1000x1.jpg ' , music : '/music/hitpunj/Shubh - One Love (Official Audio).mp3 '},
        { id: 2, Title: 'Calfornia Love', Artist: 'Cheema Y, Gur Sidhu ' , Album : 'ANYWAY ', Duration : " 3:37" , Day : ' 1 days ago' , img : ' https://i1.sndcdn.com/artworks-WZe9ChE02wFl-0-t500x500.jpg ' , music : ' /music/hitpunj/CALIFORNIA LOVE (Official Video) Cheema Y _ Gur Sidhu _ New Punjabi Song 2023.mp3 '},
        { id: 3, Title: '9:45', Artist: ' Prabh Singh, Jay Track' , Album : '9:45 ', Duration : "3:03 " , Day : '1 days ago ' , img : 'https://i.ytimg.com/vi/3gDotU0KnVg/maxresdefault.jpg ' , music : '/music/hitpunj/Prabh - 9_45 (Official Music Video) feat. Jay Trak.mp3 '},
        { id: 4, Title: 'Kinni Kinni', Artist: 'Diojit Dosanj ' , Album : 'Ghost ', Duration : " 3:33" , Day : '1 days ago ' , img : 'https://i1.sndcdn.com/artworks-BW8xGGerK93IKgCq-s1WXwg-t500x500.jpg ' , music : '/music/hitpunj/Diljit Dosanjh_ Kinni Kinni (Official Audio) GHOST _ Thiarajxtt, Raj Ranjodh.mp3  '},
        { id: 1, Title: ' Ordinary Person(From "Leo") ', Artist: 'Anirudh Rvichander, Nikita Gandhi ' , Album : ' Ordinary Person(From "Leo")', Duration : "3:46 " , Day : ' 1 day ago' , img : ' https://i.ytimg.com/vi/326UBY4B-ZU/maxresdefault.jpg ' , music : '/music/hittamil/LEO - Ordinary Person Lyric _ Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi.mp3 '},
        { id: 2, Title: ' Maamadura', Artist: ' Santhosh Narayanan, Dhee' , Album : 'Maamadura ', Duration : " 3:37" , Day : ' 1 days ago' , img : ' https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ba/30/5e/ba305e3f-720e-1f62-64cd-075967bb48fd/cover.jpg/1200x1200bf-60.jpg ' , music : ' /music/hittamil/Maamadura _ Jigarthanda DoubleX _ Raghava Lawrence,SJ Suryah _ Karthik Subbaraj _ Santhosh Narayanan.mp3 '},
        { id: 3, Title: 'Dippam Dappam ', Artist: 'Anirudh Rvichander ' , Album : ' Dippam Dappam ', Duration : "3:53 " , Day : '1 days ago ' , img : 'https://c.saavncdn.com/032/Dippam-Dappam-From-Kaathuvaakula-Rendu-Kaadhal-Tamil-2022-20220422145606-500x500.jpg ' , music : '/music/hittamil/Kaathuvaakula Rendu Kaadhal - Dippam Dappam Video _ Vijay Sethupathi, Anirudh.mp3 '},
        { id: 4, Title: ' Porkkanda Singam', Artist: 'Anirudh Rvichander ' , Album : ' Porkkanda Singam', Duration : " 3:33" , Day : '1 days ago ' , img : 'https://c.saavncdn.com/342/Porkanda-Singam-Rendition-Tamil-2023-20230117160839-500x500.jpg ' , music : '/music/hittamil/Porkanda Singam (EDM Version) (From _Vikram_).mp3  '},
        { id: 5, Title: 'Badass ', Artist: 'Anirudh Rvichander ' , Album : ' Badass ', Duration : " 3:20" , Day : '1 days ago ' , img : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/second-track-badass-from-thalapathy-vijays-leo-will-release-on-september-28-272346383-1x1.jpg?VersionId=t.M92B6sG3jViZP1PWvrJ2.eCWdPFyTo  ' , music : '/music/hittamil/LEO - Badass Lyric _ Thalapathy Vijay _ Lokesh Kanagaraj _ Anirudh Ravichander.mp3  '},
        { id: 1, Title: 'yes, and?', Artist: 'Ariana Grande ' , Album : 'yes, and? ', Duration : "4:31 " , Day : ' 1 day ago' , img : ' https://static.wikia.nocookie.net/arianagrande/images/9/96/Eternal_Sunshine_Cover_1.jpg/revision/latest?cb=20240112051417 ' , music : '/music/hitusa/Ariana Grande - yes, and_.mp3 '},
        { id: 2, Title: 'Lovin On Me', Artist: 'Jack Harlow ' , Album : ' Lovin On Me', Duration : " 3:37" , Day : ' 1 days ago' , img : ' https://i1.sndcdn.com/artworks-yehziW4wQNoafySp-Pete0g-t500x500.jpg ' , music : ' /music/hitusa/Jack Harlow - Lovin On Me [Official Music Video].mp3 '},
        { id: 3, Title: 'Lose Control', Artist: 'Teddt Swim ' , Album : 'Lose Control ', Duration : "3:53 " , Day : '1 days ago ' , img : 'https://i0.wp.com/www.melodicmag.com/wp-content/uploads/2023/06/download-1.jpg?fit=749%2C1000&ssl=1&w=640 ' , music : '/music/hitusa/Teddy Swims - Lose Control (Official Audio).mp3 '},
        { id: 4, Title: 'greedy', Artist: 'Tate McRae ' , Album : 'THINK LATER ', Duration : " 3:33" , Day : '1 days ago ' , img : ' https://i1.sndcdn.com/artworks-OfGdxPzkOTbhCKlH-SGoBFQ-t500x500.jpg' , music : '/music/hitusa/Tate McRae - greedy (Official Video).mp3  '},
        { id: 5, Title: 'redrum ', Artist: '21 savage ' , Album : ' american dream ', Duration : " 3:20" , Day : '1 days ago ' , img : ' https://i.ytimg.com/vi/tf0VK9Ij91E/hqdefault.jpg ' , music : '/music/hitusa/21 Savage - redrum (Official Audio).mp3  '},
        { id: 1, Title: 'Satranga(From "ANIMAL")', Artist: 'Arijit Singh, Shreyas Poornik' , Album : 'Satranga(From "ANIMAL") ', Duration : "4:31 " , Day : ' 1 day ago' , img : 'https://www.manatelangana.news/wp-content/uploads/2023/10/rr-2.jpg ' , music : ' /music/hithindi/ANIMAL_ SATRANGA(Song) Ranbir Kapoor,Rashmika_Sandeep V_Arijit,Shreyas P,Siddharth-Garima _Bhushan K.mp3'},
        { id: 2, Title: 'Husn', Artist: 'Anuv Jain' , Album : 'Husn ', Duration : " 3:37" , Day : ' 1 days ago' , img : 'https://images.hungama.com/c/1/dc3/d94/106345461/106345461_300x300.jpg ' , music : '/music/hithindi/Anuv Jain - HUSN (Official Video).mp3'},
        { id: 3, Title: 'Oh Mahi(From "DUNKI")', Artist: 'Pritam, Arijith Singh.' , Album : 'Oh Mahi(From "DUNKI") ', Duration : "3:53 " , Day : '1 days ago ' , img : ' https://filmfare.wwmindia.com/content/2023/dec/dunki-drop-5-41702296413.jpg' , music : '  /music/hithindi/Dunki Drop 5_ O Maahi _ Shah Rukh Khan _ Taapsee Pannu _ Pritam _ Arijit Singh _ Irshad Kamil.mp3'},
        { id: 4, Title: 'What Jhumka?(From "Rocky Aur Ra..', Artist: 'Pritam, Arijith Singh' , Album : 'What Jhumka?(From "Rocky Aur Ra..', Duration : " 3:33" , Day : '1 days ago ' , img : 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/What-Jhumka-Rocky-Aur-Rani-Kii-Prem-Kahaani-Ranveer-Singh-Alia-Bhatt.jpg ' , music : '/music/hithindi/Darshan Raval - Saajan Ve(Official 4K Video).mp3'},
        { id: 5, Title: ' Chaleya(From "Jawan")', Artist: 'Anirudh Ravichander, Arijith Singh' , Album : 'Chaleya(From "Jawan") ', Duration : " 3:20" , Day : '1 days ago ' , img : ' https://stat5.bollywoodhungama.in/wp-content/uploads/2023/08/Jawan-Chaleya-Hindi-Shah-Rukh-Khan-Nayanthara-1-2-480x360.jpg' , music : ' /music/hithindi/AUR - SHIKAYAT - Raffey - Usama - Ahad (Official Music Video).mp3'},
        { id: 1, Title: ' Standing Next to You (Usher Remix)', Artist: 'Jung kook, USHER ' , Album : ' Standing Next to You (Usher Remix)', Duration : "3:49 " , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/30/eb/96/30eb96f1-7660-bef0-3cb8-ed75f216dc2b/196922734229_Cover.jpg/1200x1200bf-60.jpg ' , music : '/music/hotkorea/정국 (Jung Kook), Usher ‘Standing Next to You - Usher Remix’ Official Performance Video.mp3 '},
        { id: 2, Title: ' Perfect Night', Artist: 'LE SSERAFIM ' , Album : 'Perfect Night ', Duration : " 2:42" , Day : ' 1 days ago' , img : ' https://i.scdn.co/image/ab67616d0000b2735e352f6eccf8cb96d0b247cc ' , music : ' /music/hotkorea/lesserafim.mp3 '},
        { id: 3, Title: 'Seven (ft. Latto)', Artist: 'Jung kook, Latto ' , Album : 'Seven (ft. Latto) ', Duration : "3:04 " , Day : ' 1 day ago' , img : 'https://m.media-amazon.com/images/M/MV5BNDAzYjUzMTEtZDk3YS00OGY1LTgyNTQtNmMzNzg5MTM0NGFjXkEyXkFqcGdeQXVyNDYzNDg2MTM@._V1_.jpg  ' , music : '/music/hotkorea/Seven (feat. Latto) - Clean Ver..mp3 '},
        { id: 4, Title: ' Wife', Artist: '(G)I-DLE ' , Album : ' Wife ', Duration : " 2:01" , Day : '1 days ago ' , img : 'https://i.ytimg.com/vi/ff-s_LFaBiQ/maxresdefault.jpg  ' , music : '/music/kpop/(여자)아이들((G)I-DLE) - Wife Official Music Video.mp3  '},
        { id: 5, Title: 'Ponytail ', Artist: 'KIM JAE HWAN ' , Album : 'Ponytail  ', Duration : " 3:30" , Day : '1 days ago ' , img : 'https://images.genius.com/ef36bf538e5eb37522ae60e3e44379bc.1000x1000x1.jpg  ' , music : '/music/kpop/김재환(KIM JAE HWAN) - Ponytail MV.mp3  '},
        { id: 6, Title: '3D(ft. Jack Harlow)', Artist: 'Jung kook, Jack Harlow ' , Album : ' 3D(ft. Jack Harlow)', Duration : " 3:50" , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jungkook_-_3D.png ' , music : '/music/hotkorea/3D.mp3 '},
        { id: 1, Title: 'Tomboy', Artist: 'Destiny Rogers ' , Album : ' Tomboy', Duration : "3:23 " , Day : ' 1 day ago' , img : 'https://cdns-images.dzcdn.net/images/cover/2baf2f94dd450f933f10e56ea07283e9/500x500.jpg  ' , music : '/music/kpop/Destiny Rogers - Tomboy (Official Video).mp3 '},
        { id: 2, Title: 'Kill This Love', Artist: 'BLACKPINK ' , Album : 'Kill This Love ', Duration : " 3:09" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/b/bc/Blackpink_-_Kill_This_Love.png ' , music : ' /music/throwback/BLACKPINK - Kill This Love M-V.mp3 '},
        { id: 3, Title: 'Kiss and Make Up', Artist: 'Dua Lipa, BLACKPINK ' , Album : 'Dua Lipa ', Duration : "3:09 " , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b273ae395b47b186c2bc8c458e0f ' , music : '/music/kpop/Dua Lipa & BLACKPINK - Kiss and Make Up (Official Audio).mp3 '},
        { id: 4, Title: ' Gorgeous', Artist: 'Taylor Swift ' , Album : ' reputation ', Duration : " 3:29" , Day : '1 days ago ' , img : ' https://images.genius.com/01c5bf888fa73a6b25fb2dee1b4035ff.1000x1000x1.png ' , music : '/music/kpop/Taylor Swift - Gorgeous (Lyric Video).mp3  '},
        { id: 1, Title: 'Nonsense', Artist: 'Sabrina Carpenter ' , Album : 'emails i cant send ', Duration : "2:43 " , Day : ' 1 day ago' , img : ' https://images.genius.com/57f2b42fa08167831c3a1560a9b3398f.1000x1000x1.png ' , music : '/music/kpop/Sabrina Carpenter - Nonsense (Official Video).mp3 '},
        { id: 2, Title: 'Into You', Artist: 'Ariana Grande ' , Album : 'Dangerous Woman ', Duration : " 4:04" , Day : ' 1 days ago' , img : 'https://i.ytimg.com/vi/7RefdXys-mA/maxresdefault.jpg  ' , music : ' /music/kpop/Ariana Grande - Into You (Official Video).mp3 '},
        { id: 3, Title: 'Water', Artist: ' Tyla' , Album : 'Water ', Duration : "3:20 " , Day : '1 days ago ' , img : 'https://i.ytimg.com/vi/wlmUnWLaeog/hqdefault.jpg ' , music : '/music/kpop/Tyla - Water (Official Music Video).mp3 '},
        { id: 4, Title: 'Shut Down', Artist: 'BLACKPINK ' , Album : ' Born Pink', Duration : " 2:55" , Day : '1 days ago ' , img : 'https://i.ytimg.com/vi/JDRyqUx1X8M/maxresdefault.jpg ' , music : '/music/kpop/BLACKPINK - ‘Shut Down’ M-V.mp3  '},
        { id: 1, Title: 'Somebody Else', Artist: 'The 1975 ' , Album : 'i like it when you sleep ', Duration : "5:47 " , Day : ' 1 day ago' , img : ' https://i.scdn.co/image/ab67616d0000b273d3de03550f715df1ea7e0c08 ' , music : '/music/kpop/The 1975 - Somebody Else (Official Video).mp3 '},
        { id: 2, Title: 'Dont look back in Anger', Artist: 'Oasis ' , Album : 'Whats the Story ', Duration : " 4:49" , Day : ' 1 days ago' , img : ' https://i.scdn.co/image/ab67616d0000b2732f2eeee9b405f4d00428d84c ' , music : ' /music/kpop/Oasis - Dont Look Back In Anger (Official HD Remastered Video).mp3 '},
        { id: 3, Title: 'Snap Out of It', Artist: 'Arctic Monkeys ' , Album : 'AM ', Duration : "3:13 " , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163 ' , music : '/music/kpop/Arctic Monkeys - Snap Out Of It (Official Audio).mp3 '},
        { id: 4, Title: 'Cigarette Daydream', Artist: 'Cage The Elephant ' , Album : 'Melophobia ', Duration : " 3:28" , Day : '1 days ago ' , img : 'https://i1.sndcdn.com/artworks-nicDruBoue8L-0-t500x500.jpg ' , music : '/music/kpop/Cage The Elephant - Cigarette Daydreams (Official Video).mp3  '},
        { id: 1, Title: 'Say Yes', Artist: 'Loco , Punch ' , Album : 'Moonlovers ', Duration : "3:38 " , Day : ' 1 day ago' , img : 'https://i.scdn.co/image/ab67616d0000b273cb95963709806e12d93128d4  ' , music : '/music/throwback/[달의 연인 - 보보경심 려 OST Part 2] 로꼬, 펀치 (Loco, Punch) - Say Yes MV.mp3 '},
        { id: 2, Title: 'Sweet Night', Artist: 'V ' , Album : ' ITAEWON CLASS', Duration : " 3:34" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/9/99/V_%E2%80%93_Sweet_Night.jpg ' , music : ' /music/throwback/[MV] V (BTS) - Sweet Night [이태원 클라쓰 OST Part.12 (ITAEWON CLASS OST Part.12)].mp3 '},
        { id: 3, Title: 'Once Again', Artist: 'Mad Clown, Kim Na Young ' , Album : ' Descendants Of the Sun', Duration : "3:55 " , Day : '1 days ago ' , img : 'https://i1.sndcdn.com/artworks-000152673600-tk34ke-t500x500.jpg ' , music : '/music/throwback/Mad Clown & Kim Na Young  - _Once Again (다시 너를) [DOTS OST Pt.5]_ (Color Coded Lyrics Eng-Rom-Han-가사).mp3 '},
        { id: 4, Title: 'Stay With Me', Artist: 'CHANYEOL, Punch ' , Album : 'Guardian ', Duration : " 3:12" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/5/52/Chanyeol-Punch-Goblin-OST-Part-1.jpg ' , music : ' /music/throwback/[도깨비 OST Part 1] 찬열, 펀치 (CHANYEOL, PUNCH) - Stay With Me MV.mp3 '},
        { id: 5, Title: 'Beautiful', Artist: 'Crush ' , Album : 'Guardian ', Duration : " 3:47" , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b273bc051de00f5d0631b8df4bcd ' , music : '/music/throwback/[도깨비 OST Part 4] 크러쉬 (Crush) - Beautiful MV (ENG Sub).mp3  '},
        { id: 1, Title: ' Christmas Tree', Artist: ' V' , Album : ' Our Beloved Summer', Duration : "3:29 " , Day : ' 1 day ago' , img : ' https://upload.wikimedia.org/wikipedia/en/6/60/V_-_Christmas_Tree.png ' , music : '/music/throwback/[M-V] V - Christmas Tree __ 그 해 우리는(Our Beloved Summer) OST Part.5.mp3 '},
        { id: 2, Title: 'Stay With Me', Artist: 'CHANYEOL, Punch ' , Album : 'Guardian ', Duration : " 3:12" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/5/52/Chanyeol-Punch-Goblin-OST-Part-1.jpg ' , music : ' /music/throwback/[도깨비 OST Part 1] 찬열, 펀치 (CHANYEOL, PUNCH) - Stay With Me MV.mp3 '},
        { id: 3, Title: 'With you', Artist: 'Jimin , HA SUNG WOON ' , Album : 'Our Blues Pt4 ', Duration : "3:21 " , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/en/7/7d/Jimin_%26_Ha_Sung-woon_-_With_You.png ' , music : '/music/throwback/[MV] 지민(Jimin) X 하성운(Ha Sung-Woon) - With you _ 우리들의 블루스(Our Blues) OST Part 4.mp3 '},
        { id: 4, Title: 'Beautiful', Artist: 'Crush ' , Album : 'Guardian ', Duration : " 3:47" , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b273bc051de00f5d0631b8df4bcd ' , music : '/music/throwback/[도깨비 OST Part 4] 크러쉬 (Crush) - Beautiful MV (ENG Sub).mp3  '},
        { id: 5, Title: 'Stay Alive(Prod. SUGA of BTS) ', Artist: 'Jung Kook ' , Album : ' Stay Alive ', Duration : " 3:30" , Day : '1 days ago ' , img : ' https://upload.wikimedia.org/wikipedia/en/8/8a/Stay_Alive_single_cover_art.jpg ' , music : '/music/throwback/Jung Kook (정국) ‘Stay Alive (Prod. SUGA of BTS)’ Official MV  _ 7FATES_ CHAKHO Soundtrack.mp3  '},
        { id: 1, Title: 'Maria', Artist: 'Hwasa ' , Album : 'Maria ', Duration : "3:19 " , Day : ' 1 day ago' , img : 'https://upload.wikimedia.org/wikipedia/en/7/73/Hwasa_-_Mar%C3%ADa.jpg  ' , music : '/music/throwback/[MV] 화사 (Hwa Sa) - 마리아 (Maria).mp3 '},
        { id: 2, Title: 'Dingga', Artist: 'MAMAMOO ' , Album : 'Dingga ', Duration : " 2:59" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/e/e9/Mamamoo_-_Dingga.jpg ' , music : ' /music/throwback/[MV] 마마무 (MAMAMOO) - 딩가딩가 (Dingga).mp3 '},
        { id: 3, Title: 'How You Like That', Artist: 'BLACKPINK ' , Album : 'The Album ', Duration : "3:02 " , Day : '1 days ago ' , img : 'https://c.saavncdn.com/185/THE-ALBUM-Korean-2020-20201002093256-500x500.jpg ' , music : '/music/throwback/BLACKPINK - How You Like That M-V.mp3 '},
        { id: 4, Title: 'Dynamite', Artist: ' BTS' , Album : 'BE ', Duration : " 3:19" , Day : '1 days ago ' , img : 'https://soundvapors.com/wp-content/uploads/2020/11/BTS-BE-1.jpg ' , music : '/music/throwback/BTS (방탄소년단) Dynamite Official MV.mp3  '},
        { id: 1, Title: 'Replay', Artist: 'SHINee ' , Album : 'The SHINee World ', Duration : "3:33 " , Day : ' 1 day ago' , img : ' https://i.scdn.co/image/ab67616d0000b273ff8a783336acbef4b6fab82f ' , music : '/music/throwback/SHINee 샤이니 누난 너무 예뻐 (Replay) MV.mp3 '},
        { id: 2, Title: 'Into The New World', Artist: ' Girls Generation' , Album : ' Into The New World', Duration : " 4:27" , Day : ' 1 days ago' , img : ' https://i1.sndcdn.com/artworks-000502726899-3pxs8q-t500x500.jpg ' , music : ' /music/throwback/into the world.mp3 '},
        { id: 3, Title: 'Haru Haru', Artist: 'BIGBANG ' , Album : 'Stand Up ', Duration : "4:16 " , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d00001e02256b86508bfdc54899e4685e ' , music : '/music/throwback/haru haru.mp3 '},
        { id: 4, Title: 'MIROTIC', Artist: ' TVXQ!' , Album : 'MIROTIC ', Duration : " 3:28" , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/en/b/b8/MiroticTVXQ.png ' , music : '/music/throwback/mirotic.mp3  '},
        { id: 5, Title: 'Sorry, Sorry ', Artist: 'SUPER JUNIOR ' , Album : 'Sorry, Sorry  ', Duration : " 3:52" , Day : '1 days ago ' , img : 'https://i.scdn.co/image/ab67616d00001e02fb6e8a26c2c4d9a23f888a94  ' , music : '/music/throwback/sorry sorry.mp3  '},
        { id: 1, Title: ' Standing Next to You (Usher Remix)', Artist: 'Jung kook, USHER ' , Album : ' Standing Next to You (Usher Remix)', Duration : "3:49 " , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/30/eb/96/30eb96f1-7660-bef0-3cb8-ed75f216dc2b/196922734229_Cover.jpg/1200x1200bf-60.jpg ' , music : '/music/hotkorea/정국 (Jung Kook), Usher ‘Standing Next to You - Usher Remix’ Official Performance Video.mp3 '},
        { id: 2, Title: 'Standing Next To You', Artist: 'Jung Kook ' , Album : 'GOLDEN ', Duration : " 3:37" , Day : ' 1 days ago' , img : ' https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f2/54/08/f254081d-c7e2-6cd6-f7c5-dedb56fd95bd/196922710582_Cover.jpg/1200x1200bb.jpg ' , music : ' /music/kpop/정국 (Jung Kook) Standing Next to You Official MV.mp3 '},
        { id: 3, Title: '3D(ft. Jack Harlow)', Artist: 'Jung kook, Jack Harlow ' , Album : ' 3D(ft. Jack Harlow)', Duration : " 3:50" , Day : '1 days ago ' , img : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jungkook_-_3D.png ' , music : '/music/hotkorea/3D.mp3 '},
        { id: 4, Title: 'Seven (ft. Latto)', Artist: 'Jung kook, Latto ' , Album : 'Seven (ft. Latto) ', Duration : "3:04 " , Day : ' 1 day ago' , img : 'https://m.media-amazon.com/images/M/MV5BNDAzYjUzMTEtZDk3YS00OGY1LTgyNTQtNmMzNzg5MTM0NGFjXkEyXkFqcGdeQXVyNDYzNDg2MTM@._V1_.jpg  ' , music : '/music/hotkorea/Seven (feat. Latto) - Clean Ver..mp3 '},
        { id: 5, Title: 'Yes or No', Artist: 'Jung Kook ' , Album : ' GOLDEN', Duration : " 2:27" , Day : '1 days ago ' , img : 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f2/54/08/f254081d-c7e2-6cd6-f7c5-dedb56fd95bd/196922710582_Cover.jpg/1200x1200bb.jpg ' , music : '/music/kpop/Yes or No.mp3  '},
        { id: 1, Title: 'Run BTS', Artist: 'BTS ' , Album : 'Proof ', Duration : "3:29 " , Day : ' 1 day ago' , img : ' https://i.pinimg.com/736x/46/e2/ae/46e2ae36684cb7d1ae2f8ff1fdfd52b9.jpg ' , music : '/music/kpop/Run Bts.mp3 '},
        { id: 2, Title: 'FAKE LOVE', Artist: 'BTS ' , Album : 'Love Yourself : TEARS', Duration : " 5:18" , Day : ' 1 days ago' , img : ' https://upload.wikimedia.org/wikipedia/en/8/84/Fake_Love_%28Rocking_Vibe_Mix%29_Cover_Art.jpg ' , music : ' /music/kpop/BTS (방탄소년단) FAKE LOVE Official MV.mp3 '},
        { id: 3, Title: 'Life Goes On', Artist: ' BTS' , Album : 'BE ', Duration : "3:50 " , Day : '1 days ago ' , img : 'https://soundvapors.com/wp-content/uploads/2020/11/BTS-BE-1.jpg ' , music : '/music/kpop/BTS (방탄소년단) Life Goes On Official MV.mp3 '},
        { id: 4, Title: 'DNA', Artist: 'BTS ' , Album : 'Love Yourself : HER ', Duration : " 4:15" , Day : '1 days ago ' , img : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99c08eac-1777-4459-81b0-341be2da5190/dbnzq1q-7a603463-13e2-4671-98c2-097bfd2b435c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YzA4ZWFjLTE3NzctNDQ1OS04MWIwLTM0MWJlMmRhNTE5MFwvZGJuenExcS03YTYwMzQ2My0xM2UyLTQ2NzEtOThjMi0wOTdiZmQyYjQzNWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iBoNEJZ6Memf8Pl_r7un1tTrvueQRUv3hhwBtdnb2Uc ' , music : '/music/kpop/BTS (방탄소년단) DNA Official MV.mp3  '},
        { id: 5, Title: ' Just One Day', Artist: 'BTS ' , Album : 'Skool Luv Affair  ', Duration : " 3:59" , Day : '1 days ago ' , img : ' https://images.genius.com/3cd591cd9ae258bbf0cc13215c2c7206.1000x1000x1.png ' , music : '/music/kpop/[MV] BTS(방탄소년단) _ Just One Day(하루만).mp3  '},
        { id: 6, Title: 'Home ', Artist: 'BTS ' , Album : 'MAP OF THE SOUL : PERSONA  ', Duration : " 3:54" , Day : '1 days ago ' , img : ' https://media.pitchfork.com/photos/5cb0d6de7854d260bcd4e2ac/1:1/w_450%2Cc_limit/BTS.jpg ' , music : '/music/kpop/HOME.mp3  '},
        { id: 1, Title: 'Wife', Artist: '(G)I-DLE ' , Album : ' Wife', Duration : "2:01 " , Day : ' 1 day ago' , img : ' https://6.soompi.io/wp-content/uploads/image/20240121152710_GIDLE_f0bf7d.jpg?s=900x600&e=t ' , music : '/music/kpop/(여자)아이들((G)I-DLE) - Wife Official Music Video.mp3 '},
        { id: 2, Title: 'All Night', Artist: 'IVE ' , Album : 'All Night ', Duration : " 3:17" , Day : ' 1 days ago' , img : ' https://i.ytimg.com/vi/5kMRYb4kc6c/sddefault.jpg ' , music : ' /music/kpop/all night.mp3 '},
        { id: 3, Title: 'LALALA', Artist: 'Stray Kids ' , Album : 'ROCK-STAR ', Duration : "3:02 " , Day : '1 days ago ' , img : 'https://images.genius.com/43a5d3d217e86667c8307ab887dd0870.1000x1000x1.jpg ' , music : '/music/kpop/Stray Kids _락 (樂) (LALALALA)_ M-V.mp3 '},
        { id: 4, Title: 'Sweet Venom', Artist: 'Enhypen ' , Album : ' ORANGE BLOOD', Duration : " 2:28" , Day : '1 days ago ' , img : 'https://i1.sndcdn.com/artworks-tnyiJf058o9y-0-t500x500.jpg ' , music : '/music/kpop/ENHYPEN (엔하이픈) Sweet Venom Official MV.mp3  '},
        { id: 5, Title: 'Love Wins All ', Artist: ' IU' , Album : ' Love Wins All ', Duration : " 4:31" , Day : '1 days ago ' , img : 'https://i.ytimg.com/vi/ZqJ7bfgacSA/maxresdefault.jpg  ' , music : '/music/kpop/IU Love wins all MV.mp3  '},

    ];

    const [playlist, setPlaylist] = useState(() => {
        const storedPlaylist = localStorage.getItem('playlist');
        return storedPlaylist ? JSON.parse(storedPlaylist) : [];
    });

    useEffect(() => {
        localStorage.setItem('playlist', JSON.stringify(playlist));
    }, [playlist]);
    
    const [song, setSong] = useState(songs);
    const [searchTerm, setSearchTerm] = useState('');

    const addToPlaylist = (song) => {
        setPlaylist([...playlist, song]);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSongs = useMemo(() => {
        return searchTerm.trim() === '' ? [] : song.filter(song =>
            song.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [song, searchTerm]);

    const [hoveredId, setHoveredId] = useState(null);
    const [playingId, setPlayingId] = useState(null);
    const [audioElements, setAudioElements] = useState({});
    
    
    const handlePlayPauseClick = (songId) => {
      const audio = new Audio(songs.find((song) => song.id === songId).music);
    
      if (playingId === songId) {
        setPlayingId(null);
        audio.pause();
      } else {
        if (playingId !== null) {
          const currentlyPlayingAudio = audioElements[playingId];
          currentlyPlayingAudio.pause();
        }
    
        setPlayingId(songId);
        audio.play();
      }
    
      setAudioElements((prevElements) => ({ ...prevElements, [songId]: audio }));
    };
    
    useEffect(() => {
      return () => {
        if (playingId !== null) {
          const audio = audioElements[playingId];
          if (audio) {
            audio.pause();
          }
        }
      };
    }, [playingId, audioElements]);


const removeFromPlaylist = (index) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter((_, i) => i !== index));
};



    return(
        <>
            <div className="container mx-auto mt-3">
                <div className="flex flex-row flex-wrap">
                <SidebarPlayist/>
                    <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
                        <div className="flex width m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
                            <div className="flex flex-col w-full ">

                                
                                <div  style={{ overflowY: 'auto', maxHeight: '495px', marginBlockEnd: "5px" }}>

                                    <div className="flex items-center justify-between p-4 bg-zinc-600 bg-opacity-70 w-full">
                                        <div className="flex-1">
                                            <div className="text-lg text-slate-200">
                                                <span className="material-symbols-outlined">arrow_back_ios</span>  <span className="material-symbols-outlined">arrow_forward_ios</span>
                                            </div>
                                        </div>
                                        <div className="flex-1"></div>

                                        <div className="flex-1 ms-80">
                                            <div className="flex items-center text-white gap-9">
                                                <Link to='/log'>
                                                    <button className="bg-white text-xs font-bold py-2 border-none px-4 rounded-full cursor-pointer" title="Upgrade to Premium">Explore Premium</button>
                                                </Link>
                                                <span><i className="bi bi-bell bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer" title="What's New"></i></span>
                                                <span className="material-symbols-outlined  bg-gray-800 bg-opacity-50 p-2 rounded-full">person</span>
                                            </div>
                                        </div>   
                                    </div>
                                     
                                     <div className="flex flex-col bg-zinc-600 bg-opacity-70">
                                        <div className="flex flex-row">
                                          <div className="p-5"> <img
                                             src="/image/musi.jpg"
                                             style={{ width: '250px', height: '250px', marginRight: '8px', borderRadius: '10px', objectFit:'cover', backgroundColor : 'gray' }}
                                            /></div>

                                          <div>
                                            <div className="flex flex-col mt-14">
                                                <div><p className="text-white text-xl font-medium">Playlist</p></div>
                                                <div><p className="text-white text-7xl font-extrabold font-9">My Playlist #1</p></div>
                                            </div>
                                          </div>
                                        </div>

                                     </div>
                                    
                                     <div className="flex flex-col bg-zinc-600 bg-opacity-40 p-10">
                                        <div className="text-2xl text-white"><i className="bi bi-three-dots"></i></div>
                                     </div>

                                    
                                     {playlist.length > 0 && (
    <table className="table-auto w-full text-white">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Artist</th>
                <th className="px-4 py-2 text-left">Album</th>
            </tr>
        </thead>
        <tbody>
            {playlist.map((song, index) => (
                <tr
                    key={song.id}
                    className={`text-white song-row ${hoveredId === song.id ? 'hovered' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredId(song.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <td className="px-4 py-2">{index + 1}
                    {hoveredId === song.id && (
                            <>
                                {playingId === song.id ? (
                                    <i className="bi bi-pause-fill" onClick={() => handlePlayPauseClick(song.id)}></i>
                                ) : (
                                    <i className="bi bi-play-fill" onClick={() => handlePlayPauseClick(song.id)}></i>
                                )}
                            </>
                        )}
                    </td>
                    
                    <td className="px-4 py-2">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={song.img}
                                style={{ width: '40px', height: '40px', marginRight: '8px', borderRadius: '10px', objectFit: 'cover', backgroundColor: 'gray' }}
                            />
                            <div className="tracking-wide">
                                <p className="text-white text-sm font-9">{song.Title}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-2">{song.Artist}</td>
                    <td className="px-4 py-2">{song.Album}</td>
                    <td className="px-4 py-2">
                        {hoveredId === song.id && (
                            <>
                                <i className="bi bi-trash-fill" onClick={() => removeFromPlaylist(index)}></i> 
                            </>
                        )}
                        {playingId === song.id && (
                            <audio
                                id={`audio-${song.id}`}
                                controls={false}
                                src={song.music}
                                autoPlay
                            ></audio>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)}


                                 <div className="flex flex-col pb-8 bg-zinc-600 bg-opacity-30">
                                    <div className="p-7 text-white text-2xl font-9 font-bold tracking-tight">Let's find something for your playlist </div>
                                    <div className="relative px-10 pb-5">
                                       <input className="w-80 h-10 bg-zinc-700 px-4 py-2 rounded-md border-none cursor-pointer" type="search" name="search" placeholder="Search for Songs" onChange={handleSearch}/>
                                       </div>
                                       {filteredSongs.length > 0 && (
                                        <div className="relative px-10 pb-5">
                                            <table className="table-auto">
                                                <tbody>
                                                    {filteredSongs.map((song, index) => (
                                                        <tr key={index}>
                                                           <td className="py-2" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={song.img}
              alt={`Album cover for ${song.Title}`}
              style={{ width: '40px', height: '40px', marginRight: '8px', borderRadius: '10px' }}
            />
            <div className="text-sm text-white tracking-wide">
              <p >{song.Title}</p>
              <p>{song.Artist}</p>
            </div>
          </td>
                                                            <td>
                                                                <button
                                                                    type="button"
                                                                    className="bg-zinc-900 text-white text-md border-none p-3 rounded-full ms-96 cursor-pointer"
                                                                    onClick={() => addToPlaylist(song)}
                                                                >
                                                                    Add
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    </div>

                                    <div className="flex flex-col lg:flex-row lg:mt-24 lg:ms-10 lg:gap-20">
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Company</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>About</p>
                                                <p>Jobs</p>
                                                <p>For the Record</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Communities</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>For Artists</p>
                                                <p>Developers</p>
                                                <p>Advertising</p>
                                                <p>Investors</p>
                                                <p>Vendors</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Use links</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>Support</p>
                                                <p>Freeb Mobile App</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row gap-4">
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-instagram"></i></div>
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-twitter"></i></div>
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-facebook"></i></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}
