import 'package:flutter/material.dart';
import 'package:laboratorio12/app/view/model/task.dart';

class MusicPlayerPage extends StatefulWidget {
  const MusicPlayerPage({super.key});

  @override
  State<MusicPlayerPage> createState() => _MusicPlayerPageState();
}

class _MusicPlayerPageState extends State<MusicPlayerPage> {
  bool isPlaying = false;
  int currentSongIndex = 0;
  double volume = 0.5;

  List<Song> playlist = [
    Song(
        title: 'Song 1',
        artist: 'Artist 1',
        imagePath: 'assets/images/artista1.jpeg'),
    Song(
        title: 'Song 2',
        artist: 'Artist 2',
        imagePath: 'assets/images/artista2.jpeg'),
    Song(
        title: 'Song 3',
        artist: 'Artist 3',
        imagePath: 'assets/images/artista3.jpeg'),
  ];

  void playPause() {
    setState(() {
      isPlaying = !isPlaying;
    });
  }

  void nextSong() {
    setState(() {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
    });
  }

  void adjustVolume(double value) {
    setState(() {
      volume = value;
    });
  }

  @override
  @override
  Widget build(BuildContext context) {
    Song currentSong = playlist[currentSongIndex];

    return Scaffold(
      appBar: AppBar(
        title: Text('Music Player'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '${currentSong.title} - ${currentSong.artist}',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 20),
            Image.asset(
              currentSong.imagePath,
              width: 100,
              height: 100,
            ),
            SizedBox(height: 20),
            Icon(
              isPlaying ? Icons.pause : Icons.play_arrow,
              size: 50,
            ),
            SizedBox(height: 20),
            Slider(
              value: volume,
              onChanged: adjustVolume,
            ),
          ],
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: playPause,
            child: Icon(isPlaying ? Icons.pause : Icons.play_arrow),
          ),
          SizedBox(width: 10),
          FloatingActionButton(
            onPressed: nextSong,
            child: Icon(Icons.skip_next),
          ),
        ],
      ),
    );
  }
}
