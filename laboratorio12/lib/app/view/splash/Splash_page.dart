import 'package:flutter/material.dart';
import 'package:laboratorio12/app/view/components/h1.dart';
import 'package:laboratorio12/app/view/components/shape.dart';
import 'package:laboratorio12/app/view/task_lis/Task_list_page.dart';

class SplashPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      children: [
        const Row(children: [
          Shape(),
        ]),
        const SizedBox(height: 79),
        Image.asset(
          'assets/images/onboarding-image.png',
          width: 180,
          height: 168,
        ),
        const SizedBox(height: 9),
        const H1('Explora tu Música'),
        const SizedBox(height: 21),
        const Padding(padding: EdgeInsets.symmetric(horizontal: 32)),
        GestureDetector(
          onTap: () {
            Navigator.of(context).push(MaterialPageRoute(builder: (context) {
              return MusicPlayerPage();
            }));
          },
          child: const Text(
            'Descubre la experiencia musical perfecta. Reproduce tus canciones favoritas y disfruta de la música en cualquier momento.',
            textAlign: TextAlign.center,
          ),
        )
      ],
    ));
  }
}
