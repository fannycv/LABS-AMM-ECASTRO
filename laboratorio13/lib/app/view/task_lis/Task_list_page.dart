import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:laboratorio10/app/model/task.dart';
import 'package:laboratorio10/app/view/components/h1.dart';
import 'package:shared_preferences/shared_preferences.dart';

class TaskListPage extends StatefulWidget {
  const TaskListPage({super.key});

  @override
  State<TaskListPage> createState() => _TaskListPageState();
}

class _TaskListPageState extends State<TaskListPage> {
  final taskList = <Task>[];

  @override
  void initState() {
    super.initState();
    initializeTasks();
  }

  Future<void> initializeTasks() async {
    final prefs = await SharedPreferences.getInstance();
    final taskStrings = prefs.getStringList('tasks');

    if (taskStrings != null) {
      taskList.clear();
      for (final taskString in taskStrings) {
        final taskMap = jsonDecode(taskString);
        final task = Task.fromJson(taskMap);
        taskList.add(task);
      }
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Registro de Asistencia'),
        leading: GestureDetector(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: Center(child: Text('Atrás')),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: double.infinity,
            color: Theme.of(context).colorScheme.primary,
            child: Column(
              children: [
                const SizedBox(height: 16),
                Image.asset(
                  'assets/images/tasks-list-image.png',
                  width: 120,
                  height: 120,
                ),
                const SizedBox(height: 16),
                const H1('Registra tus asistencias', color: Colors.white),
              ],
            ),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 25),
            child: H1('Asistencias'),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 30),
              child: ListView.separated(
                itemCount: taskList.length,
                itemBuilder: (_, index) => _TaskItem(
                  taskList[index],
                  onTap: () {
                    _showTaskDetails(context, taskList[index]);
                  },
                ),
                separatorBuilder: (_, __) => const SizedBox(
                  height: 16,
                ),
              ),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _showNewTaskModal(context);
        },
        child: const Icon(Icons.add, size: 50),
      ),
    );
  }

  void _showNewTaskModal(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (_) => _NewTaskModal(
        onTaskCreated: (Task task) {
          setState(() {
            taskList.add(task);
          });

          Navigator.of(context).pop();
        },
      ),
    );
  }

  void _showTaskDetails(BuildContext context, Task task) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(task.title),
        content: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Estado: ${task.done ? 'Asistio' : 'Pendiente'}'),
            if (task.location != null)
              Text(
                'Ubicación: ${task.location!.latitude}, ${task.location!.longitude}',
              ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: Text('Cerrar'),
          ),
        ],
      ),
    );
  }
}

class _TaskItem extends StatelessWidget {
  const _TaskItem(this.task, {super.key, this.onTap});
  final Task task;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(21)),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 21, vertical: 18),
          child: Row(
            children: [
              Icon(
                task.done
                    ? Icons.check_box_rounded
                    : Icons.check_box_outline_blank,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(width: 10),
              Text(task.title),
            ],
          ),
        ),
      ),
    );
  }
}

class _NewTaskModal extends StatefulWidget {
  _NewTaskModal({Key? key, required this.onTaskCreated}) : super(key: key);

  final void Function(Task task) onTaskCreated;

  @override
  _NewTaskModalState createState() => _NewTaskModalState();
}

class _NewTaskModalState extends State<_NewTaskModal> {
  final _controller = TextEditingController();
  Position? _currentPosition;

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
  }

  Future<void> _getCurrentLocation() async {
    try {
      final position = await Geolocator.getCurrentPosition(
          desiredAccuracy: LocationAccuracy.high);
      setState(() {
        _currentPosition = position;
      });
    } catch (e) {
      print('Error al obtener la ubicación: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).requestFocus(FocusNode());
      },
      child: Scaffold(
        body: SingleChildScrollView(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 33, vertical: 23),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.vertical(
                top: Radius.circular(21),
              ),
              color: Colors.white,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                H1('Nueva Asistencia'),
                const SizedBox(height: 26),
                TextField(
                  controller: _controller,
                  decoration: InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    hintText: 'Descripción de la asistencia',
                  ),
                ),
                const SizedBox(height: 16),
                Text('Ubicación (automática):'),
                if (_currentPosition != null)
                  Text(
                    'Latitud: ${_currentPosition!.latitude}, Longitud: ${_currentPosition!.longitude}',
                  ),
                const SizedBox(height: 26),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty &&
                        _currentPosition != null) {
                      final task = Task(_controller.text);
                      task.location = Location(
                        latitude: _currentPosition!.latitude,
                        longitude: _currentPosition!.longitude,
                      );
                      widget.onTaskCreated(task);
                    } else {}
                  },
                  child: Text("Guardar"),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
