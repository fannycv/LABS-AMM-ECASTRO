import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:laboratorio10/app/view/login_screen.dart';

class CarouselPage extends StatelessWidget {
  final String imageAsset;
  final String title;
  final String description;

  CarouselPage({
    required this.imageAsset,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.asset(
            imageAsset,
            width: 141,
            height: 129,
          ),
          const SizedBox(height: 30),
          const Padding(
            padding: EdgeInsets.only(left: 16.0),
            child: Text(
              'FashionHub',
              style: TextStyle(
                fontFamily: 'Poppins',
                fontWeight: FontWeight.bold,
                fontSize: 24,
              ),
            ),
          ),
          const SizedBox(height: 60),
          Center(
            child: Image.asset(
              'assets/images/estilo.png',
              width: 180,
              height: 168,
            ),
          ),
          const SizedBox(height: 9),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 32),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  title,
                  textAlign: TextAlign.center,
                  style: Theme.of(context)
                      .textTheme
                      .bodyMedium!
                      .copyWith(fontSize: 18, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 21),
                Text(
                  description,
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 80),
                ElevatedButton(
                  onPressed: () {
                    // Acciones al hacer clic en el botón "Get Started"
                  },
                  style: ElevatedButton.styleFrom(
                    primary: const Color(0xFF40B7AD),
                    minimumSize: const Size(double.infinity, 50),
                  ),
                  child: const Text(
                    'Get Started',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => LoginScreen()),
                    );
                  },
                  child: const Text(
                    "Don't have an account? Sign up",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.blue,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: CarouselSlider(
        options: CarouselOptions(
          height: MediaQuery.of(context).size.height,
          enableInfiniteScroll: false,
          viewportFraction: 1.0,
          aspectRatio: 16 / 9,
          onPageChanged: (index, reason) {},
        ),
        items: [
          CarouselPage(
            imageAsset: 'assets/images/Vector.png',
            title: 'Explora Tendencias',
            description:
                'Descubre las últimas tendencias de moda y estilo. Inspírate con looks de moda únicos y creativos.',
          ),
          CarouselPage(
            imageAsset: 'assets/images/Vector.png',
            title: 'Estilo Personalizado',
            description:
                'Recibe recomendaciones personalizadas según tu estilo único. Experimenta con diferentes looks y encuentra tu propio estilo de moda',
          ),
          CarouselPage(
            imageAsset: 'assets/images/Vector.png',
            title: 'Comunidad de Estilo',
            description:
                'Conéctate con amantes de la moda de todo el mundo.Comparte tus looks, obtén feedback y descubre nuevas ideas de estilo.',
          ),
        ],
      ),
    );
  }
}
