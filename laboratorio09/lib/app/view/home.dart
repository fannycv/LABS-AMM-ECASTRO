import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 221, 140, 17),
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 20),
            const SizedBox(
              width: 300,
              child: CircleAvatar(
                backgroundColor: (Color.fromARGB(255, 249, 200, 128)),
                maxRadius: 200,
                child: Image(
                  image: AssetImage('assets/profile.png'),
                  width: 300,
                  height: 300,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.only(left: 60, right: 60),
              child: const Text(
                'Listo para hacer un nuevo amigo peludo?',
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w700,
                    color: Colors.white),
              ),
            ),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.only(left: 60, right: 60),
              child: const Text(
                'Conoce a mascotas que necesitan un hogar y encuentra tu compañero perfecto. ¡La adopción de mascotas nunca ha sido tan fácil!',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 70,
              width: 340,
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amber, // Establecer el color de fondo
                ),
                child: const Text(
                  'Get Started',
                  style: TextStyle(color: Colors.white, fontSize: 19),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
