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
        name: '9420',
        artist: '��С��',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '������',
        artist: '������',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});