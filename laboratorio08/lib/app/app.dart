import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Laboratorio 08'),
        ),
        body: const Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('Hola mundo', style: TextStyle(fontSize: 24)),
              SizedBox(height: 10),
              Text('Estefany Castro Vilchez',
                  style: TextStyle(fontSize: 18, color: Colors.purple)),
            ],
          ),
        ),
      ),
    );
  }
}
