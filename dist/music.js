const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "I Miss You",
        artist: 'Czarina',
        url: 'http://fs.w.kugou.com/201809181831/08a74580fe5f30932c8aaf2e1f170813/G013/M06/04/11/TQ0DAFULdt-AfwSvADgNY3dhOQc093.mp3',
        cover: 'http://imge.kugou.com/stdmusic/240/20150718/20150718044549325738.jpg',
      },
      {
        name: 'Bressanone',
        artist: 'Matthew Lien',
        url: 'http://fs.w.kugou.com/201809182007/b9fb7cb026d93e13d7277b016ecc495d/G046/M01/09/1F/zoYBAFYMAXmAU6yOAEgNFkKzm1I885.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/softhead/400/20121214/20121214154728327.jpg',
      },
      {
        name: 'Moonlight Shadow',
        artist: 'Dana Winner',
        url: 'http://fs.w.kugou.com/201809182014/366baeff5ae5be8b20d904be87e57a0c/G001/M09/1C/13/QQ0DAFSXev-AXQ7LAEHxoZNaFdo166.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20160907/20160907231743395186.jpg',
      }
    ]
});